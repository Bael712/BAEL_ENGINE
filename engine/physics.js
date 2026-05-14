import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

/* =========================
   GRAVITY
========================= */

export const gravity = 0.02;

/* =========================
   AABB COLLISION
========================= */
/*
objects想定：
{
    position: {x,y,z},
    scale: {x,y,z}
}
*/

export function checkCollision(
    x,
    y,
    z,
    size,
    objects
){

    const playerBox = new THREE.Box3().setFromCenterAndSize(
        new THREE.Vector3(x, y, z),
        new THREE.Vector3(size.x, size.y, size.z)
    );

    for(const obj of objects){

        const objBox = new THREE.Box3().setFromCenterAndSize(
            new THREE.Vector3(
                obj.position.x,
                obj.position.y,
                obj.position.z
            ),
            new THREE.Vector3(
                obj.scale.x,
                obj.scale.y,
                obj.scale.z
            )
        );

        if(playerBox.intersectsBox(objBox)){

            return obj; // 衝突したオブジェクト返す
        }
    }

    return null;
}