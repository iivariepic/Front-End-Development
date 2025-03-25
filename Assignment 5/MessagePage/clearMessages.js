function clearMessages(){
    if (confirm("Do you want to clear these messages?")) {
        const messageContainer =
            document.getElementById("messageContainer");
        messageContainer.innerHTML = '';}
}
