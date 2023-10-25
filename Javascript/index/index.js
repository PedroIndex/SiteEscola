function calcular() {
    var txtv =window.document.querySelector('input#txtvel')
    var res =window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML =`<p>pedro vai</p>` 
 if (vel > 60) {
    res.innerHTML += `<p>voce esta multado por excesso de velocidade</p>`
 } else{
 res.innerHTML += `<p>vc e foda</p>.`
 }
}