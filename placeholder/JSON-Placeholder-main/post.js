const queryString = window.location.search;

const newValue = queryString.split("=")[1];

console.log(newValue);

async function getUser() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${newValue}`
  );
  const data = await response.json();
  data.forEach((user) => {
    createCards(user);
  });
  console.log(data);
}

const wrapper = document.querySelector(".wrapper");

function createCards(user) {
  wrapper.innerHTML += `
    <div class="card col-lg-6">
      <h4>ID:${user.userId}</h4>
      <h5>ID:${user.id}</h5>
      <p>Title: ${user.title}</p>
      <p>Body: ${user.body}</p>
    </div>
  `;
}

getUser();
