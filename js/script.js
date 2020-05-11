function verificar() {
    var resposta = window.document.getElementById('resposta')
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = window.document.getElementById('txtano') 
    if (txtano.value.length == 0 || Number(txtano.value) > ano) {
        window.alert('[ERRO] Insira os dados corretamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var nasc = Number(txtano.value)
        var idade = ano - nasc
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Mulher'
            document.body.style.background = 'rgb(235, 136, 152)'
            if (idade >=0 && idade <=10) {
                //criança
                img.setAttribute('src', 'fotos/crianca-f.png')
            }else if (idade < 21) {
                //jpvem
                img.setAttribute('src', 'fotos/jovem-f.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotos/adulto-f.png')
            }else {
                //idoso
                img.setAttribute('src', 'fotos/idoso-f.png')
            }
        }else {
            gênero = 'Homem'
            document.body.style.background = '#8EC2E8'
            if (idade >=0 && idade <=10) {
                //criança
                img.setAttribute('src', 'fotos/crianca-m.png')
            }else if (idade < 21) {
                //jpvem
                img.setAttribute('src', 'fotos/jovem-m.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotos/adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'fotos/idoso-m.png')
            }
        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML = `<p>Detectamos um(a) ${gênero} com ${idade} anos de idade.</p>`
        resposta.appendChild(img)
    }
}
