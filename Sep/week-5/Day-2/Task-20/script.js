fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    const posts = document.getElementById("posts");

    data.forEach(post => {
      posts.innerHTML += `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr>
      `;
    });
  })
  .catch(error => {
    console.log("Error:", error);
  });
