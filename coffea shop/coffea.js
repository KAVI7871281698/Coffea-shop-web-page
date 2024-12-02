window.onscroll = () => {
   if(scrollY  > 700){
    document.querySelector('.hd').style.backgroundColor = '#1b1514e7';
   }
   else if(scrollY === 0){
    document.querySelector('.hd').style.backgroundColor = 'transparent';
   }
}


let valueDisplays = document.querySelectorAll("span.sec5");
let interval = 5000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.innerHTML =$(startValue)
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
