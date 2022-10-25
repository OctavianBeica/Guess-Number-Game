const input = document.querySelector(".input-btn")
const checkBtn = document.querySelector(".check")
const repeatkBtn = document.querySelector(".repeat-btn")
const boxValue = document.querySelector(".box")
const scorer = document.querySelector(".score")
const span = document.querySelector(".span")
const highscorer = document.querySelector(".highscore")
const winBtn = document.querySelector(".win-btn")
const lostBtn = document.querySelector(".lost-btn")
const guess = document.querySelector(".guesser")

let score = 19
let highscore = 0
span.textContent = "<BETWEEN 1 AND 20>"
const randomNum = Math.floor(Math.random() * 20) + 1
console.log(randomNum)
checkBtn.addEventListener("click", e => {
  e.preventDefault()
  scorer.textContent = `Score : ${score--} `

  if (input.value == randomNum) {
    boxValue.innerHTML = randomNum
    highscorer.innerHTML = `Highscore : ${score + 1}`
    checkBtn.disabled = true
    input.disabled = true
    winBtn.classList.add("active")
  } else {
    document.body.style.background = "black"
  }
  if (score === -1) {
    checkBtn.disabled = true
    input.disabled = true
    alert("You lost the game with 0 points")
    lostBtn.classList.add("active")
  }
  if (input.value < randomNum) {
    guess.innerHTML = "A little bit more"
  } else if (input.value > randomNum) {
    guess.innerHTML = "Not that much"
  }
})

repeatkBtn.addEventListener("click", () => {
  location.reload()
})
