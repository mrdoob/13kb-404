import * as THREE from 'https://unpkg.com/three@0.120.1/build/three.module.js';
import { VRButton } from 'https://unpkg.com/three@0.120.1/examples/jsm/webxr/VRButton.js';

import { song } from './Song.js';
import { song as fxEnd } from './FXEnd.js';
import { song as fxShoot } from './FXShoot.js';
import { song as fxToken } from './FXToken.js';
import { SoundBox } from './SoundBox.js';
import { Map } from './Map.js';
import { Gun } from './Gun.js';

let camera, scene, renderer, dummy;
let controller1, controller2, raycaster;

let gun, map, start, end, tokens;
let currentLevel = 1;
let showTitle = true;

let listener, sound, soundEnd, soundShoot, soundToken;

init();

async function init() {

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );

  dummy = new THREE.Group();
  scene.add( dummy );
  
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 100 );
  camera.position.set( 0, 1.6, 0 );
  dummy.add( camera );

  //

  listener = new THREE.AudioListener();
  camera.add( listener );
  
  const loader = new THREE.AudioLoader();
  const soundbox = new SoundBox();

  sound = new THREE.Audio( listener );
  sound.setBuffer( await loader.loadAsync( await soundbox.generate( song ) ) );
  sound.setLoop( true );
  camera.add( sound );
  
  soundEnd = new THREE.Audio( listener );
  soundEnd.setBuffer( await loader.loadAsync( await soundbox.generate( fxEnd ) ) );
  camera.add( soundEnd );
  
  soundShoot = new THREE.Audio( listener );
  soundShoot.setBuffer( await loader.loadAsync( await soundbox.generate( fxShoot ) ) );
  camera.add( soundShoot );
  
  soundToken = new THREE.Audio( listener );
  soundToken.setBuffer( await loader.loadAsync( await soundbox.generate( fxToken ) ) );
  camera.add( soundToken );

  /*
  sound = new THREE.PositionalAudio( listener );
  sound.setBuffer( buffer );
  sound.setLoop( true );
  sound.setRefDistance( 1 );
  */

  //

  gun = new Gun();
  scene.add( gun.group );
  
  loadMap( currentLevel );

  //

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setAnimationLoop( render );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.xr.enabled = true;
  renderer.xr.addEventListener( 'sessionstart', function () {
    showTitle = false;
    loadMap( currentLevel );
    sound.play();
  } );
  renderer.xr.addEventListener( 'sessionend', function () {
    showTitle = true;
    loadMap( currentLevel );
    sound.stop();
  } );
  document.body.appendChild( renderer.domElement );
  document.body.appendChild( VRButton.createButton( renderer ) );

  window.addEventListener( 'resize', onWindowResize, false );

  //
  
  controller1 = renderer.xr.getController( 0 );
  controller1.addEventListener( 'connected', onConnected );
  dummy.add( controller1 );

  controller2 = renderer.xr.getController( 1 );
  controller2.addEventListener( 'connected', onConnected );
  dummy.add( controller2 );
  
  //

  raycaster = new THREE.Raycaster();

}

function loadMap( level ) {
    
  if ( map !== undefined ) {
    
    scene.remove( map.group );
    
  }
  
  if ( showTitle === true ) level = 0;
  
  map = new Map( level );
  scene.add( map.group );
  
  const children = map.group.children;
  
  start = children[ 0 ];
  end = children[ 1 ];
  tokens = children[ 2 ];
  
  if ( showTitle === true ) {
    
    const mesh = map.group.children[ 3 ];
    mesh.scale.y = 0.5;
    mesh.geometry.center();
    
    const shadow = mesh.clone();
    shadow.material = new THREE.MeshBasicMaterial( { color: 0x0000bb } );
    shadow.position.y = - 2;
    map.group.add( shadow );

    start.visible = false;

    end.position.set( 0, - 3, 0 );
    end.scale.setScalar( 70 );

  }

  dummy.position.copy( start.position );
  dummy.rotation.set( 0, Math.PI, 0 );
  
  gun.setMap( map );

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
  
}

function onConnected( event ) {
  
  let controller = event.target;
  
  controller.userData.gamepad = event.data.gamepad;
  controller.userData.handedness = event.data.handedness;
  
  if ( event.data.handedness === 'right' ) {
    
    let geometry = new THREE.BufferGeometry()
    geometry.setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, - 1 ) ] );

    let line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x0000ff } ) );
    line.scale.z = 2;
    
    controller.add( line );

  }
  
}

function handleController( controller ) {
  
  const gamepad = controller.userData.gamepad;
  
  switch ( controller.userData.handedness ) {
      
    case "left":

      dummy.rotateY( - gamepad.axes[ 2 ] * 0.03 );

      const translate = gamepad.axes[ 3 ] * 0.03;
      const direction = Math.sin( translate );
      
      raycaster.ray.origin.copy( dummy.position );
      raycaster.ray.direction.set( 0, 0, direction ).applyQuaternion( dummy.quaternion );
      
      const intersections = raycaster.intersectObject( map.group.children[ 3 ] );
      
      if ( intersections.length > 0 ) {
        
        const intersection = intersections[ 0 ];
        
        if ( intersection.distance > translate + 1.5 ) {
          
          dummy.translateZ( translate );
          
        }
        
      }
      
      break;
      
    case "right":

      if ( gamepad.buttons[ 0 ].pressed ) {
              
        gun.shoot( controller );

        if ( soundShoot.isPlaying === false ) soundShoot.play();
        
      } else {
        
        if ( soundShoot.isPlaying === true ) soundShoot.stop();
        
      }
      
      break;
      
  }
  
}

//

function render() {
  
  if ( showTitle === true ) {
    
    const time = performance.now() / 5000;
    
    map.group.rotation.x = Math.sin( time ) / 4;
    map.group.rotation.y = Math.PI;
    map.group.rotation.z = Math.cos( time * 1.1234 ) / 4;

    camera.position.y = 50;
    camera.position.z = 2;
    camera.rotation.x = - Math.PI / 2;
    
  } else {

    handleController( controller1 );
    handleController( controller2 );
    
    if ( dummy.position.distanceTo( end.position ) < 1 ) {
    
      soundEnd.play();
      loadMap( ++ currentLevel );
      
    }
    
    for ( let i = 0; i < tokens.children.length; i ++ ) {

      const token = tokens.children[ i ];

      if ( token.visible === true && dummy.position.distanceTo( token.position ) < 1.5 ) {
        
        soundToken.play();

        token.visible = false;
        
      }

    }
    
    map.update();

  }

  renderer.render( scene, camera );

}