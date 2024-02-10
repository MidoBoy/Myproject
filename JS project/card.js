
let names =['mido','ahmed','khalid','said','osama']
let age=[30,23,21,23,40]
function create_card(userName,userAge,imgsrc='/person1.jpeg') {
  let card =document.createElement('Div');
  let pname=document.createElement('h1');
  let age =document.createElement('p');
  let img =document.createElement('img');


  let tname=document.createTextNode(`${userName}`)
  let tage= document.createTextNode(`${userAge} Years old`);
  img.src=imgsrc

  pname.appendChild(tname);
  age.appendChild(tage);
  card.appendChild(pname)
  card.appendChild(age);
  card.appendChild(img)

  card.style.textAlign='center'
  card.style.backgroundColor="#444"
  card.style.width='250px'
  card.style.padding='10px'
  card.style.color='white'
  card.style.margin="5px"
  card.style.display='inline-block'
  img.style.width='200px'

  document.body.appendChild(card)

  
}

for (let i = 0; i < names.length; i++) {
  create_card(names[i],age[i])
  
}