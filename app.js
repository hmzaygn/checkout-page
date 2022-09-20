const firstBtnPlus = document.querySelector("#first-item .fa-plus");
const firstBtnMinus = document.querySelector("#first-item .fa-minus");
const firstItemQuantity = document.querySelector("#first-item p strong span");
let proTotal1 = document.querySelector("#ptotal1 span");

let result = document.querySelector("#result span");
let counter1 = document.getElementById("count1");
let tax = document.querySelector("#tax span");

firstBtnPlus.addEventListener("click", () => {
  counter1.textContent = Number(counter1.textContent) + 1;
  result.textContent = (
    Number(result.textContent) + Number(firstItemQuantity.textContent)
  ).toFixed(2);
  tax.textContent = ((result.textContent * 18) / 100).toFixed(2);

  proTotal1.textContent = (
    Number(proTotal1.textContent) + Number(firstItemQuantity.textContent)
  ).toFixed(2);
});

firstBtnMinus.addEventListener("click", () => {
  if (Number(counter1.textContent) > 1) {
    counter1.textContent = Number(counter1.textContent) - 1;
    result.textContent = (
      Number(result.textContent) - Number(firstItemQuantity.textContent)
    ).toFixed(2);
    tax.textContent = ((result.textContent * 18) / 100).toFixed(2);
    proTotal1.textContent = (
      Number(proTotal1.textContent) - Number(firstItemQuantity.textContent)
    ).toFixed(2);
  } else if (Number(counter1.textContent) <= 1) {
    document.getElementById("first-item").remove();
    result.textContent = (
      Number(result.textContent) - Number(firstItemQuantity.textContent)
    ).toFixed(2);
    tax.textContent = ((result.textContent * 18) / 100).toFixed(2);
    if (
      !document.getElementById("first-item") &&
      !document.getElementById("second-item")
    ) {
      document.querySelector("#shipping span").textContent = 0;
      tax.textContent = 0;
      result.textContent = 0;
    }
  }
});

document.querySelector(".rmv-btn-1").addEventListener("click", () => {
  document.getElementById("first-item").remove();
  result.textContent = (
    Number(result.textContent) - Number(firstItemQuantity.textContent)
  ).toFixed(2);
  tax.textContent = ((result.textContent * 18) / 100).toFixed(2);
  if (
    !document.getElementById("first-item") &&
    !document.getElementById("second-item")
  ) {
    document.querySelector("#shipping span").textContent = 0;
    tax.textContent = 0;
    result.textContent = 0;
  }
});

//* ITEM 2

const secondBtnPlus = document.querySelector("#second-item .fa-plus");
const secondBtnMinus = document.querySelector("#second-item .fa-minus");
const secondItemQuantity = document.querySelector("#second-item p strong span");
let proTotal2 = document.querySelector("#ptotal2 span");
let counter2 = document.getElementById("count2");

secondBtnPlus.addEventListener("click", () => {
  counter2.textContent = Number(counter2.textContent) + 1;
  result.textContent = (
    Number(result.textContent) + Number(secondItemQuantity.textContent)
  ).toFixed(2);
  tax.textContent = ((result.textContent * 18) / 100).toFixed(2);

  proTotal2.textContent = (
    Number(proTotal2.textContent) + Number(firstItemQuantity.textContent)
  ).toFixed(2);
});

secondBtnMinus.addEventListener("click", () => {
  if (Number(counter2.textContent) > 1) {
    counter2.textContent = Number(counter2.textContent) - 1;
    result.textContent = (
      Number(result.textContent) - Number(secondItemQuantity.textContent)
    ).toFixed(2);
    tax.textContent = ((result.textContent * 18) / 100).toFixed(2);
    proTotal2.textContent = (
      Number(proTotal2.textContent) - Number(firstItemQuantity.textContent)
    ).toFixed(2);
  } else if (Number(counter2.textContent) <= 1) {
    document.getElementById("second-item").remove();
    result.textContent = (
      Number(result.textContent) - Number(secondItemQuantity.textContent)
    ).toFixed(2);
    tax.textContent = ((result.textContent * 18) / 100).toFixed(2);
    if (
      !document.getElementById("first-item") &&
      !document.getElementById("second-item")
    ) {
      document.querySelector("#shipping span").textContent = 0;
      tax.textContent = 0;
      result.textContent = 0;
    }
  }
});

document.querySelector(".rmv-btn-2").addEventListener("click", () => {
  document.getElementById("second-item").remove();
  result.textContent = (
    Number(result.textContent) - Number(secondItemQuantity.textContent)
  ).toFixed(2);
  tax.textContent = ((result.textContent * 18) / 100).toFixed(2);
  if (
    !document.getElementById("first-item") &&
    !document.getElementById("second-item")
  ) {
    document.querySelector("#shipping span").textContent = 0;
    tax.textContent = 0;
    result.textContent = 0;
  }
});

// if (
//     !document.getElementById("first-item") &&
//     !document.getElementById("second-item")
//   ) {
//     document.querySelector("#shipping span").textContent = 0;
//   }
