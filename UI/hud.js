import {

    playerStatus

} from "../game/player.js";

/* =========================
   HUD ELEMENTS
========================= */

const hpBar =
    document.getElementById(
        "hpBar"
    );

const mpBar =
    document.getElementById(
        "mpBar"
    );

const levelText =
    document.getElementById(
        "levelText"
    );

/* =========================
   UPDATE HUD
========================= */

export function updateHUD(){

    /* HP */

    const hpPercent =

        playerStatus.hp /
        playerStatus.maxHp * 100;

    hpBar.style.width =
        hpPercent + "%";

    /* MP */

    const mpPercent =

        playerStatus.mp /
        playerStatus.maxMp * 100;

    mpBar.style.width =
        mpPercent + "%";

    /* LEVEL */

    levelText.textContent =

        "LV " +
        playerStatus.level;
}