addEventListener("DOMContentLoaded",(event)=>{
const slider= document.getElementById("blur-slider");
const image= document.getElementById("image-main");
const loadingText= document.querySelector(".loading-text");

    function mapRange(value, in_min, in_max, out_min, out_max){
      return (value) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    
})