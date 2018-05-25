var btn = document.getElementById("task3_btn");
btn.onclick = function () {
  var input = document.getElementById("task3_inp");
  var value = input.value;
  var danger_msg = '<br><strong style="color:red">Danger!</strong>'
  var succes_msg = '<br><strong style="color:green">Success!</strong>'


  function checkPassword(){
    //code here
    //variable value is input value

  }
  if(checkPassword()){
    document.getElementById("msg3").innerHTML = succes_msg;
  } else{
    document.getElementById("msg3").innerHTML = danger_msg;
  }
}
