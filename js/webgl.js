let camera, scene, renderer, controls, geometry, material, mesh, skybox, texture;
let sphere, sphereGeo, sphereMat, sphereTexture;
let time = 0;
const size = 100;
const seg = 100;

let loader = new THREE.TextureLoader();

loader.load('/assets/images/work/360/skybox-mc-desert.jpg', function (texture) {
        texture.mapping = THREE.EquirectangularRefractionMapping; // THREE.EquirectangularReflectionMapping
        skybox.material.envMap = texture;
    }
);

init();
animate();

function init() {
  // renderer
  let container = document.querySelector('#vrview');
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild( renderer.domElement );

  // scene
  scene = new THREE.Scene();
  scene.background = 0x000000;

  camera = new THREE.PerspectiveCamera( 70, $(container).width() / $(container).height(), 1, 10000 );
  camera.position.set(0, size / 2, size / 3);
  camera.lookAt(0, size / 2, 0);

  // ambient
  const light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  geometry = new THREE.SphereGeometry(size, seg, seg);
  material = new THREE.MeshBasicMaterial({
    side: THREE.BackSide //THREE.DoubleSide // THREE.BackSide
  });
  skybox = new THREE.Mesh(geometry, material);
  skybox.name = "skybox";
  scene.add(skybox);

  const meshgeometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
  const meshmaterial = new THREE.MeshNormalMaterial();

  mesh2 = new THREE.Mesh( meshgeometry, meshmaterial );
  console.log(mesh2);
  scene.add( mesh2 );

  /*sphereGeo = new THREE.SphereGeometry(2, 32, 32);
  sphereTexture = new THREE.TextureLoader().load('/assets/images/work/360/skybox-fortnite.jpg');
  sphereMat = new THREE.MeshBasicMaterial({ map: sphereTexture });
  sphere = new THREE.Mesh(sphereGeo, sphereMat);
  sphere.name = "sphere";
  scene.add(sphere);*/
}

function animate() {
  //camera.rotation.y -= 0.001;
  mesh2.rotation.x = time / 2000;
	mesh2.rotation.y = time / 1000;

  //sphere.rotation.y += 0.01;
  renderer.render( scene, camera );
  requestAnimationFrame( animate );
}


window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
  let container = document.querySelector('#vrview');
  camera.aspect = $(container).width() / $(container).height();
  camera.updateProjectionMatrix();
  renderer.setSize($(container).width(), $(container).height());
}