<script type="module">

import {
    scene,
    camera,
    renderer

} from "./engine/renderer.js";

import {
    keys

} from "./engine/input.js";

import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

/* =========================
   PLAYER
========================= */

const geo =
    new THREE.BoxGeometry(1,1,1);

const mat =
    new THREE.MeshStandardMaterial({

        color:0xff4444

    });

const player =
    new THREE.Mesh(geo,mat);

scene.add(player);

/* =========================
   PLAYER UPDATE
========================= */

function updatePlayer(){

    const speed = 0.1;

    if(keys["w"])
        player.position.z -= speed;

    if(keys["s"])
        player.position.z += speed;

    if(keys["a"])
        player.position.x -= speed;

    if(keys["d"])
        player.position.x += speed;
}

/* =========================
   CAMERA
========================= */

function updateCamera(){

    camera.position.x =
        player.position.x;

    camera.position.y = 5;

    camera.position.z =
        player.position.z + 10;

    camera.lookAt(
        player.position
    );
}

/* =========================
   LOOP
========================= */

function animate(){

    requestAnimationFrame(animate);

    updatePlayer();

    updateCamera();

    renderer.render(
        scene,
        camera
    );
}

animate();

</script>