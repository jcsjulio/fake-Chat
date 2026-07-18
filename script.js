
const lista = [
    "*    1    *",
    "*    2    *",
    "*    3    *",
    "*    4    *",
    "*    5    *",
    "*    6    *"
]

var n=0

function funcao(){

   
  
    resposta.innerHTML  = lista[n]
    n = Math.floor(Math.random() * 6);
    
}
