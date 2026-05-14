import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

/* =========================
   SCENE
========================= */

export const scene = new THREE.Scene();

scene.background =
    new THREE.Color(0x87ceeb);

/* =========================
   CAMERA
========================= */

export const camera =
    new THREE.PerspectiveCamera(

        75,

        window.innerWidth /
        window.innerHeight,

        0.1,

        1000
    );

camera.position.set(0,5,10);

/* =========================
   RENDERER
========================= */

export const renderer =
    new THREE.WebGLRenderer({

        antialias:true

    });

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(
    renderer.domElement
);

/* =========================
   LIGHT
========================= */

const sun =
    new THREE.DirectionalLight(
        0xffffff,
        2
    );

sun.position.set(10,20,10);

scene.add(sun);

scene.add(
    new THREE.AmbientLight(
        0xffffff,
        0.7
    )
);

/* =========================
   RESIZE
========================= */

window.addEventListener(
    "resize",
    ()=>{

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);