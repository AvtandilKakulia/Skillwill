/*
fetch ფუნქციის გამოყენებით წამოიღე მონაცემები მოცემული მისამართიდან და გამოიტანე DOM-ში პოსტის სახით.
https://jsonplaceholder.typicode.com/posts
*/


async function createPosts() {
    try {
        let body = document.body
        let postsContainer = document.createElement('div')
        postsContainer.setAttribute('class','posts-container')
        let rawData = await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts = await rawData.json()
    
        for (let post of posts) {
            post = 
                `
                <div class="post">
                    <div class="post-id">${post.id}</div>
                    <h2 class="post-title">${post.title}</h2>
                    <div class="post-content">
                    <p>${post.body}</p>
                </div> `
            
            postsContainer.innerHTML += post
        }
    
        body.append(postsContainer)
    } catch (error) {
        console.log(error.message);
    }

}

createPosts()

