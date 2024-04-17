/* function to calculate the area and perimeter */
function Calculate() {
  let SideA = document.getElementById("sideA").value
  let Area = 3 * Math.sqrt(3) / 2 * Math.pow(SideA, 2)
  let Perimeter = SideA * 6

  return [Area, Perimeter];
}

/* function to display the area and perimeter */
function Display() {
  let Array = Calculate();
  document.getElementById("Output").innerHTML = Array[0]
  if (Array[0]) {
    document.getElementById("Output").innerHTML = "The area of this hexagon is " + Array[0].toFixed(2) + "cm<sup>2</sup><br>The permieter of this hexagon is " + Array[1].toFixed(2) + "cm";
  } else {
    document.getElementById("Output").innerHTML = "Please enter a valid number"
  }
}