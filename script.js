const input = document.getElementById("inputItem")
const lista = document.getElementById("lista")
const modelo = document.getElementById("modelo-item")
const alerta = document.getElementById("alerta")

function addItem(){
  const texto = input.value.trim()
  if(texto === "") return
  const novoItem = modelo.cloneNode(true)

  novoItem.removeAttribute("id")
  novoItem.style.display = "flex"
  novoItem.querySelector(".item-text").innerText = texto

  const checkbox = novoItem.querySelector(".checkbox")
  const span = novoItem.querySelector(".item-text")
  checkbox.addEventListener("change", function(){
    if(checkbox.checked){
    span.style.textDecoration = "line-through"
    span.style.opacity = "0.5"
  } else {
     span.style.textDecoration = "none"
    span.style.opacity = "1"
  }
  })
  
const lixeira = novoItem.querySelector("a")
lixeira.addEventListener("click", function(e){
  e.preventDefault()
  novoItem.remove()
  mostrarAlerta()
})

lista.appendChild(novoItem)
input.value = ""

}

function mostrarAlerta(){
  alerta.style.display = "flex"
  setTimeout(function(){
    alerta.style.display = "none"
  }, 3000)
}

function fecharAlerta(){
  alerta.style.display = "none"
}