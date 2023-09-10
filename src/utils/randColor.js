import colors from "tailwindcss/colors"

//Ignore the TailwindCSS warning
const colorArr = Object.entries(colors)

// exclude inherit, current, transparent, black, white
const min = 5
// exclude warmGray trueGray coolGray blueGray
const max = 27

let lastValue

const getRandValue = (contrast) => {
  const randInt = Math.floor(Math.random() * (max - min + 1) + min)
  return colorArr[randInt][1][contrast]
}

export default (contrast = 500) => {
  let randValue = getRandValue(contrast)
  while (randValue === lastValue) {
    randValue = getRandValue(contrast)
  }
  lastValue = randValue
  return randValue
}
