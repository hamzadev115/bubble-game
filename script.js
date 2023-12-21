function bubble() {  
let bubblebreak="";
for(let i=1; i<=168; i++){
    let n=Math.floor(Math.random()*10);
    bubblebreak+=`<div class="bubble">${n}</div>`
}
document.querySelector(".barea").innerHTML=bubblebreak;
}
bubble();

 let runtime=60;
function timer() {
  let timestop = setInterval(function () {
    if (runtime > 0) {
      runtime--;
      document.querySelector("#timerun").textContent = runtime;
    } else {
      clearInterval(timestop);
      document.querySelector(".barea").innerHTML = "<h1>Game Over</h1>";
       document.querySelector(".barea").innerHTML += `<h3>Total Score: ${score}</3>`;
      
    }
  }, 1000);
}
timer();

let hitn=0;
function hitval() { 
    hitn=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitn;
}
hitval();

let score=0;
function scorein() { 
  score +=10;
  document.querySelector("#scoreval").textContent=score;
}

document.querySelector(".barea").addEventListener("click", function (details) {

  let clicked=(Number(details.target.textContent));
  if(clicked===hitn){
    scorein();
    hitval();
    bubble();
  }
})
