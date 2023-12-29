function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");

/* 
Original Value: 42
After parseInt: 42
Original Value: 42px
After parseInt: 42
Original Value: 3.14
After parseInt: 3
Original Value: 3.14
After parseFloat: 3.14
Original Value: 42
After parseFloat: 42
Original Value: 42px
After parseFloat: 42
*/
