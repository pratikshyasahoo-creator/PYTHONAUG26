let div = document.querySelector(".posts");

async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  // console.log(posts);
  posts.map((post) => {
    let postCard = document.createElement("div");
    postCard.style.cssText =
      "bg-red-800 p-2 border border-blue-400 shadow rounded";
    let titleP = document.createElement("p");
    let bodyP = document.createElement("p");
    let userIdP = document.createElement("p");
    let idP = document.createElement("p");


    titleP.innerText = post.title;
    bodyP.innerText = post.body;
    userIdP.innerText = `User ID: ${post.userId}`;
    idP.innerText = `Post ID: ${post.id}`;


    postCard.append(titleP);
    postCard.append(bodyP);
    postCard.append(userIdP);
    postCard.append(idP);

    div.append(postCard);
  });
}

getData();

// get post by id
async function getpostById(id) {
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "GET",
    });
    let post = await res.json();

    console.log(post);
  } catch (error) {
    console.log("error block", error);
  }
}

getpostById(8);

// create operation
async function createpost() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "Guddy",
        userId: 21,
        id: 6,
        body: "create body",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("error is ", error);
  }
}

//createpost();


// update
async function updatepost() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/4", {
      method: "PATCH", // Put -> whole object change  , Patch -> specific field change
      body: JSON.stringify({
        title: "sonali",
        id: 90,
        body: "updated body",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("error is ", error);
  }
}

 updatepost()



//delete operation
async function deletepost(id) {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/4", {
      method: "DELETE",
    });

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("error ", error);
  }
}

deletepost()