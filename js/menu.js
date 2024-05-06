"use client"

document.body
  .querySelector(".faq_details_img")
  .addEventListener("click", () => {
    if (
      document.body
        .querySelector(".faq_details_text_body")
        .classList.contains("show")
    ) {
      document.body
        .querySelector(".faq_details_text_body")
        .classList.remove("show")
    } else {
      document.body
        .querySelector(".faq_details_text_body")
        .classList.add("show")
    }
  })
