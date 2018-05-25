var btn = document.getElementById("task8_btn");
btn.onclick = function () {

  var myArray = [
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass2",
     isMarried:true,
     phone:"123456",
     salary: 500
  },
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass2",
     isMarried:true,
     phone:11223344,
     salary: 300
  },
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass3",
     isMarried:false,
     phone:2345678,
     salary: 200
  },
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass4",
     isMarried:true,
     phone:987654,
     salary: 400
  }
];


  function sumSalary(){
    //variables
    //myArray is array of objects
    //code here
    var sum = 0;
    myArray.forEach(function (el) {
      sum += el.salary;
    })
    return sum;
  }

  document.getElementById("msg8").innerHTML = sumSalary();
}
