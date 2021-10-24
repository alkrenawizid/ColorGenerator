const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const copy = document.getElementById("copy");
const prev = document.getElementById("prev");

let colorArray = [];

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandom()];
    
  }
  colorArray.push(hexColor)
  console.log(colorArray)
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandom() {
  return Math.floor(Math.random() * hex.length);
}

copy.addEventListener("click", function copy() {
  navigator.clipboard.writeText(color.textContent);
})

prev.addEventListener("click", function prev() {
  temp = colorArray[colorArray.length-2]
  color.textContent = temp;
  document.body.style.backgroundColor = temp;

})