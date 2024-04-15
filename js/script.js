function Display(Result) {
  if (Result) {
    document.getElementById("Output").innerHTML = "The area of this hexagon is " + Result.toFixed(2)+"cm<sup>2</sup>";
  } else {
    document.getElementById("Output").innerHTML = "Please enter a valid number"
  }
}
function Calculate() {
  let SideA = document.getElementById("sideA").value
  let Area = 3 * Math.sqrt(3) / 2 * Math.pow(SideA, 2)
  Display(Area)
}