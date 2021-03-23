import {GLTFLoader} from "./GLTFLoader.js";
import * as THREE from "https://threejs.org/build/three.module.js";
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";


var container, stats, controls, mixer, clock;
var camera, scene, renderer;


init();
animate();

function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera(75,
        window.innerWidth/window.innerHeight,
        0.01,
        1000 );
    camera.position.set( 0, 3,6 );
	scene = new THREE.Scene();

	clock = new THREE.Clock();

	var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
	scene.add( ambientLight );

	var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
	camera.add( pointLight );
	scene.add( camera );

	var loader = new GLTFLoader();
	loader.load( 'scene.gltf', function ( gltf ) {

		mixer = new THREE.AnimationMixer( gltf.scene );
		var action = mixer.clipAction( gltf.animations[ 0 ] );
		action.play();

		scene.add( gltf.scene );

	} );

	renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.left = '42%';


	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.gammaOutput = true;
	container.appendChild( renderer.domElement );

	controls = new OrbitControls( camera, renderer.domElement );
	controls.target.set( 0, 0, 0 );
	controls.update();

	window.addEventListener( 'resize', onWindowResize, false );



}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function animate() {

	requestAnimationFrame( animate );

	var delta = clock.getDelta();

	if ( mixer ) mixer.update( delta );

	renderer.render( scene, camera );

}