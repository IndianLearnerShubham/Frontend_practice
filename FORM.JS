function disp() {

    var a = parseFloat( document.getElementById("age").value);
    if(a<=1){
            alert(" I am Infant");
    }
    else if(a>1 && a<=12){
            alert("I am child");
    }
    else if(a>=13 && a<=19){
        alert ("I am a teen");
    }
    else if(a>=20 && a<=30){
        alert("I am Young ");
    }
    else if(a>=31 && a<=60){
        alert("I am middle age");
    }
    else{
        alert("I am Senior citizen");
    }
}
