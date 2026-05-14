import {
    camera
} from "./renderer.js";

/* =========================
   UPDATE CAMERA
========================= */

export function updateCamera(
    target
){

    camera.position.x =
        target.position.x;

    camera.position.y =
        target.position.y + 5;

    camera.position.z =
        target.position.z + 10;

    camera.lookAt(
        target.position
    );
}