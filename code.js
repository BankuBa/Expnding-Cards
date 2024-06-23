let panels = document.querySelectorAll(`.panel`);
let active = document.querySelector(`.active`)
// console.log(panels);

panels.forEach( panel => {
  panel.addEventListener(`click`, () => {
    removeActive()
    panel.classList.add(`active`)
  })
})

function removeActive() {
  panels.forEach(panel => {
    panel.classList.remove(`active`)
  })
}