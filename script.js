function verificar() {
    var verpais = document.getElementById('pais')
    var resultado = document.getElementById('resultado')
    var pais = String(verpais.value.toLowerCase())
    if (pais == 'brasil') {
        resultado.innerHTML = 'Você é Brasileiro'
    } else {
        resultado.innerHTML = 'Você é Estrangeiro'
    }
}