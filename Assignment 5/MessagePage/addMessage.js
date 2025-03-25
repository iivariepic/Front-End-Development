function addMessage() {
    const message = document.getElementById("newMessage").value;
    console.log(message);
    const newParagraph = document.createElement('p');
    newParagraph.textContent = message;
    document.body.appendChild(newParagraph);
    console.log(newParagraph);
}