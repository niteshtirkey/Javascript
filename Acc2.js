//# multiple select accordion

// define data for the accordion items
const data = [
  { id: "1", question: "Question1", answer: "Answer1" },
  { id: "2", question: "Question1", answer: "Answer2" },
  { id: "3", question: "Question1", answer: "Answer3" },
];

document.addEventListener("DOMContentLoaded", function(){
    // initialize selected items array
     const selectedItems = [];

     function handleToggle(itemId){
        const index = selectedItems.indexOf(itemId)
       if(index !== -1){
         selectedItems.splice(index, 1);
       }else{
        selectedItems.push(itemId)
       }
       renderAccordion();
     }

     function renderAccordion(){
        const accordionContainer = document.querySelector(".accordion");
        accordionContainer.innerHTML=""; // clear prev content

        data.forEach((dataItem)=>{
            const item = document.createElement("div");
            item.classList.add("item");
            item.setAttribute("key",dataItem.id);

            const title = document.createElement("div");
            title.classList.add("title");
            title.addEventListener("click",()=>{
                handleToggle(dataItem.id)
            });
            const question = document.createElement("h3");
            question.textContent=dataItem.question;

            const icon = document.createElement("span");
            icon.textContent = selectedItems.includes(dataItem.id)? "-" :"+";

            title.appendChild(question);
            title.appendChild(icon)
            item.appendChild(title);

            if(selectedItems.includes(dataItem.id)){
                const content = document.createElement("div");
                content.textContent = dataItem.answer;
                item.appendChild(content)
            }

            accordionContainer.appendChild(item)
        })
     }
     renderAccordion();
})