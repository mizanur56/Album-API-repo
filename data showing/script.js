// const showButton = document.querySelector("#button");
// const ul = document.querySelector("#users");

// showButton.addEventListener("click", showData());

function showData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayData(data));
}

function displayData(data) {
  const ul = document.querySelector("#users-list");
  for (let user of data) {
    // console.log(user.name);
    const li = document.createElement("li");
    li.innerText = "Name:" + user.name + "&" + "Email:" + user.email;
    ul.appendChild(li);
  }
}
