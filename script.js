let result = document.getElementById('result');

function addValue(value) {
    if (result.innerText === "0") {
      result.innerText = value;
    } else {
      result.innerText += value;
    }
  }

function calculate() {
    try {
      result.innerText = eval(result.innerText);
    } catch (e) {
      result.innerText = "Error";
    }
}

function clearResult() {
    result.innerText = "0";
}