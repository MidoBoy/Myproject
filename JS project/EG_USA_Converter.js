let USA=document.createElement("input");
let EG=document.createElement("input");

USA.type="text";
EG.type="Text"
USA.placeholder="USA";
EG.placeholder="EG"

document.body.appendChild(USA);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));
document.body.appendChild(EG);

USA.onkeyup= _ => EG.value=USA.value*30
EG.onkeyup= _ =>  USA.value=EG.value/30

