let imgUp=document.getElementsByClassName('up')
let imgDown=document.getElementsByClassName('down')
let container=document.querySelector('.container')
let e=document.createElement('img')

e.setAttribute("src",`/person1.jpeg`)


for (let i = 0; i < imgUp.length; i++) {
  imgUp[i].onclick=function () {
    let e=document.createElement('img')
    e.setAttribute("src",`${imgUp[i].attributes[0].textContent}`)
    container.querySelectorAll('*').forEach(function(element) {element.remove();});
    e.style.width='100%'
    e.style.height="600px"
    container.appendChild(e)}
}

for (let i = 0; i < imgUp.length; i++) {
  imgDown[i].addEventListener("mouseover",function () {
    let e=document.createElement('img')
    e.setAttribute("src",`${imgDown[i].attributes[0].textContent}`)
    container.querySelectorAll('*').forEach(function(element) {element.remove();});
    e.style.width='100%'
    e.style.height="600px"
    container.appendChild(e)})
}



