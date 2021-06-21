player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");

player1_score=0;
player2_score=0;


document.getElementById("player1_name").innerHTML=player1;
document.getElementById("player2_name").innerHTML=player2;
document.getElementById("p1s").innerHTML=player1;
document.getElementById("p2s").innerHTML=player2;


function send(){
    num1=document.getElementById("1i").value;
    num2=document.getElementById("2i").value;
    final_ans= parseInt(num1)*parseInt(num2);
    console.log(final_ans);

    question="<h4>"+num1+" X "+num2+"-";
    input="<br> Answer- <input type='text' id='input_check'>"
    button="<br><br> <button class='btn btn-info' onclick='check'> Check</button>"
    row=question+input+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("p1s").value="";
    document.getElementById("2i").value="";
}
