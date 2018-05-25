var btn = document.getElementById("task3_btn");
btn.onclick = function () {
  var input = document.getElementById("task3_inp");
  var value = input.value;
  var danger_msg = '<br><strong style="color:red">Danger!</strong>'
  var succes_msg = '<br><strong style="color:green">Success!</strong>'


  function checkPassword(){
    //code here
    //variable value is input value
    var count = 0;
    for(var i = 0; i < value.length; i++){
      if(+value[i]){
        count++;
      }
    }

    return count > 0 && value.length >=8 ? true : false;
  }
  if(checkPassword()){
    document.getElementById("msg3").innerHTML = succes_msg;
  } else{
    document.getElementById("msg3").innerHTML = danger_msg;
  }
}
