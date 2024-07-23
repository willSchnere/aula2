function somar() {
   var n1 = parseFloat (document.getElementById("n1").value)
   var n2 = parseFloat (document.getElementById("n2").value)
   
   var resp = document.getElementById("ResSoma")
   resp.textContent = n1 + n2
   resp.innerHTML = n1 + n2
   resp.innerText = n1 + n2
  }

  function subtrair (){
    var sub1 = parseFloat(document.getElementById("sub1").value)
    var sub2 = parseFloat(document.getElementById("sub2").value)
    
    var respsub = document.getElementById("ResSub")
    respsub.textContent = sub1 - sub2;
  }
  function dividir(){
    var div1 = parseFloat(document.getElementById("div1").value)
    var div2 = parseFloat(document.getElementById("div2").value)

    var respdiv = document.getElementById("ResDiv")
    respdiv.textContent = div1 / div2;
  }
  function multiplicar(){
    var mul1 = parseFloat(document.getElementById("mul1").value)
    var mul2 = parseFloat(document.getElementById("mul2").value)

    var respmul = document.getElementById("ResMul")
    respmul.textContent = mul1 * mul2;
  }
  function media(){
    var med1 = parseFloat(document.getElementById("med1").value)
    var med2 = parseFloat(document.getElementById("med2").value)
    var med3 = parseFloat(document.getElementById("med3").value)
    var medias = document.getElementById("resMedia")
    var res = (med1 + med2 + med3) / 3
    console.log(res)

    if(res >= 7){
        medias.textContent = res.toFixed(3)
        medias.style.color = "green"
        medias.style.backgroundColor ="#229954"
        medias.style.padding = "Spx"
    }else{
       medias.textContent = res.toFixed(3)
       medias.style.color = "red"
       medias.style.backgroundColor ="lightpink"
        medias.style.padding = "Spx"
    }

  }

  function contar (){
    const num = parseFloat($("#numeroInput").val())

    var resultadoStr = ""

    if(num <= 100){
       for(var cont = 1;cont <= num; cont++){
        resultadoStr = resultadoStr + cont + "<br>"
       }
       $("#result").html(resultadoStr)
    }else{
      $("#result").text("Digite um numero menor que 100")
    }
  }