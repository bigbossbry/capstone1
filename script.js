const div = document.querySelector('#spotlight')
const {
  top: t,
  left: l
} = div.getBoundingClientRect();
console.log(t, l)

const {
    scrollX,
    scrollY
} = window;
const topPos = t + scrollY;
const leftPos = l + scrollX;
console.log(topPos);
console.log(leftPos);

const pos = document.documentElement;
pos.addEventListener('mousemove', e => {
    pos.style.setProperty('--x', e.clientX + 'px')
    pos.style.setProperty('--y', (e.clientY - t) + 'px')
})
