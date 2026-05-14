import { playerStatus } from "../game/player.js";

/* =========================
   HUD ELEMENTS
========================= */

const hpBar =
    document.getElementById("hpBar");

const mpBar =
    document.getElementById("mpBar");

const mpMaxText =
    document.getElementById("mpMaxText");

const levelText =
    document.getElementById("levelText");

/* =========================
   UPDATE HUD
========================= */

export function updateHUD(){

    /* =========================
       HP
    ========================= */

    const hpPercent =

        (playerStatus.maxHp === 0)
            ? 0
            : (playerStatus.hp / playerStatus.maxHp) * 100;

    hpBar.style.width =
        hpPercent + "%";

    /* =========================
       MP
    ========================= */

    const mpPercent =

        (playerStatus.maxMp == null || playerStatus.maxMp === 0)
            ? 0
            : (playerStatus.mp / playerStatus.maxMp) * 100;

    mpBar.style.width =
        mpPercent + "%";

    /* MP最大値表示（未設定対応） */

    if(playerStatus.maxMp == null){

        mpMaxText.textContent = "×";

    }else{

        mpMaxText.textContent = playerStatus.maxMp;
    }

    /* =========================
       LEVEL
    ========================= */

    if(levelText){

        levelText.textContent =
            "LV " + (playerStatus.level ?? 1);
    }

}