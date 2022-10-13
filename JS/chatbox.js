
function showchatbox(){
    document.getElementById("messagebox").style.display = "block";
}

function hidechatbox(){
    document.getElementById("messagebox").style.display = "none";
}
function hidechatboxwithstatus(){
    document.getElementById("messagebox").style.display = "none";
    document.getElementById("status").innerHTML = "თქვენი შეტყობინება წარმატებით გაიგზავნა";
}