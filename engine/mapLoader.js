import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

/* =========================
   MAP OBJECTS
========================= */

export const mapObjects = [];

/* =========================
   TEXTURES
========================= */

const textureLoader =
    new THREE.TextureLoader();

const textures = {

    grass:textureLoader.load(
        "./textures/grass.png"
    ),

    stone:textureLoader.load(
        "./textures/stone.png"
    ),

    sand:textureLoader.load(
        "./textures/sand.png"
    ),

    brick:textureLoader.load(
        "./textures/brick.png"
    ),

    soil:textureLoader.load(
        "./textures/soil.png"
    )
};

for(const k in textures){

    textures[k].magFilter =
        THREE.NearestFilter;
}

/* =========================
   LOAD MAP
========================= */

export async function loadMap(
    scene,
    path
){

    const res =
        await fetch(path);

    const data =
        await res.json();

    /* CREATE OBJECTS */

    data.forEach(obj=>{

        if(obj.type !== "tile")
            return;

        const geo =
            new THREE.BoxGeometry(

                obj.scale.x,
                obj.scale.y,
                obj.scale.z
            );

        const mat =
            new THREE.MeshStandardMaterial({

                map:
                    textures[obj.material]
                    || textures.grass

            });

        const mesh =
            new THREE.Mesh(
                geo,
                mat
            );

        mesh.position.set(

            obj.position.x,
            obj.position.y,
            obj.position.z
        );

        mesh.userData.collider =
            obj.collider;

        scene.add(mesh);

        mapObjects.push(mesh);

    });

}