function viewMyPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => OtherPosts(data))
}
viewMyPosts();

function OtherPosts(data) {
    const containerPosts = document.getElementById('posts');
    for (const my of data) {
        const div = document.createElement('div');
        //css style
        div.classList.add('design')

        div.innerHTML = `
              <h1>${my.title}</h1>
              <p>${my.body}</p>
        `
        containerPosts.appendChild(div);
        console.log(my)
    }
}