import * as THREE from 'https://unpkg.com/three@0.120.1/build/three.module.js';

const geometry = new THREE.CircleBufferGeometry( 0.2, 5 ).translate( 0, 0, 0.01 );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000, depthWrite: false } );

const amount = 1000;
const mesh = new THREE.InstancedMesh( geometry, material, amount );
mesh.count = 0;
mesh.renderOrder = 1;

function Splats() {

	let current = 0;

	function add( matrix ) {

		mesh.setMatrixAt( current ++, matrix );
		mesh.instanceMatrix.needsUpdate = true;

		if ( current > amount ) current = 0;
		if ( mesh.count < current ) mesh.count = current;

	}

	function reset() {

		mesh.count = 0;
		current = 0;

	}

	return {
		mesh: mesh,
		add: add,
		reset: reset
	};

}

export { Splats };
