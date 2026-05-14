/* =========================
   SAVE GAME
========================= */

export function saveGame(
    player
){

    const saveData = {

        player:{

            x:player.position.x,
            y:player.position.y,
            z:player.position.z
        }
    };

    localStorage.setItem(

        "bael_save",

        JSON.stringify(saveData)
    );

    console.log("SAVE COMPLETE");
}

/* =========================
   LOAD GAME
========================= */

export function loadGame(
    player
){

    const save =
        localStorage.getItem(
            "bael_save"
        );

    if(!save) return;

    const data =
        JSON.parse(save);

    player.position.set(

        data.player.x,
        data.player.y,
        data.player.z
    );

    console.log("LOAD COMPLETE");
}