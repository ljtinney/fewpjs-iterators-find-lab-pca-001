const testVar = {}

function testFunc() {
  return "hi"
}


const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(array) {
  const superbowl = array.find(element => element.result === "W")
  return superbowl ? superbowl.year : undefined
}