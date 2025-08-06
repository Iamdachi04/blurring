addEventListener("DOMContentLoaded",(event)=>{
const slider= document.getElementById("blur-slider");
const image= document.getElementById("image-main");
const loadingText= document.querySelector(".loading-text");
const iconToggle = document.getElementById("icon-toggle");

    function mapRange(value, in_min, in_max, out_min, out_max){
      return (value) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    function updateVisuals(value){
      const blur= mapRange(value , 0,100,70,0);
      const opacity = mapRange(value,0,100,1,0);
      image.style.filter = 'blur('+blur+'px)';
      loadingText.innerText= `${value.toFixed(1)}%`;
      loadingText.style.opacity = opacity;
      if(value>80){
        iconToggle.src = "img/view.png";
      }
      else{
        iconToggle.src = "img/closed-eyes.png";
      }
    }
    slider.addEventListener("input",(event)=>{
        const the_val = parseFloat(event.target.value);
        updateVisuals(the_val);
    })
    updateVisuals(parseFloat(slider.value)); // initialization


})