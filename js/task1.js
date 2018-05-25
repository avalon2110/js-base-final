var btn = document.getElementById("task1_btn");
btn.onclick = function () {
  var input = document.getElementById("task1_inp");
  var value = input.value;
  var danger_msg = '<br><strong style="color:red">Danger!</strong>'
  var succes_msg = '<br><strong style="color:green">Success!</strong>'

  function checkEmail(){
    //your code here
    //variable value contains input value
    if(value[0] == '@' || value[value.length-1] == '@'){
      return false;
    }
    var count = 0;
    for(var i = 0; i < value.length; i++){
      if(value[i] == '@'){
        count++;
      }
    }
    return count == 1 ? true : false;
  }
  // console.log(checkEmail());
  if(checkEmail()){
    document.getElementById("msg1").innerHTML = succes_msg;
  } else{
    document.getElementById("msg1").innerHTML = danger_msg;
  }
}
