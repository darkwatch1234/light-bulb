const buld = document.querySelector('#light');

const btn = document.querySelector('#on');
btn.addEventListener('click', display);
function display(e) {
    buld.src = 'lighton.jpg'
};

const samad = document.querySelector('#dim');
const page = document.querySelector('#light');
samad.addEventListener('click', show);
function show(out) {
    page.src = 'dimlight.jpg'
};

const hassan = document.querySelector('#of');
const web = document.querySelector('#light');
hassan.addEventListener('click', visible);
function visible(pup) {
    web.src = 'lightoff.jpg'
}