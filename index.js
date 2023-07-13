let chave = "e90670bd768487966cc2df9ca04f6ba5"


function dadosTela(dados) {
    console.log(dados)
    
    document.querySelector(".cidade").innerHTML = `Tempo em ${dados.name}-${dados.sys.country}` //"Tempo em " + dados.name +  dados.sys.country//
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " ºC"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}


async function buscarCidade(cidade) {

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())
    
    
    dadosTela(dados)
    
}


function cliquesearch() {
    let cidade = document.querySelector(".input-cidade").value
    
    buscarCidade(cidade)
}