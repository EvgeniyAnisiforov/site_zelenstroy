let container = document.getElementById("container")
let child = document.getElementById("child")

container.addEventListener("mouseover", function () {
  child.classList.add("hover")
})

container.addEventListener("mouseout", function () {
  child.classList.remove("hover")
})

let container2 = document.getElementById("container2")
let child2 = document.getElementById("child2")

container2.addEventListener("mouseover", function () {
  child2.classList.add("hover")
})

container2.addEventListener("mouseout", function () {
  child2.classList.remove("hover")
})

let burger = document.getElementById("burger")
let block_menu = document.getElementById("block_menu")


burger.addEventListener("click", function () {
  if (block_menu.style.display === "block") {
    block_menu.style.display = "none"
  } else {
    block_menu.style.display = "block"
  }
})
