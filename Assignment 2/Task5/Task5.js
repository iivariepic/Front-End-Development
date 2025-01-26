function greet(name="Guest") {
    console.log(`Hello ${name}`)
}

greet()
greet("Iivari")

function makeArray(...elements) {
    return elements
}

let my_array = makeArray("Iivari", "Anttila", "Iivari 2")
console.log(my_array)

