const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then((res) => res.json())
  .then((data) => showDisplay(data));

function showDisplay(posts) {
  const postsContainer = document.querySelector("#postsContainer");
  for (let post of posts) {
    const div = document.createElement("div");
    div.innerHTML = `
    <h4>Id:${post.userId}</h4>
    <h5>Title:${post.title}</h5>
    <p>Body:${post.body}</p>
    `;
    postsContainer.appendChild(div);
  }
}
