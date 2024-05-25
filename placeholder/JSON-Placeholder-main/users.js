async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  data.forEach((user) => {
    createCards(user);
  });
}

const wrapper = document.querySelector(".wrapper");


function createCards(user) {
  wrapper.innerHTML += `
    <div class="card col-lg-6">
       <div class="userContent">
        <h3>${user.name}</h3>
        <h5>ID:${user.id}</h5>
       </div>
        <div class="buttonContainer">
          <button class="addressBtn" onclick = "showBtn(${user.id}, 'address')"><i class="fa-solid fa-location-dot"></i></button>
          <button class="companyBtn" onclick = "showBtn(${user.id}, 'company')"><i class="fa-regular fa-building"></i></i></button>
          <button class="contactBtn" onclick = "showBtn(${user.id}, 'contact')"><i class="fa-regular fa-envelope"></i></i></button>
          <a href="post.html?userId=${user.id}"><button><i class="fa-solid fa-comment"></i></button></a>
        </div>
        <div class="content row">
          <div class="address display">
            Street:${user.address.street}<br>
            Suite:${user.address.suite}<br>
            City:${user.address.city}<br>
            Zipcode:${user.address.zipcode}<br>
          </div>
          <div class="company display">
            Name: ${user.company.name}<br>
            CatchPhrase: ${user.company.catchPhrase}<br>
            Bs: ${user.company.bs}<br>
          </div>
          <div class="contact display">
            E-mail: ${user.email}<br>
            Phone: ${user.phone}<br>
            Website: ${user.website}<br>
          </div>
        </div>
    </div>`;
}

getUser();

function showBtn(id, type) {
  // if (btn === "address") {
  //   const btn = document.querySelectorAll(".address");
  //   if (btn[id - 1].classList.contains("display")) {
  //     btn[id - 1].classList.remove("display");
  //   } else {
  //     btn[id - 1].classList.add("display");
  //   }
  // } else if (btn === "company") {
  //   const btn = document.querySelectorAll(".company");
  //   if (btn[id - 1].classList.contains("display")) {
  //     btn[id - 1].classList.remove("display");
  //   } else {
  //     btn[id - 1].classList.add("display");
  //   }
  // } else if (btn === "contact") {
  //   const btn = document.querySelectorAll(".contact");

  //   if (btn[id - 1].classList.contains("display")) {
  //     btn[id - 1].classList.remove("display");
  //   } else {
  //     btn[id - 1].classList.add("display");
  //   }
  // }

  const types = ["address", "company", "contact"];

  if (types.includes(type)) {
    const elements = document.querySelectorAll(`.${type}`);
    const button = document.querySelectorAll(`.${type}Btn`);
    if (elements.length > 0 && elements[id - 1]) {
      if (elements[id - 1].classList.contains("display")) {
        elements[id - 1].classList.remove("display");
        button[id - 1].classList.add("focusEffect");
      } else {
        elements[id - 1].classList.add("display");
        button[id - 1].classList.remove("focusEffect");
      }
    }
  }
}
