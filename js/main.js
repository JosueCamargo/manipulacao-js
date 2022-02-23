var numImg = 1;

function alternarImg() {
    let oslo_dia = null;
    oslo_dia = document.getElementById('lampada'); 
    
    
    if (numImg == 1) {
        oslo_dia.src = 'img/lampada-acesa.jfif';
        numImg = 2;
    } else{
        oslo_dia.src = 'img/lampada-apagada.jfif';
        numImg = 1;
    }

    console.log(numImg);
}

function alternarAutomatico() {
    window.setInterval(()=>{
        alternarImg();
    }, 1000);
}