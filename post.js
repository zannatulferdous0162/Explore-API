function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

/**
 * 1--> get the container element  where u want to add the new elements
 * 2 --> create child element
 * 3 --> set innerText or innerHTML
 * 4 --> appendChild
 */
function displayPost(posts) {
    const postcontainer = document.getElementById('post-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h4> User-${post.userId} </h4>
        <h5>Post: ${post.title} </h5>
        <p> Post Description : ${post.body} </p>
        `
            ;
        postcontainer.appendChild(postDiv);
    }
}

loadPost()

