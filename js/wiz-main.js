
document.addEventListener("wz.ready", function (e) {
    console.log(`
        My body is ready

        - Target -
        ${e.detail.target}

        - Elem -
        ${e.detail.elem}
    `)
});

let args = {
    highlight: true,
    highlight_time: 1000,
};

const wizard = new Wizard(args);

wizard.init();

document.getElementById("btn_reset").onclick = function () {
  wizard.reset();
};

let el = document.querySelector('.wizard');


el.addEventListener("wz.lock", function (e) {
    console.log("Wizard is locked");
});

el.addEventListener("wz.unlock", function (e) {
    console.log("Wizard is unlocked");
});

el.addEventListener("wz.btn.prev", function (e) {
    console.log("Prev Step");
});

el.addEventListener("wz.btn.next", function (e) {
    console.log("Next Step");
});

el.addEventListener("wz.nav.forward", function (e) {
    console.log("Forward nav");
});

el.addEventListener("wz.nav.backward", function (e) {
    console.log("Backward nav");
});

el.addEventListener("wz.form.submit", function (e) {
    console.log("Form Submit");
});

el.addEventListener("wz.end", function (e) {
    console.log("Wizard is finished");
});

el.addEventListener("wz.reset", function (e) {
    console.log("Wizard has restarted");
});

el.addEventListener("wz.error", function (e) {
    console.log(`
        id => ${e.detail.id}
    
        msg => ${e.detail.msg}
    `);

    console.log(e.detail.target)
});


el.addEventListener("wz.update", function (e) {
    console.log(`
        My body is updated

        - Target -
        ${e.detail.target}

        - Elem -
        ${e.detail.elem}
    `)
});

