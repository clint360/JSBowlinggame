const score = document.querySelectorAll('.score')
const totalScore = document.querySelectorAll('.total-score')
const alert = document.querySelector('#alert')
const btn = document.querySelector('.btn')
const btn1 = document.querySelector('.btn1')
let count = 0
let totalScores = 0
btn1.addEventListener('click', function () {
  reset()
})

btn.addEventListener('click', function () {
  btn.style = "animation: none;"
  rollBall()
})

function reset () {
  window.location.reload()
}

function rollBall () {
  
  for (let i = 0; i < score.length; i++) {
    count++
    btn.style = "animation: rotation 0.1s;"
  }

  let standingPins = 10
  const pinsHitFirst = getRandomPin(standingPins)
  standingPins = standingPins - pinsHitFirst
  const pinsHitSecond = getRandomPin(standingPins)
  const totalHits = pinsHitFirst + pinsHitSecond
  totalScores += totalHits
  btn.style = "animation: none;"
  if (count === 10) {
    score[0].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[0].innerHTML = totalHits
    btn.style = "animation: rotation 0.1s;"
  } else if (count === 20) {
    score[1].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[1].innerHTML = totalScores
    btn.style = "animation: rotation 0.1s;"
  } else if (count === 30) {
    btn.style = "animation: rotation 0.1s;"
    score[2].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[2].innerHTML = totalScores
  } else if (count === 40) {
    btn.style = "animation: rotation 0.1s;"
    score[3].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[3].innerHTML = totalScores
  } else if (count === 50) {
    btn.style = "animation: rotation 0.1s;"
    score[4].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[4].innerHTML = totalScores
  } else if (count === 60) {
    btn.style = "animation: rotation 0.1s;"
    score[5].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[5].innerHTML = totalScores
  } else if (count === 70) {
    btn.style = "animation: rotation 0.1s;"
    score[6].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[6].innerHTML = totalScores
  } else if (count === 80) {
    btn.style = "animation: rotation 0.1s;"
    score[7].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[7].innerHTML = totalScores
  } else if (count === 90) {
    btn.style = "animation: rotation 0.1s;"
    score[8].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[8].innerHTML = totalScores
  } else if (count === 100) {
    btn.style = "animation: rotation 0.1s;"
    score[9].innerHTML = `${pinsHitFirst}, ${pinsHitSecond}`
    totalScore[9].innerHTML = totalScores
  } else {
    alert.textContent = 'Sorry!!! You have exceeded the number of frames'
  }
}

function getRandomPin (remainingPins) {
  return Math.round(Math.random() * remainingPins)
}
