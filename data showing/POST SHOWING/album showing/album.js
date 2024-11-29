const url = "https://jsonplaceholder.typicode.com/albums";

fetch(url)
  .then((res) => res.json())
  .then((data) => showDisplay(data));

function showDisplay(albums) {
  const albumContainer = document.querySelector(".albumContainer");
  for (let album of albums) {
    const div = document.createElement("div");
    div.innerHTML = `
    <h4>ID:${album.id}</h4>
    <h4>USER ID:${album.userId}</h4>
    <h5>TITLE:${album.title}</h5>
    `;
    albumContainer.appendChild(div);
  }
}
