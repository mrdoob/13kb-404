import * as THREE from 'https://unpkg.com/three@0.120.1/build/three.module.js';

const image = new Image();
image.src = "data:image/gif;base64,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";

const fl = [ 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1 ];
const ce = [ 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 ];
const wn = [ 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0 ];
const ws = [ 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1 ];
const ww = [ 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0 ];
const we = [ 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1 ];

const circle = new THREE.CylinderBufferGeometry( 0.5, 0.5, 0.5, 5 ).translate( 0, 0.25, 0 );

const vertices = circle.attributes.position.array;
const colors = new Float32Array( vertices.length );

for ( let i = 0; i < vertices.length; i += 3 ) {
  
  colors[ i + 0 ] = colors[ i + 1 ] = colors[ i + 2 ] = vertices[ i + 1 ] > 0 ? 10 : 1;
  
}

circle.setAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );

const token = new THREE.Mesh( new THREE.IcosahedronBufferGeometry( 0.25 ), new THREE.MeshNormalMaterial() );

function Map( level ) {
  
  const group = new THREE.Group();

  const start = new THREE.Mesh( circle, new THREE.MeshBasicMaterial( {
    color: 0xff2222, vertexColors: true, side: THREE.BackSide, blending: THREE.MultiplyBlending, transparent: true
  } ) );
  group.add( start );  

  const end = new THREE.Mesh( circle, new THREE.MeshBasicMaterial( {
    color: 0x2222ff, vertexColors: true, side: THREE.BackSide, blending: THREE.MultiplyBlending, transparent: true
  } ) );
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