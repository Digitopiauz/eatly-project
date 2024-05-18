document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".header_menu")

  burger.addEventListener("click", function () {
    nav.classList.toggle("active")
  })
})
