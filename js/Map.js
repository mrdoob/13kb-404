import * as THREE from 'https://unpkg.com/three@0.120.1/build/three.module.js';

const image = new Image();
image.src = "data:image/gif;base64,R0lGODdhAAEAAcIAAAAAAAAA//8AAAD/AP///wAAAAAAAAAAACwAAAAAAAEAAQAD/gi63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEz+Es5oAiTNPkfa6rI8BF+3AWk7e8731B91ew5/fYUYhA1/ggyIWmhFj0ONjIuLCpNZBAJxkpuSd2+VeQuYmW5EkUCBlqB4o657rVepQrQ+oLKtoqOyVraqp8C8rLvBuJa+wbXKt3CEuq/OpSa/KgQDnLXYy9LRxZzdyCma2SzVzeWQxN7npOLjzCvtPPPCtMevevUk+/zxP/165Ir1LlHBEwFFJLSxUAcygvlCNfww0c8/dEoiwnJm/kGjvIsoKsoQaWgEyQ3hUh40qbJlyQ7X0lnDloamM5u9EOKMKW2nx5cVTmpo6fIj0XBAUYIMspSezKQThM5ouoMqVINPlxmxGiOO10tgBXJ1ujUrja94wpqtQSDAWoBvHca96m4uWXV0uRyVCnOv3bxV/bIVDBgJR0o/Wxyuy7fwizbbGNkMMLhmOZ5tu0Z1LPHhSqOeEys9ZYy0aTWi6fr9W2K1ybSoGYH9SjssZ8ZEKx99HZv26Uu/bwsfTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/gw4sfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+//n8zYzEUYGXqsHaWJ6gg2ImBUynITYEQojLgWRNOVeFIF3aVIQyNGRXhJwxiGKKGI3K44WMnuhATJJFJ0qI2JaIYo4opKlajOTd6KOGMNvKIo486gvjhgzsOyVSO1iAJD5BJMrmkkcJACZeTISlZ5WrTsIRlTtRsyWVrXn5Gx04+WbbYOGR2U6aVg6TZkzTmuHkTnKCFSeUgdnbYmZ0/5lnWn3gFKiGggwr6CaGHGqqVokciumihkCYa6aOSVsrNbhTupVtumWJqoaadcvqppyKSSmJoemZw5kZsdtTIlz2i2mpQbLyIx2SbrigZGpSFqispuPpqK2a9jhoRrH0e/ivmkrLe6WovyNZZlLHTliqqtdWeeq222ZoIKrUq/SfuuOSWa+656Kar7rrstuvuu/DGK++89NZr77345qvvvvz26++/AAcs8MAEF2zwwQgnrPDCDDcMX6pXSolRgs625iBTF6uS8ZQSi1WxPx9r2bFTISs0K8gjB1YyHSeLXOTLQqJiqyozA1TzLTd7nLJcK4MAMUItm9wzRUGzPLRFR/eVNAc/d7n0aDvn0DSYTw9VtM9XE121qlkjHTUOU6O8o5/SeplsmGebLY+ccKxZMmZnuA33shSxDRmdM9WqJt7M8ln2lmkD/jeWjjbKKDCFI344XIkzvngzjUP+uFiR/lM++V2TGp654mNv662pn3suI+iji07jt9iG66vq4F5GN9DQvu50s7kyE22TaAwbLLW685pr72cUiy3wma3uemq4K4t837bczrztslNN+unTx2q69d2Wnj311weOlPHfOyz++OSXb/756Kev/vrst+/++/DHL//89Ndv//3456///vz37///AAygAAdIwAIOLGwui5kCa7GxWzRQIA+kRwRV9rUbIFBoFRTQ1g7RNaVlkEAwI9ICj7TBC1zQaCwqYUdyRg8WVsWFPPtgpmT4KRqKyIYkwqG3dCgjHp7Ohz0C4o+EGCQRGpGEBSJb8tA2ONc0kTB5M9OcVqUTvb2JqYrUsJsVs6QQLUrReVpT4vMEt0S1lZGMltJcGjm3Rsdtzo1tlNwb5RhHy83RjnXEXB4DUzk9UuqPJKye97pRu5QUMnypMyT4CLlIvnGLdYnEygn1obxJAuJV0QMZ7YR1md0Nr5O+42QiPMkt4gnvkcezJJ5it7wrbbJ1kuwgYgT5RCxyb3vYgyQqEblLRraOl6HDpQGHScxiGvOYyEymMpfJzGY685n2SQAAOw==";

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

  const context = canvas.getContext( '2d' );
  context.drawImage( image, - level * 64, 0 );

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
