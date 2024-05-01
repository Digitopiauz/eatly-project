"use client"

document.getElementById("open-modal-btn").addEventListener("click", () => {
  document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close_moda-btn").addEventListener("click", () => {
  document.getElementById("my-modal").classList.remove("open")
})
