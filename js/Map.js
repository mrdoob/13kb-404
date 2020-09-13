import * as THREE from 'https://unpkg.com/three@0.120.1/build/three.module.js';
import { Cylinder } from './Cylinder.js'

const image = new Image();
image.src = "data:image/gif;base64,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";

const fl = [ 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1 ];
const ce = [ 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 ];
const wn = [ 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0 ];
const ws = [ 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1 ];
const ww = [ 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0 ];
const we = [ 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1 ];

const cylinder = new Cylinder( 10, 1 );
const token = new THREE.Mesh( new THREE.IcosahedronBufferGeometry( 0.25 ), new THREE.MeshNormalMaterial() );

function Map( level ) {

  const group = new THREE.Group();

  const start = new THREE.Mesh( cylinder, new THREE.MeshBasicMaterial( {
    color: 0xff2222, vertexColors: true, side: THREE.BackSide, blending: THREE.MultiplyBlending, transparent: true
  } ) );
  start.scale.y = 2;
  group.add( start );

  const end = new THREE.Mesh( cylinder, new THREE.MeshBasicMaterial( {
    color: 0x2222ff, vertexColors: true, side: THREE.BackSide, blending: THREE.MultiplyBlending, transparent: true
  } ) );
  end.scale.y = 2;
  group.add( end );

  const tokens = new THREE.Group();
  group.add( tokens );

  //

  const canvas = document.createElement( 'canvas' );
  canvas.width = 64;
  canvas.height = 64;

  const offsetX = level % 4;
  const offsetY = Math.floor( level / 4 );

  const context = canvas.getContext( '2d' );
  context.drawImage( image, - offsetX * 64, - offsetY * 64 );

  const imagedata = context.getImageData( 0, 0, 64, 64 );
  const data = imagedata.data;

  //

  const vertices = [];

  for ( let i = 0, j = 0; i < data.length; i += 4, j ++ ) {

    const x = j % 64;
    const z = Math.floor( j / 64 );

    const c = color( data, i );

    if ( c > 0 ) {

      add( vertices, fl, x, z );
      add( vertices, ce, x, z );

      if ( color( data, i - 4 ) === 0 ) add( vertices, ww, x, z );
      if ( color( data, i + 4 ) === 0 ) add( vertices, we, x, z );
      if ( color( data, i - 256 ) === 0 ) add( vertices, wn, x, z );
      if ( color( data, i + 256 ) === 0 ) add( vertices, ws, x, z );

      //

      if ( c === 0xff0000 ) start.position.set( x + 0.5, 0.01, z + 0.5 );
      if ( c === 0x0000ff ) end.position.set( x + 0.5, 0.01, z + 0.5 );

      if ( c === 0x00ff00 ) {

        const mesh = token.clone();
        mesh.position.set( x + 0.5, 1, z + 0.5 );
        tokens.add( mesh );

      }

    }

  }

  const attribute = new THREE.Float32BufferAttribute( vertices, 3 );

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute( 'position', attribute );
  geometry.computeVertexNormals();

  const material = new THREE.MeshBasicMaterial();
  // const material = new THREE.MeshNormalMaterial( { flatShading: true } );

  const mesh = new THREE.Mesh( geometry, material );
  mesh.scale.y = 2;
  group.add( mesh );

  function update() {

    for ( let i = 0; i < tokens.children.length; i ++ ) {

      const token = tokens.children[ i ];
      token.rotation.x += 0.01;
      token.rotation.y += 0.01;

    }

    start.rotation.y += 0.02;
    end.rotation.y += 0.02;

  }

  return {

    group: group,
    update: update

  };

}

function color( data, i ) {

  return data[ i + 0 ] << 16 | data[ i + 1 ] << 8 | data[ i + 2 ];

}

function add( vertices, tile, x, z ) {

  for ( let i = 0; i < 18; i += 3 ) {

    vertices.push( tile[ i + 0 ] + x, tile[ i + 1 ], tile[ i + 2 ] + z );

  }

}

export { Map };
