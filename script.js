function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 5 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#FFBF00'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#FA8258'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#0431B4'
    }
}



