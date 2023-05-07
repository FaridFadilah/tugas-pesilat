let submit = document.getElementById("submit")
let operation = null
let buttons = document.querySelectorAll("button")
let reset = document.getElementById("reset")

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault()
    operation = button.dataset.value
    
    let numOne = document.getElementById("numOne").value
    let numTwo = document.getElementById("numTwo").value

    document.getElementById("value").innerHTML = eval(`${numOne} ${operation} ${numTwo}`)
  });
});

reset.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("numOne").value = ''
  document.getElementById("numTwo").value = ''



  document.getElementById("value").innerHTML = null
})