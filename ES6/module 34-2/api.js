function randomViewer() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => randomPosts(data))
}
randomViewer();

function randomPosts(data) {
    const results = data.results;
    const divUser = document.getElementById('user');
    for (const result of results) {
        const p = document.createElement('p')
        p.innerText = `Name: ${result.name.first} ${result.name.last}, Email: ${result.email}`
        divUser.appendChild(p);
        console.log(result);
    }

}