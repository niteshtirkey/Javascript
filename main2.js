// single section accordian
document.addEventListener("DOMContentLoaded", function () {
  // Define data for the accordion items
  const data = [
    {
      id: "1",
      question: "What are accordion components?",
      answer:
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      id: "2",
      question: "What are they used for?",
      answer:
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
      id: "3",
      question: "Accordion as a musical instrument",
      answer:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
      id: "4",
      question:
        "Can I create an accordion component with a different framework?",
      answer:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },
  ];

  // Initialize selected item state
  let selectedItem = null;

  // Function to toggle selection
  function handleToggleSelection(itemId) {
    if (selectedItem === itemId) {
      // If the clicked item is already selected, deselect it
      selectedItem = null;
    } else {
      // If a different item is clicked, select it
      selectedItem = itemId;
    }
    renderAccordion();
  }

  // Function to render the accordion
  function renderAccordion() {
    const accordionContainer =
      document.querySelector(".accordion");
    accordionContainer.innerHTML = ""; // Clear previous content

    data.forEach((dataItem) => {
      const item = document.createElement("div");
      item.classList.add("item");
      item.setAttribute("key", dataItem.id);

      const title = document.createElement("div");
      title.classList.add("title");
      title.addEventListener("click", () =>
        handleToggleSelection(dataItem.id)
      );

      const question = document.createElement("h3");
      question.textContent = dataItem.question;

      const icon = document.createElement("span");
      icon.textContent =
        selectedItem === dataItem.id ? "-" : "+";

      title.appendChild(question);
      title.appendChild(icon);
      item.appendChild(title);

      if (selectedItem === dataItem.id) {
        const content = document.createElement("div");
        content.classList.add("content");
        content.textContent = dataItem.answer;
        item.appendChild(content);
      }

      accordionContainer.appendChild(item);
    });
  }

  // Initial rendering
  renderAccordion();
});
