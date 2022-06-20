import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //SCENE
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      105,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // RENDERER (allow 3D objects to be rendered in a web browser)
    // antialias = smoothness
    const renderer = new THREE.WebGL1Renderer({ antialias: true });
    // Fit render size to screen height and width
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Where the output is
    // Put the prepared renderer into the HTML body element
    document.body.appendChild(renderer.domElement);

    // BOX
    // Specify box size
    const geometry = new THREE.BoxGeometry(2, 2, 2);

    // Specify texture color, materials
    // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const texture = new THREE.TextureLoader().load('../../assets/texture.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    // // Apply texture and material to the cube
    const cube = new THREE.Mesh(geometry, material);
    // Add this to scene
    scene.add(cube);

    // Set camera position
    camera.position.z = 5;

    // Control animation
    function animate() {
      // Just call back function
      requestAnimationFrame(animate);
      // Cube rotes by 0.01 starting from x-axis
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    // Keep size fixed when window is changed
    function onWindowResize(){
      // Calculate the aspect ration again for each call to this function
      camera.aspect = window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // onWindowResize function is read when the size width is changed
    window.addEventListener('resize', onWindowResize);

    animate();
  }
}
