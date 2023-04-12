function carregar(){ 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 3
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.scr = 'manha.jpg'
        document.body.style.background = 'rgb(255, 160, 66)'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(186, 111, 27)'
    } else{
        //BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = 'black'
    }
}

