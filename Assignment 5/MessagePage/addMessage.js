function addMessage() {
    const message = document.getElementById("newMessage").value;
    const messageContainer =
        document.getElementById("messageContainer");
    const newParagraph = document.createElement('p');
    newParagraph.textContent = message;
    messageContainer.appendChild(newParagraph);
}