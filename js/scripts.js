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

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());
    checkTriangle(sideA, sideB, sideC);
  });
});