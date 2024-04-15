function Display(Area, Perimeter) {
  if (Area) {
    document.getElementById("Output").innerHTML = "The area of this hexagon is " + Area.toFixed(2) + "cm<sup>2</sup><br>The permieter of this hexagon is " + Perimeter.toFixed(2) + "cm";
  } else {
    document.getElementById("Output").innerHTML = "Please enter a valid number"
  }
}
function Calculate() {
  let SideA = document.getElementById("sideA").value
  let Area = 3 * Math.sqrt(3) / 2 * Math.pow(SideA, 2)
  let Perimeter = SideA * 6
  Display(Area, Perimeter)
}