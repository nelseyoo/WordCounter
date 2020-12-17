var text = "tres tristes tigres tragaban trigo en un trigal en tres tristes tigres tragaban trigo tres en el trigal";
var textArr = text.split(' ');
var wordCounter = {};

function WordCount(str) { 
    return str.split(" ").length;
}
  
console.log(`Number of words = ${WordCount(text)}`);

for (var i = 0; i < textArr.length; i++) {
  if (wordCounter[textArr[i]]) {
    wordCounter[textArr[i]] += 1;
  } else {
    wordCounter[textArr[i]] = 1;
  }
}

console.log(wordCounter);