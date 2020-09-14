import * as THREE from 'https://unpkg.com/three@0.120.1/build/three.module.js';

import { Splats } from './Splats.js';

const group = new THREE.Group();

/*
const balls = new THREE.Mesh( new THREE.SphereBufferGeometry( 0.5 ) );
group.add( balls );
*/

const splats = new Splats();
group.add( splats.mesh );

const raycaster = new THREE.Raycaster();
const transform = new THREE.Object3D();

function Gun() {

	let map;

	function setMap( value ) {

		map = value;
		splats.reset();

	}

	function shoot( dummy ) {

		raycaster.ray.origin.setFromMatrixPosition( dummy.matrixWorld );
		raycaster.ray.direction.set( 0, 0, - 1 ).applyQuaternion( dummy.quaternion ).applyQuaternion( dummy.parent.quaternion );

		const intersections = raycaster.intersectObject( map.group.children[ 3 ] );

		if ( intersections.length > 0 ) {

			const intersection = intersections[ 0 ];

			transform.position.set( 0, 0, 0 );
			transform.lookAt( intersection.face.normal );
			transform.rotation.z = Math.random() * Math.PI;

			transform.position.copy( intersection.point );
			transform.updateMatrix();

			splats.add( transform.matrix );

		}

	}

	return {
		setMap: setMap,
		group: group,
		shoot: shoot
	}

}

export { Gun };
