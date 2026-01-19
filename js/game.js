let path = localStorage.getItem("path");
let scenes;

if(path=="plato") scenes = platoScenes;
if(path=="confucius") scenes = confuciusScenes;
if(path=="marx") scenes = marxScenes;

let current = 0;

function render(){
 let scene = scenes.find(s=>s.id==current);

 let box = document.getElementById("game-box");
 box.classList.remove("fade");
 void box.offsetWidth;
 box.classList.add("fade");

 document.getElementById("text").innerText = scene.text;

 document.getElementById("scene-image").style.backgroundImage =
   "url('"+scene.image+"')";

 let kbox = document.getElementById("knowledge");
 if(scene.knowledge){
   kbox.style.display="block";
   kbox.innerText = scene.knowledge;
 } else {
   kbox.style.display="none";
 }

 let choiceBox = document.getElementById("choices");
 choiceBox.innerHTML="";

 scene.choices.forEach(c=>{
   let btn=document.createElement("button");
   btn.innerText=c.text;
   btn.onclick=()=>{ if(c.text === "Về trang chủ") { window.location.href = "index.html"; } else { current=c.next; render(); }};
   choiceBox.appendChild(btn);
 });
}

render();
