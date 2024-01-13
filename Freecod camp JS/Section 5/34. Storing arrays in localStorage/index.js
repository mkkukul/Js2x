let myLeads = `["www.awesomelead.com"]`
// myLeads = JSON.stringify(myLeads)
// myLeads = JSON.parse(myLeads)
// console.log(typeof myLeads)
// myLeads.push("www.epiclead.com")
// console.log(myLeads)

myLeadsets = JSON.parse(myLeads)
myLeadsets.push("www.epiclead.com")
myLeadsets = JSON.stringify(myLeads)
console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
// localStorage.getItem("myleads")
// console.log(localStorage.setItem(myLeads))
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
