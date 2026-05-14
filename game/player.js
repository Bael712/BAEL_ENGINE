import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

import {

    keys

} from "../engine/input.js";

import {

    gravity,
    checkCollision

} from "../engine/physics.js";

import {

    mapObjects

} from "../engine/mapLoader.js";

import {

    createStatus

} from "../engine/statusSystem.js";

/* =========================
   PLAYER
========================= */

const playerGeo =
    new THREE.BoxGeometry(
        1,
        2,
        1
    );

const playerMat =
    new THREE.MeshStandardMaterial({

        color:0xff4444

    });

export const player =
    new THREE.Mesh(
        playerGeo,
        playerMat
    );

player.position.set(
    0,
    5,
    0
);

/* =========================
   PLAYER STATUS
========================= */

export const playerStatus =
    createStatus();

/* =========================
   PLAYER SIZE
========================= */

const playerSize = {

    x:1,
    y:2,
    z:1
};

/* =========================
   PHYSICS
========================= */

let velocityY = 0;

let onGround = false;

/* =========================
   UPDATE PLAYER
========================= */

export function updatePlayer(){

    const speed = 0.1;

    let moveX = 0;
    let moveZ = 0;

    /* MOVE */

    if(keys["w"])
        moveZ -= speed;

    if(keys["s"])
        moveZ += speed;

    if(keys["a"])
        moveX -= speed;

    if(keys["d"])
        moveX += speed;

    /* X COLLISION */

    const nextX =
        player.position.x + moveX;

    if(

        !checkCollision(

            nextX,

            player.position.y,

            player.position.z,

            playerSize,

            mapObjects
        )

    ){

        player.position.x = nextX;
    }

    /* Z COLLISION */

    const nextZ =
        player.position.z + moveZ;

    if(

        !checkCollision(

            player.position.x,

            player.position.y,

            nextZ,

            playerSize,

            mapObjects
        )

    ){

        player.position.z = nextZ;
    }

    /* JUMP */

    if(

        keys[" "] &&
        onGround

    ){

        velocityY = 0.3;

        onGround = false;
    }

    /* GRAVITY */

    velocityY -= gravity;

    const nextY =
        player.position.y + velocityY;

    const hit =
        checkCollision(

            player.position.x,

            nextY,

            player.position.z,

            playerSize,

            mapObjects
        );

    if(hit){

        if(velocityY <= 0){

            player.position.y =

                hit.position.y +

                hit.scale.y/2 +

                playerSize.y/2;

            velocityY = 0;

            onGround = true;
        }

    }else{

        player.position.y = nextY;

        onGround = false;
    }

}