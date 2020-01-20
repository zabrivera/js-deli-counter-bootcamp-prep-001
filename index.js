function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

function nowServing(line){
  if(line.length != 0){
    var next = line[0];
    line.shift()
    return `Currently serving ${next}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line){
if(line != false){
  var numList = []
  for (; numList.length < line.length ;) {
    numList.push(`${numList.length + 1}. ${line[numList.length]}`)
  }
  return `The line is currently: ${numList[0]}, ${numList[1]}, ${numList[2]}`
} else {
  return 'The line is currently empty.'
}
}
