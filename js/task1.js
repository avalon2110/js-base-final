var btn = document.getElementById("task1_btn");
btn.onclick = function () {
  var input = document.getElementById("task1_inp");
  var value = input.value;
  var danger_msg = '<br><strong style="color:red">Danger!</strong>'
  var succes_msg = '<br><strong style="color:green">Success!</strong>'

  function checkEmail(){
    //your code here
    //variable value contains input value
  }
  // console.log(checkEmail());
  if(checkEmail()){
    document.getElementById("msg1").innerHTML = succes_msg;
  } else{
    document.getElementById("msg1").innerHTML = danger_msg;
  }
}
