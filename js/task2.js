var btn = document.getElementById("task2_btn");
btn.onclick = function () {
  var input = document.getElementById("task2_inp");
  var value = input.value;
  var danger_msg = '<br><strong style="color:red">Danger!</strong>'
  var succes_msg = '<br><strong style="color:green">Success!</strong>'


  function checkPhone(){
    //your code here
    //variable value contains input value
    return +value

  }
  if(checkPhone()){
    document.getElementById("msg2").innerHTML = succes_msg;
  } else{
    document.getElementById("msg2").innerHTML = danger_msg;
  }
}
