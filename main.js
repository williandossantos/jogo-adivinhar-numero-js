
/*

innerText = ver o texto
value = pega o valor 
event.prevendDefault() = previne acao do botao (nao executa acao)

onclick = "funcao" = evento onclick

classList() - lista de class 
add() - adiciona algo
remove() - remove algo
*/
 //addEventListener("click", handleClick)


let btnTry = document.querySelector(".btn-try")
let btnAgain = document.querySelector(".btn-again")

const randomNumber = Math.round(Math.random() * 10)
let tentativas = 1


function handleClick(e){
   e.preventDefault()
   const inputNumber = document.querySelector(".inputNumber")
   
   if(Number(inputNumber.value) === randomNumber){
      document.querySelector(".screen1").classList.add("hide")
      document.querySelector(".screen2").classList.remove("hide")
   }
   
   document
      .querySelector(".screen2 h2")
      .innerText = `acertou em ${tentativas} tentativas.`
   
   inputNumber.value = ""
   tentativas += 1
}

btnTry.addEventListener("click", handleClick)
btnAgain.addEventListener("click", ()=>{
   document.querySelector(".screen1").classList.remove("hide")
   document.querySelector(".screen2").classList.add("hide")
   tentativas = 1
})
