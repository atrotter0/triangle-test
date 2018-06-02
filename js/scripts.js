const NUMBER_OF_FIELDS = 3;

function disableBtn() {
  $("#submit").prop("disabled", true);
}

function checkTriangle(sideA, sideB, sideC) {
  if (isIsosceles(sideA, sideB, sideC)) {
    showResult("Isosceles");
  } else if (isEquilateral(sideA, sideB, sideC)) {
    showResult("Equilateral");
  } else if (isScalene(sideA, sideB, sideC)) {
    showResult("Scalene");
  } else {
    showResult("Not a triangle!");
  }
}

// two sides equal
function isIsosceles(a, b, c) {
  if ((a === b && b !== c) || (a === c && b !== c) || (a !== b && b === c)) return true;
}

// all sides equal
function isEquilateral(a, b, c) {
  if (a === b && a === c) return true;
}

// no sides equal
function isScalene(a, b, c) {
  if (a !== b && b !== c) return true;
}

function showResult(triangle) {
  $(".result").fadeIn(800);
  $(".result-text").text(triangle);
}

function onlyNumbers(element) {
  if ($(element).val().match(/[0-9]/)) return true;
}

function allFieldsFilled() {
  if (checkForValues() === NUMBER_OF_FIELDS) return true;
}

function checkForValues() {
  var count = 0;
  $("input[type=text]").each(function(index, item) {
    if ($(item).val() > 0) count++;
  });
  return count;
}

function enableBtn() {
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