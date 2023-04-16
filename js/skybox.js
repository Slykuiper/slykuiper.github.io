let camera, scene, renderer, controls, geometry, material, mesh, skybox, texture;
let time = 0;
const size = 100;
const seg = 100;

let loader = new THREE.TextureLoader();
let bgCarouselItem = 0;
const bgCarousel = [
  '/assets/images/work/360/iw6x_Panorama.jpg',
  '/assets/images/work/360/iw6x_mp_swamp.jpg',
  '/assets/images/work/360/mir3.png',
  '/assets/images/work/360/skybox-mc.jpg',
  '/assets/images/work/360/skybox-cod.jpg'
];

let randomCarouselItem = bgCarousel[Math.floor(Math.random() * bgCarousel.length)];

loader.load(randomCarouselItem, function (texture) {
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

  /*
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.autoRotate = false;
  controls.autoRotateSpeed = 2;
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.minDistance = 0.1;
  controls.maxDistance = size * 1;
  controls.target.set(0, size / 2, 0);
  controls.update();
  */
  document.querySelectorAll('a.vrview-control').forEach(item => {
    item.addEventListener('click', event => {
      updateCarousel(item.id);
    })
  });
}

function animate() {
  camera.rotation.y -= 0.001;
  //controls.update();
  renderer.render( scene, camera );
  requestAnimationFrame( animate );
}

function updateCarousel(direction) {
  if (direction === "next") {
    bgCarouselItem += 1;
  }

  if (direction === "back") {
    bgCarouselItem -= 1;
  }

  if (bgCarouselItem < 0) {
    bgCarouselItem = bgCarousel.length -1;
  } else if (bgCarouselItem > bgCarousel.length -1) {
    bgCarouselItem = 0;
  }

  new THREE.TextureLoader().load(
      bgCarousel[bgCarouselItem], texture => {
          //Update Texture
          texture.mapping = THREE.EquirectangularRefractionMapping;
          skybox.material.envMap = texture;
          skybox.material.transparent = true;
          skybox.material.opacity = 1;
          skybox.material.needsUpdate = true;
      },
      xhr => {
          //Download Progress
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      error => {
          //Error CallBack
          console.log("An error happened" + error);
      }
  );
}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
  let container = document.querySelector('#vrview');
  camera.aspect = $(container).width() / $(container).height();
  camera.updateProjectionMatrix();
  renderer.setSize($(container).width(), $(container).height());
}