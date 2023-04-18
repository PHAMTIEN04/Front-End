const PI = 3.14;

function areaCircle (radius){
    let s = radius * radius * PI;
    var pElement = document.getElementById('result');
    pElement.innerHTML = "Dien Tich Hien Tron :" + s;
}
function showAlert(str){
    alert(str);
}

function add(){
    var a = parseInt(document.getElementById('Num1').value);
    var b = parseInt(document.getElementById('Num2').value);
    var total = a + b;
    var pElement = document.getElementById('resultadd');
    pElement.innerHTML ="Ket qua:"+ total;
}
function sub(){
    var a = parseInt(document.getElementById('Num1').value);
    var b = parseInt(document.getElementById('Num2').value);
    var total = a - b;
    var pElement = document.getElementById('resultadd');
    pElement.innerHTML ="Ket qua:"+ total;
}
function mul(){
    var a = parseInt(document.getElementById('Num1').value);
    var b = parseInt(document.getElementById('Num2').value);
    var total = a * b;
    var pElement = document.getElementById('resultadd');
    pElement.innerHTML ="Ket qua:"+ total;
}
function div(){
    var a = parseInt(document.getElementById('Num1').value);
    var b = parseInt(document.getElementById('Num2').value);
    var total = a / b;
    var pElement = document.getElementById('resultadd');
    pElement.innerHTML ="Ket qua:"+ total;
}
function area(){
    var a = parseInt(document.getElementById('radius').value);

    var area = a * a * PI;
    var pElement = document.getElementById('resultadd');
    pElement.innerHTML ="Ket qua:"+ area;
}