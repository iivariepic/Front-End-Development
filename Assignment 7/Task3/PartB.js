async function getMeowFacts() {
    try {
        const response = await fetch('https://meowfacts.herokuapp.com/?count=5');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
getMeowFacts();

