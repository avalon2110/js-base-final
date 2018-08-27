document.getElementById("task3_btn").onclick = function () {

  const tests = [
    {
      input: "123123"
    },
    {
      input: "qwe123"
    },
    {
      input: "123qwe"
    },
    {
      input: "qweqwe123qwe"
    },
    {
      input: "asdzxc123123"
    },
    {
      input: "12312312"
    }
  ];
  
  const check = (test, func) => func(test.input) === s3(test.input);
  
  tests.forEach((t, i) => {
    console.log(`test ${i+1} ${check(t,checkPassword) ? 'passed' : 'not passed'}`);
  });

}

function checkPassword(value){

  //code here
  //variable value is input value

}























































































































































function s3(r){if(r.length<8)return!1;for(var n=0;n<r.length;n++)if(+r[n])return!0;return!1}