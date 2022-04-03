function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name}, Email: ${user.email}`
        ul.appendChild(li);
        console.log(user)
    }
}

//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(Response => Response.json())
        .then(data => console.log(data))
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}



