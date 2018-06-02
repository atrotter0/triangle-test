const NUMBER_OF_FIELDS = 3;

function disableBtn() {
  $("#submit").prop("disabled", true);
}

function checkTriangle(sideA, sideB, sideC) {
  if (isIsosceles(sideA, sideB, sideC)) {
    console.log("iso");
  } else if (isEquilateral(sideA, sideB, sideC)) {
    console.log("eq");
  } else if (isScalene(sideA, sideB, sideC)) {
    console.log("scale");
  } else {
    console.log("Not a triangle");
  }
}

// two sides equal
function isIsosceles(a, b, c) {
  if (a === b && b !== c)return true;
}

// all sides equal
function isEquilateral(a, b, c) {
  if (a === b && a === c) return true;
}

// no sides equal
function isScalene(a, b, c) {
  if (a !== b && b !== c) return true;
}

function onlyNumbers(element) {
  // add regex to check for only numbers
  // var value = $(element).val();
  // var onlyNumbers = ;
  // if (value === onlyNumbers) return true;
}

function allFieldsFilled() {
  if (countFields() === NUMBER_OF_FIELDS) return true;
}

function countFields() {
  var count = 0;
  $("input[type=text]").each(function(index, item) {
    console.log(item);
    console.log(index);
    if ($(item).val() > 0) count++;
  });
  console.log("Count: " + count);
  return count;
}

function enableBtn() {
  console.log("enabling btn...");
  $("#submit").removeAttr("disabled", false);
}

$(document).ready(function() {
  disableBtn();

  $("#submit").click(function(e) {
    e.preventDefault();

    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());
    checkTriangle(sideA, sideB, sideC);
  });

  $("input").keyup(function() {
    if (onlyNumbers(this) && allFieldsFilled()) {
      enableBtn();
    } else {
      disableBtn();
    }
  });
});