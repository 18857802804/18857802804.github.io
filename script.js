
function getPuzzle(){
  var response=[];
  for (i=0;i<3;i++){
  response[i]=prompt("What letter is an animal?");
  if (response[i]==="b"){
    alert("Good job!");
    break;
  }
  else if (response[i]!=="b" && i===2){
    alert("Awful!you have no chance!The answer is b.");
  }
  else {
    alert("You are wrong!hint:think the pronunciation of letters");
  }
  }
}

function getPuzzle2(){
  var response=[];
  for (i=0;i<3;i++){
  response[i]=prompt("What man can not live in house?");
  if (response[i]==="snowman"){
    alert("Good job!");
    break;
  }
  else if (response[i]!=="snowman" && i===2){
    alert("Awful!you have no chance!The answer is snowman.");
  }
  else {
    alert("You are wrong!hint:the one who afraid of hotness.");
  }
  }
}

function getPuzzle3(){
  var response=[];
  for (i=0;i<3;i++){
  response[i]=prompt("A mouse has a large pocket?");
  if (response[i]==="kangaroo"){
    alert("Good job!");
    break;
  }
  else if (response[i]!=="kangaroo" && i===2){
    alert("Awful!you have no chance!The answer is kangaroo.");
  }
  else {
    alert("You are wrong!hint:think what animal is famous for its pocket.");
  }
  }
}
