function calculateResults(sideA, sideB, sideC) {
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

function isIsosceles(a, b, c) {
  if (a === b && b !== c)return true;
}

function isEquilateral(a, b, c) {
  if (a === b && a === c) return true;
}

function isScalene(a, b, c) {
  if (a !== b && b !== c) return true;
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());
    calculateResults(sideA, sideB, sideC);
  });
});