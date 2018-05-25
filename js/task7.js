var btn = document.getElementById("task7_btn");
btn.onclick = function () {
  var login = document.getElementById("task7_inp1").value;
  var email = document.getElementById("task7_inp2").value;
  var pass = document.getElementById("task7_inp3").value;
  var isMarried = document.getElementById("task7_inp4").value;
  var phone = document.getElementById("task7_inp5").value;

  var usersArray = [
    {
       login:"lol",
       email:"lol@gmail.com",
       pass:"pass2",
       isMarried:true,
       phone:"123456"
    },
    {
       login:"lol",
       email:"lol@gmail.com",
       pass:"pass2",
       isMarried:true,
       phone:11223344
    },
    {
       login:"lol",
       email:"lol@gmail.com",
       pass:"pass3",
       isMarried:false,
       phone:2345678
    },
    {
       login:"lol",
       email:"lol@gmail.com",
       pass:"pass4",
       isMarried:true,
       phone:987654
    }
  ]
  function addUser(){
    //variables
    //login -> login
    //email -> email
    //pass -> password
    //isMarried -> isMarried value
    // phone -> phone
    //code here;

  }
  var newUsersArray = addUser();
  console.log(newUsersArray);
  }
