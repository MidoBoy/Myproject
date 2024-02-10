let btn=document.createElement('button')

let ul=document.createElement('ul')
ul.innerHTML=`<li>Home</li>
<li>Courses</li>
<li>News</li>
<li>Problem Solving</li>
<li>Quizs</li>
<li>Blogs</li>
<li>Chats</li>`

ul.style.listStyle='none'
ul.style.backgroundColor="red"
ul.style.color="white"
ul.style.padding='5px'
ul.style.borderRadius='5px'
ul.style.display='inline-block'
ul.style.margin='3px'
ul.style.height='1000px'







btn.textContent='open'
btn.style.backgroundColor='Red'
btn.style.color='white';
btn.style.borderRadius='5px'
btn.style.border='none'



btn.addEventListener("click",_ => {
  if (btn.textContent=='open'){
    
      btn.before(ul);
      btn.textContent='Close';
    }
    else{
      btn.textContent='open';
      ul.remove()

    }
})

    
  


ul.remove()
document.body.appendChild(btn)