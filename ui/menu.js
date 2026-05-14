import { uiState } from "./uiState.js";

const menuButton =
    document.getElementById("menuButton");

const menuPanel =
    document.getElementById("menuPanel");

export function initMenu(){

    menuButton.addEventListener("click", () => {

        uiState.menuOpen = !uiState.menuOpen;

        uiState.gamePaused = uiState.menuOpen;

        menuPanel.style.display =
            uiState.menuOpen ? "flex" : "none";
    });
}

export function closeMenu(){

    uiState.menuOpen = false;
    uiState.gamePaused = false;

    menuPanel.style.display = "none";
}