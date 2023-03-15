const adviceId = document.getElementById("advice");
const adviceTxt = document.getElementById("answer");
const adviceBtn = document.getElementById("button");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const res = await fetch(url);
  const { slip:{id, advice}}
      = await res.json();
    
  adviceId.innerHTML = id;
  adviceTxt.innerHTML = advice;
}
getAdvice();

adviceBtn.addEventListener("click", getAdvice);