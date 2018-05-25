var btn = document.getElementById("task5_btn");
btn.onclick = function () {
  var login = document.getElementById("task5_inp1").value;
  var pass = document.getElementById("task5_inp2").value;
  var danger_msg = '<br><strong style="color:red">Incorrect password!</strong>'
  var succes_msg = '<br><strong style="color:green">Correct password!</strong>'

  var users = [
    {
      login:"Bob",
      email: "bob@email.com",
      phone: 123456,
      isMarried: true,
      password: "qwerty"
    },
    {
      login:"John",
      email: "john@email.com",
      phone: 123456,
      isMarried: false,
      password: "qwerty2"
    },
    {
      login:"Vasya",
      email: "vasya@email.com",
      phone: 123456,
      isMarried: true,
      password:"qwertyqwerty"
    },
    {
      login:"Ivan",
      email: "ivan@email.com",
      phone: 123456,
      isMarried: false,
      password: "qweqwe"
    }
  ];

  function checkPass(){

    //code here
    //variable value is input value
  }
  if(checkPass()){
    document.getElementById("msg5").innerHTML = succes_msg;
  } else{
    document.getElementById("msg5").innerHTML = danger_msg;
  }
}
