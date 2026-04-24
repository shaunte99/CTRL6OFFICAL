function enterSite(){

alert("CTRL6 Official site content coming soon.");

}


/* star sparkle effect */

setInterval(()=>{

let star=document.createElement("div");

star.style.position="absolute";
star.style.width="3px";
star.style.height="3px";

star.style.background="white";

star.style.top=Math.random()*window.innerHeight+"px";
star.style.left=Math.random()*window.innerWidth+"px";

star.style.opacity=Math.random();

star.style.borderRadius="50%";

document.body.appendChild(star);

setTimeout(()=>{
star.remove();
},2000);

},140);