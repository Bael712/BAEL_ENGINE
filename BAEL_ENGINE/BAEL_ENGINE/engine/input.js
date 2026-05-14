/* =========================
   KEY INPUT
========================= */

export const keys = {};

/* =========================
   MOUSE
========================= */

export const mouse = {

    x:0,
    y:0,

    down:false
};

/* =========================
   KEYBOARD
========================= */

window.addEventListener(
    "keydown",
    (e)=>{

        keys[e.key.toLowerCase()] = true;

    }
);

window.addEventListener(
    "keyup",
    (e)=>{

        keys[e.key.toLowerCase()] = false;

    }
);

/* =========================
   MOUSE
========================= */

window.addEventListener(
    "mousemove",
    (e)=>{

        mouse.x = e.clientX;
        mouse.y = e.clientY;

    }
);

window.addEventListener(
    "mousedown",
    ()=>{

        mouse.down = true;

    }
);

window.addEventListener(
    "mouseup",
    ()=>{

        mouse.down = false;

    }
);