let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();
});

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        // Tek tırnak ve çift tırnak kullanımını dikkatli bir şekilde yönetmelisiniz.
        // Burada template literals (``) kullanarak daha okunabilir bir şekilde kod yazıyorum.
        listItems += `
            <li>
                <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a>
            </li>`;
    }
    ulEl.innerHTML = listItems;
}
