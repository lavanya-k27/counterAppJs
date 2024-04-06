let resultRef = document.getElementById("result");
let inputRef = document.getElementById("increment");
let addRef = document.getElementById("add");
let subtractRef = document.getElementById("subtract");
let resetRef = document.getElementById("reset");

let result = 0;
let inputValue = 1;

const addEventListener = () => {
  inputRef.addEventListener("change", (e) => {
    inputValue = Number(e.target.value);
  });

  addRef.addEventListener("click", (e) => {
    increment();
  });

  subtractRef.addEventListener("click", (e) => {
    decrement();
  });

  resetRef.addEventListener("click", (e) => {
    reset();
  });
};

const increment = () => {
  result += inputValue;
  updateResult();
};

const decrement = () => {
  result -= inputValue;
  updateResult();
};

const reset = () => {
  result = 0;
  updateResult();
};

const updateResult = () => {
  resultRef.innerText = result;
};

addEventListener();
