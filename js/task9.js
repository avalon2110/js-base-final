var btn = document.getElementById("task9_btn");
btn.onclick = function () {

  var addToSalary = document.getElementById("task9_inp1").value || "nothing";
  var danger_msg = '<br><strong style="color:red">Not success!</strong>'
  var success_msg = '<br><strong style="color:green">Success</strong>'
  var myArray = [
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass2",
     isMarried:true,
     phone:"123456",
     salary: 500,
     dateOfBirth: 1990
  },
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass2",
     isMarried:true,
     phone:11223344,
     salary: 300,
     dateOfBirth: 1951
  },
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass3",
     isMarried:false,
     phone:2345678,
     salary: 200,
     dateOfBirth: 1953
  },
  {
     login:"lol",
     email:"lol@gmail.com",
     pass:"pass4",
     isMarried:true,
     phone:987654,
     salary: 400,
     dateOfBirth: 1980
  }
];



function salaryUp(arr){
  //variables
  //myArray is array of objects
  //addToSalary is a value of input
  //code
  for(var i = 0; i < arr.length; i++){
    if(arr[i].dateOfBirth < 1960){
      arr[i].salary += +addToSalary;
    }
  }
  return arr;
}

  var newArr = salaryUp(myArray);
  console.log(newArr);
}
