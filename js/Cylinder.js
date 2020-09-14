import * as THREE from 'https://unpkg.com/three@0.120.1/build/three.module.js';

function Cylinder( colorA, colorB ) {

	const geometry = new THREE.CylinderBufferGeometry( 0.5, 0.5, 0.5, 5 ).translate( 0, 0.25, 0 );

	const vertices = geometry.attributes.position.array;
	const colors = new Float32Array( vertices.length );

	for ( let i = 0; i < vertices.length; i += 3 ) {

		colors[ i + 0 ] = colors[ i + 1 ] = colors[ i + 2 ] = vertices[ i + 1 ] > 0 ? colorA : colorB;

	}

	geometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );

	return geometry;

}

export { Cylinder }
