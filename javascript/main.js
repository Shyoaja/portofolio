/* typing effect */
const text = [
  "Shyo Web Development",
  "Web Learner",
  "Prompt Engineer",
  "Full Stack Developer"
];

let i=0, c=0, back=false;
const typing = document.getElementById("typing");

function type(){
  if(!back){
    typing.textContent = text[i].slice(0, ++c);
    if(c === text[i].length) setTimeout(()=>back=true,800);
  } else {
    typing.textContent = text[i].slice(0, --c);
    if(c === 0){
      back=false;
      i=(i+1)%text.length;
    }
  }
  setTimeout(type,90);
}
type();

/* fade on scroll */
const items = document.querySelectorAll(".fade-in");
function reveal(){
  items.forEach(el=>{
    if(el.getBoundingClientRect().top < innerHeight-80){
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", reveal);
reveal();

/* cursor */
document.addEventListener("mousemove", e=>{
  const c = document.querySelector(".cursor");
  c.style.left = e.clientX+"px";
  c.style.top = e.clientY+"px";
});
