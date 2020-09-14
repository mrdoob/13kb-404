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
	mesh.scale.y = 2.25;
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
