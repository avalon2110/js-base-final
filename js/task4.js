var btn = document.getElementById("task4_btn");
btn.onclick = function () {
  var input = document.getElementById("task4_inp");
  var value = input.value;
  var danger_msg = '<br><strong style="color:red">Try again!</strong>'
  var succes_msg = '<br><strong style="color:green">Success!</strong>'

  var users = [
    {
      login:"Bob",
      email: "bob@email.com",
      phone: 123456,
      isMarried: true
    },
    {
      login:"John",
      email: "john@email.com",
      phone: 123456,
      isMarried: false
    },
    {
      login:"Vasya",
      email: "vasya@email.com",
      phone: 123456,
      isMarried: true
    },
    {
      login:"Ivan",
      email: "ivan@email.com",
      phone: 123456,
      isMarried: false
    }
  ];

  function checkLogin(){

    //code here
    //variable value is input value

  }
  if(checkLogin()){
    document.getElementById("msg4").innerHTML = succes_msg;
  } else{
    document.getElementById("msg4").innerHTML = danger_msg;
  }
}
