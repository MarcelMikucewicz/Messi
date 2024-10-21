const body = document.querySelector("body")

const div = document.createElement("div")

div.style.width = "300px"
div.style.height = "300px"
div.style.border = "1px solid black"

body.appendChild(div)

const p = document.createElement("p")
p.innerHTML = "Dodany"
div.appendChild(p)

const bdel = document.createElement("button")
bdel.innerHTML = 'Del'
div.appendChild(bdel)
bdel.addEventListener("click", ()=>{
    p.style.display = "none"
    bdel.style.display = "none"
})


const btn = document.createElement("button")
btn.textContent = 'zmien na czerwono'
div.appendChild(btn)

const btnZielony = document.createElement("button")
btnZielony.textContent = 'zmien na zielono'
div.appendChild(btnZielony)

btn.addEventListener('click',()=>{
    div.style.backgroundColor = 'red'
})
btnZielony.addEventListener('click',()=>{
    div.style.backgroundColor = 'green'
})

//const input = document.createElement("input")
//body.appendChild(input)

//const btnadd = document.createElement("button")
//btnadd.innerHTML = 'add'
//body.appendChild(btnadd)
//btnadd.addEventListener('click',()=>{
  //  const ul = document.createElement("ul") || document.querySelector("ul")
    
  //  const li = document.createElement("li")

   // li.textContent = input.value
   // ul.appendChild(li)
    //body.appendChild(ul)
//})
const input = document.createElement('input')
input.type = 'text'
body.appendChild(input)

const goBtn = document.createElement('button')
goBtn.textContent = 'Przejdz'
body.appendChild(goBtn)

goBtn.addEventListener('click',()=>{
    const a = document.createElement("a")
    a.setAttribute("href",`https://${input.value}`)
    a.innerHTML = "Link"
    body.appendChild(a)
    
})