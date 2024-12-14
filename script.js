// cotação de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


// obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.querySelector('#amount')
const currency = document.querySelector('#currency')
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")


// manipulando o input amout para receber somente numeros
amount.addEventListener("input", () =>{

  const  hasCharactersReges = /\D+/g
  amount.value = amount.value.replace(hasCharactersReges, "")
  
  })

 // captando o evento de submit do formulario 
form.onsubmit  = (event) => {
  event.preventDefault()

  switch(currency.value){
    case'USD':
    convertCurrency(amount.value, USD, "US$")
    break
    case'EUR':
    convertCurrency(amount.value, EUR, "€")
    break
    case'GBP':
    convertCurrency(amount.value, GBP, "£")
    break
  }


}

// função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try{
    // Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // calcula  o total
    let total = amount * price

    // formatar o valor total
    total = formatCurrencyBRL(total).replace("R$","")

    // exibe o resultado total
    result.textContent = `${total} Reais`

    // aplica a classe que exibe o footer que mostra o resultado
    footer.classList.add("show-result")
  } catch (error) {
        // remove a classe que exibe o footer que mostra o resultado
    footer.classList.remove("show-result")
    console.log(error)
  }

}

//Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
  // Converter para numero para utilizar o toLocateString para formatar no padrão BRL
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
