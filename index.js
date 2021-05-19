function view(num)
{
    document.getElementById("result").value+=num
}

function clr()
{
    let x = document.getElementById("result").value=""
}

function compute(){
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}
  
var backspace = function() {
    
    var rekensom  = document.getElementById('result').value;
    document.getElementById('result').value=rekensom.substring(0,rekensom.length -1);
}

