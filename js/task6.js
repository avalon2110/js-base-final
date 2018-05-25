var btn = document.getElementById("task6_btn");
btn.onclick = function () {
  var pass1 = document.getElementById("task6_inp1").value;
  var pass2 = document.getElementById("task6_inp2").value;
  var danger_msg = '<br><strong style="color:red">Passwords not equal!</strong>'
  var succes_msg = '<br><strong style="color:green">Passwords are equal!</strong>'


  function confirmPass(){
    //pass1 -> first password
    //pass2 -> second password
    //code here;
    return pass1 == pass2 ? true : false;
  }
  if(confirmPass()){
    document.getElementById("msg6").innerHTML = succes_msg;
  } else{
    document.getElementById("msg6").innerHTML = danger_msg;
  }
}
