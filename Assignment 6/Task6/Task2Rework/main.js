const storage = require('./localStorage');

window.addEventListener('DOMContentLoaded', () => {
    const storedName = storage.getName();
    if (storedName !== null) {
        document.getElementById('name').value = storedName
    }
})

document.getElementById('name').addEventListener('blur', (event) => {
    storage.saveName(event.target.value)
})