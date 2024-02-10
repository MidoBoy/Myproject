let pname=document.getElementById("productName")
let price=document.getElementById("Price")
let taxes=document.getElementById("taxes")
let ads=document.getElementById("ads")
let discount=document.getElementById("discount")
let count=document.getElementById("count")
let Category=document.getElementById("Category")
let search=document.getElementById("search")
let table=document.getElementById("Table")
let totalBox=document.getElementById("total")
let addBtn=document.getElementById("addBtn")
let deleteAll=document.getElementsByClassName("delete")[0]
let searchTitle=document.getElementById("searchTitle")
let searchCategory=document.getElementById("searchCategory")


console.log(searchCategory);

//getTotal
let calc_total=() =>{
  if(price.value!='')
  {
    totalBox.textContent =(+price.value + +taxes.value + +ads.value - +discount.value)
    totalBox.style.backgroundColor='green'
  }else{
    totalBox.textContent=''
    totalBox.style.backgroundColor='brown'
    taxes.value=''
    ads.value=''
    discount.value=''
}}


//create  product
let prodArr;
if(localStorage.product!=null)
{
  prodArr=JSON.parse(localStorage.product)
}else{
  prodArr=[];
}
function addItem(){
let Pro={
  name:pname.value,
  price:(+price.value),
  taxes:(+taxes.value),
  ads:(+ads.value),
  discount:(+discount.value),
  total:(+totalBox.innerHTML),
  count:(+count.value),
  Category:Category.value,
}
if(+count.value>1){
  for (let i = 0; i < count.value; i++) {
    prodArr.push(Pro)}
  }else
  {
  prodArr.push(Pro)
  }
  

localStorage.setItem("product",JSON.stringify(prodArr))
clearInput()
updateView()
}



//clear inputs
function clearInput()
{
  pname.value=''
  price.value=''
  taxes.value=''
  ads.value=''
  discount.value=''
  Category.value=''
  count.value=''
  totalBox.innerHTML=''
}


//display
function updateView(){
calc_total()
  let  t="";
  for (let i = 0; i < prodArr.length; i++) {
    t+=`<tr></tr><td>${i}</td>
      <td>${prodArr[i].name}</td>
      <td>${prodArr[i].price}</td>
      <td>${prodArr[i].taxes}</td>
      <td>${prodArr[i].ads}</td>
      <td>${prodArr[i].discount}</td>
      <td>${prodArr[i].total}</td>
      <td>${prodArr[i].Category}</td>
      <td><button onclick="update(${i})">Update</button></td>
      <td><button onclick="deleteProd(${i})">Delete</button></td></tr>`
      table.innerHTML=t
    
  }
deleteAll.innerHTML=`Delete All (${prodArr.length})`

  if(prodArr.length<=0){
    deleteAll.style.display='none'
  }
  else{
    deleteAll.style.display='inline-block'
  }
  }updateView()

  //count


  //delete
function deleteProd(i) {
  if (i==0)
    {
      window.location.reload();
    }
  prodArr.splice(i,1)
  localStorage.product=JSON.stringify(prodArr)
  updateView()
}

function funDeleteAll() {
  alert("Are you sure to delete all?")
  prodArr=[]
  localStorage.removeItem('product')
  location.reload()
  
  
}
//update
  let updatebtn=document.createElement('button')
 updatetxt=document.createTextNode('Update')
 updatebtn.appendChild(updatetxt)
 updatebtn.setAttribute("id","updatebtn")

function update(i) {

 updatebtn.setAttribute("i",`${i}`)

  price.value=prodArr[i].price
  taxes.value=prodArr[i].taxes
  pname.value=prodArr[i].name
  ads.value=prodArr[i].ads
  discount.value=prodArr[i].discount
  count.value=prodArr[i].count
  Category.value=prodArr[i].Category
  count.style.display='none'
  calc_total()
  addBtn.after(updatebtn)
  addBtn.style.display='none'
  scroll({
    top: 0,
    behavior: 'smooth'
  })
}
updatebtn.addEventListener('click', function(){
  i=updatebtn.getAttribute("i")
  prodArr[i].price=price.value
  prodArr[i].taxes  =taxes.value
  prodArr[i].name  =pname.value
  prodArr[i].ads=ads.value
  prodArr[i].discount=discount.value
  prodArr[i].count  =count.value
  prodArr[i].Category=Category.value
  localStorage.setItem("product",JSON.stringify(prodArr))
  
  location.reload()
})


//search
let searchMode='title'
function cT() {searchMode="title"
searchTitle.style.border='8px  solid green'
searchCategory.style.border='none'
search.setAttribute("placeholder",'search by Title')
search.focus()
}
function cc() {searchMode="category"
searchCategory.style.border='8px  solid green'
searchTitle.style.border='none'
search.setAttribute("placeholder",'search by Category')
search.focus()

}
let searchPro=[];
function s(){
  let  t="";
  for (let i = 0; i < prodArr.length; i++) {
    if(searchMode=='title') {
      if (prodArr[i].name.includes(`${search.value}`.toLowerCase().trim())) {
        t+=`<tr></tr><td>${i}</td>
        <td>${prodArr[i].name}</td>
        <td>${prodArr[i].price}</td>
        <td>${prodArr[i].taxes}</td>
        <td>${prodArr[i].ads}</td>
        <td>${prodArr[i].discount}</td>
        <td>${prodArr[i].total}</td>
        <td>${prodArr[i].Category}</td>
        <td><button onclick="update(${i})">Update</button></td>
        <td><button onclick="deleteProd(${i})">Delete</button></td></tr>`
        table.innerHTML=t
        



        }
      }else{
      if (prodArr[i].Category.includes(`${search.value}`.toLowerCase().trim())) {
        t+=`<tr></tr><td>${i}</td>
        <td>${prodArr[i].name}</td>
        <td>${prodArr[i].price}</td>
        <td>${prodArr[i].taxes}</td>
        <td>${prodArr[i].ads}</td>
        <td>${prodArr[i].discount}</td>
        <td>${prodArr[i].total}</td>
        <td>${prodArr[i].Category}</td>
        <td><button onclick="update(${i})">Update</button></td>
        <td><button onclick="deleteProd(${i})">Delete</button></td></tr>`
        table.innerHTML=t
        
        


      }


      }   
      

    
}

}

// function showSearchData(searchPro){
// for (let i = 0; i < searchPro.length; i++) {

      
  
// }    
      
  
//   
    
//   }


//clean data 