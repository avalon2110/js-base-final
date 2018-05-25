var btn = document.getElementById("task10_btn");
btn.onclick = function () {

  var input = document.getElementById("task10_inp1").value;

  function calculator(){
    //variables
    //input is value of input
    //code

    var firstDigit = +input.split(" ")[0];
    var lastDigit = +input.split(" ")[2];
    var op = input.split(" ")[1];

    switch (op) {
      case '+':
        return firstDigit + lastDigit;
        break;
      case '-':
        return firstDigit - lastDigit;
        break;
      case '*':
        return firstDigit * lastDigit;
        break;
      case '/':
        return firstDigit / lastDigit;
        break;
    }
  }
    document.getElementById("msg10").innerHTML = calculator();
}
