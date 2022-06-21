import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import {FlyControls} from "three/examples/jsm/controls/FlyControls";

@Component({
  selector: 'app-leansflares',
  templateUrl: './leansflares.component.html',
  styleUrls: ['./leansflares.component.scss'],
})
export class LeansflaresComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const clock = new THREE.Clock();
    let controls: FlyControls;

    // SCENE
    const scene = new THREE.Scene();
    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      15000
    );
    camera.position.z = 250;

    const renderer = new THREE.WebGL1Renderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    createStarField();

    function createStarField() {
      const vertices= [];
      for (let i = 0; i < 500; i++) {
        const x = 5000 * (Math.random() - 0.5);
        const y = 5000 * (Math.random() - 0.5);
        const z = 5000 * (Math.random() - 0.5);
        vertices.push(x, y, z);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      const material = new THREE.PointsMaterial({
        size:8,
        color:0xffffff
      });

      const stars = new THREE.Points(geometry, material);
      scene.add(stars);
    }

    const directionalLight = new THREE.DirectionalLight(0xfffffff, 1.9);
    directionalLight.position.set(1,1,1);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xfffffff, 2, 1000);
    scene.add(pointLight);


    controls = new FlyControls(camera, renderer.domElement);
    controls.movementSpeed = 2000;
    controls.rollSpeed = Math.PI /20;

    animate();
   

    function animate(){
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      controls.update(delta);
      renderer.render(scene, camera);
    }
  }
}
