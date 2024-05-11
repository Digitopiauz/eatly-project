const accordionButtons = document.body.querySelectorAll(".faq_details_img")

const textBody = document.querySelectorAll(".faq_details_text_body")

accordionButtons.forEach((item, index) => {
  const key = index

  accordionButtons[key].addEventListener("click", () => {
    if (textBody[key].classList.contains("show")) {
      textBody[key].classList.remove("show")
      item.classList.remove("active")
    } else {
      textBody[key].classList.add("show")
      item.classList.add("active")
    }
  })
})
