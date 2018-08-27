document.getElementById("task4_btn").onclick = function () {

  const users = [
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

  const tests = [
    {
      input: "Bob"
    },
    {
      input: "John"
    },
    {
      input: "Mike"
    },
    {
      input: "Vasya"
    },
    {
      input: "Nick"
    },
    {
      input: "Petya"
    }
  ];
  
  const check = (test, func) => func(test.input, users) === s4(test.input, users);
  
  tests.forEach((t, i) => {
    console.log(`test ${i+1} ${check(t,checkLogin) ? 'passed' : 'not passed'}`);
  });

}

function checkLogin(name, arr){
  
  //code here
  
}









































































function s4(n,o){return!o.some(function(o){return o.login===n})}