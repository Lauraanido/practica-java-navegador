// ### Control de gastos

// Necesitamos desarrollar una web que nos ayude a gestionar nuestros ingresos y gastos, con el objetivo de conocer el dinero que tenenos ahorrado.

// ## Requisitos indispensables
// 1. La aplicación deberá mostrar en todo momento el total de gastos, ingresos y el dinero total que tenemos ahorrado.
// 1. Podremos añadir un ingreso o un gasto incluyendo un concepto.
// 1. Podremos borrar cualquier gasto o ingreso que hayamos introducido.

// ## Requisitos opcionales
// 1. Si cerramos la web y volvemos a entrar, tenemos que recuperar todos los gastos e ingresos que habíamos introducido, así como el ahorro total.

const createConceptforlist = document.querySelector('#createExpenses')
const listofConcepts = document.querySelector("#records")

let totaloutcome = document.querySelector("#totaloutcome")
let totalspends = document.querySelector("#totalspends")
let totalsavings = document.querySelector("#savings")
let historial = []

createConceptforlist.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputElement = document.querySelector("#concept");
  const numberElement = document.querySelector("#cantidad");

  if(inputElement.value == "" || numberElement.value == "" ) {
    alert('Tienes que introducir concepto y cantidad');
    return;
  }

  let obj = {
    expense: inputElement.value, 
    quantity: parseFloat(numberElement.value),
    id: Math.floor(Math.random() * 100000000),
  };

  historial.push(obj)
  console.log(historial)

  console.log(obj)
  
  
  inputElement.value = "";
  numberElement.value = "";
  
  updateQuantity(obj)
  drawOnhistorial(obj)

} 
)

// función que actualiza los datos en total de ingresos y gastos
function updateQuantity(){
  let expenses = 0
  let incomes = 0
  historial.forEach((obj) => {
      if(obj.quantity > 0){
          incomes += parseFloat(obj.quantity)
      }else{
          expenses += parseFloat(obj.quantity)
      }
    });
    
    
  totaloutcome.innerHTML = `${incomes}€`
  totalspends.innerHTML = `${expenses}€`
  savings.innerHTML = `${incomes + expenses}€` 
}

// función que elimina el concepto

function delateConcept (id){

  const removeaConcept = document.getElementById(id);
  removeaConcept.remove(id)
  listofConcepts = listofConcepts.filter(item => item.id!== id); 

  drawOnhistorial (listofConcepts)
}

// función que dibuja cada concepto en el historial 
function drawOnhistorial (obj) {
  let newConcept = ""

  const newItem = document.createElement ("li")

  newItem.setAttribute ("id", records.id)
 
  aConcept = ` ${obj.expense} 
       ${obj.quantity}€ 
      <button class= "delete" onclick= "delateConcept(${obj.id})" > X </button> ;` 
      
  

  newItem.innerHTML = aConcept
  listofConcepts.appendChild (newItem)
}