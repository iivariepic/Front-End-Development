function saveName(name) {
    localStorage.setItem('name', name);
}

function getName() {
    return localStorage.getItem('name');
}

module.exports = {
    saveName,
    getName,
};