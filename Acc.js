//# single section accordian

// define data for the accordion items
const data = [
  { id: "1", question: "Question1", answer: "Answer1" },
  { id: "2", question: "Question1", answer: "Answer2" },
  { id: "3", question: "Question1", answer: "Answer3" },
];
document.addEventListener("DOMContentLoaded", function () {
  // initialize selected item state
  let selectedItems = null;

  function handleToggle(itemId) {
    if (selectedItems === itemId) {
      // if the clicked item is already selected, deselect it
      selectedItems = null;
    } else {
      // if a different item is clicked, select it
      selectedItems = itemId;
    }
    renderAccordion();
  }
  // Function to render the accordion
  function renderAccordion() {
    const accordionContainer =
      document.querySelector(".accordion");
    accordionContainer.innerHTML = ""; // clear prev content

    data.forEach((dataItem) => {
      const item = document.createElement("div");
      item.classList.add("item");
      item.setAttribute("key", dataItem.id);

      const title = document.createElement("div");
      title.classList.add("title");
      title.addEventListener("click", () =>
        handleToggle(dataItem.id)
      );

      const question = document.createElement("h3");
      question.textContent = dataItem.question;

      const icon = document.createElement("span");
      icon.textContent =
        selectedItems === dataItem.id ? "-" : "+";

      title.appendChild(question);
      title.appendChild(icon);
      item.appendChild(title);

      if (selectedItems === dataItem.id) {
        const content = document.createElement("div");
        content.classList.add("content");
        content.textContent = dataItem.answer;
        // console.log(content)
        item.appendChild(content);
      }

      accordionContainer.appendChild(item);
    });
  }

  // initial rendering
  renderAccordion();
});
