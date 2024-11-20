let contactList = [
    {
        name: "John Doe",
        phone: "1234 567 890",
        email: "john.doe@example.com"
    },
    {
        name: "Jane Smith",
        phone: "2345 678 901",
        email: "jane.smith@example.com"
    },
    {
        name: "Bob Johnson",
        phone: "3456 789 012",
        email: "bob.johnson@example.com"
    },
]  

const hardCodedContact = {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca "
}

window.addEventListener("load", () => {
    console.log("The initial Contact List is: ", contactList)
})

document.getElementById("displayList").addEventListener("click", () => {
    console.log("The actual Contact List is: ", contactList)
})

document.getElementById("addContact").addEventListener("click", () => {
    contactList = [...contactList, hardCodedContact]
    console.log("A new contact was added, the Updated Contact List is: ", contactList)
})

document.getElementById("firstLast").addEventListener("click", () => {
    console.log("The first Contact in the List is: ", contactList[0])
    console.log("The last Contact in the List is: ", contactList.slice(-1)[0])
})