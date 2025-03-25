function addMessage() {
    const message = document.getElementById("newMessage").textContent;
    const newParagraph = document.createElement('p')
    newParagraph.textContent = message
    document.body.appendChild(newParagraph)
}