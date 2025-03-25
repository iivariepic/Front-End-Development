function addMessage() {
    const message = document.getElementById("newMessage").value;
    const newParagraph = document.createElement('p');
    newParagraph.textContent = message;
    document.body.appendChild(newParagraph);
}