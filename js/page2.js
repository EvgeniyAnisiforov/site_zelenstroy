/*  */
let container1 = document.getElementById('container1');
let child1 = document.getElementById('child1');

container1.addEventListener('mouseover', function() {
  child1.classList.add('hover');
});

container1.addEventListener('mouseout', function() {
  child1.classList.remove('hover');
});

/*  */
let container3 = document.getElementById('container3');
let child3 = document.getElementById('child3');

container3.addEventListener('mouseover', function() {
  child3.classList.add('hover');
});

container3.addEventListener('mouseout', function() {
  child3.classList.remove('hover');
});

let burger = document.getElementById("burger")
let block_menu = document.getElementById("block_menu")


burger.addEventListener("click", function () {
  if (block_menu.style.display === "block") {
    block_menu.style.display = "none"
  } else {
    block_menu.style.display = "block"
  }
})