const owner = document.querySelector(".owner-name");
let profilePics = document.querySelector(".pro-pics");
const profileSec = document.querySelector(".profile-sec");
const repositoryName = document.querySelector(".repos-container");
const reposNum = document.querySelector(".repos-num");
const description = document.querySelectorAll(".description");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const name = document.querySelector(".name");
const createRepo = document.querySelector(".create-repo");
const repoDropdown = document.querySelector(".repo-dropdown");
const sort = document.querySelector(".sort");
const sortDropdown = document.querySelector(".sort-dropdown");
const lang = document.querySelector(".lang-filter");
const langDropdown = document.querySelector(".language-dropdown");
const type = document.querySelector(".type");
const typeDropdown = document.querySelector(".type-dropdown");

let url =
  "https://api.github.com/users/M0hamm0d/repos?sort=created&direction=desc";

sort.addEventListener("click", () => {
  sortDropdown.classList.toggle("active");
});
type.addEventListener("click", () => {
  typeDropdown.classList.toggle("active");
});
lang.addEventListener("click", () => {
  langDropdown.classList.toggle("active");
});
createRepo.addEventListener("click", () => {
  repoDropdown.classList.toggle("active");
});
async function repoEndPoint() {
  let response = await fetch(url);
  const linkHeader = response.headers.get("link");
  let linkHeaderPrev = linkHeader.split(",")[0].includes("prev");
  let linkHeaderNext = linkHeader.split(",")[0].includes("next");

  prevBtn.addEventListener("click", () => {
    if (linkHeaderPrev) {
      repositoryName.innerHTML = "";
      url = linkHeader.split(",")[0].split(";")[0].slice(1, -1);
      prevBtn.style.color = "black";
      nextBtn.style.color = "#0969da";
      repoEndPoint();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (linkHeaderNext) {
      repositoryName.innerHTML = "";
      url = linkHeader.split(",")[0].split(";")[0].slice(1, -1);
      prevBtn.style.color = "#0969da";
      nextBtn.style.color = "black";
      repoEndPoint();
    }
  });

  let data = await response.json();
  //console.log(data);

  owner.textContent = data[0].owner.login;
  name.textContent = data[0].owner.login;
  profilePics.src = data[0].owner.avatar_url;
  profileSec.src = data[0].owner.avatar_url;
  repositoryName.innerHTML = "";
  data.forEach((item) => {
    let html = `
    <li>
                <div class="">
                  <div class="git-title">
                    <h3>
                      <a href="#">${item.name}</a>
                    </h3>
                    <p class="visibility">${item.visibility}</p>
                  </div>
                  <p class="description">
                    ${item.description === null ? "" : item.description}
                  </p>
                  <div class="language">
                    <div class="lang">
                      <div class="lang-color"></div>
                      <p class="prog-lang">${
                        item.language === null ? "HTML" : item.language
                      }</p>
                    </div>
                    <div class="update">Updated 17 hours ago</div>
                  </div>
                </div>
                <div class="">
                  <button class="stars">
                    <div class="star-container">
                      <img src="asset/images/svg/star.svg" alt="" class="star-logo"/>
                      <p class="star-text">Star</p>
                    </div>
                    <div class="stars-dropdown">
                      <img src="asset/images/svg/dropdown.svg" alt="" />
                      <div class="dropdown">
                        <div class="title">
                          <h4>List</h4>
                          <img src="asset/images/svg/cancel.svg" alt="" />
                        </div>
                        <ul class="select-list">
                          <li>
                            <input type="checkbox" name="" id="">
                            <span>🔮 Future ideas</span>
                          </li>
                          <li>
                            <input type="checkbox" name="" id="">
                            <span>🚀 My stack</span>
                          </li>
                          <li>
                            <input type="checkbox" name="" id="">
                            <span>✨ Inspiration</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </button>
                </div>
              </li>
    `;
    repositoryName.insertAdjacentHTML("beforeend", html);
  });
  const dropdown = document.querySelectorAll(".dropdown");
  const starsDropdown = document.querySelectorAll(".stars-dropdown");
  const main = document.querySelector(".main");
  const starContainer = document.querySelectorAll(".star-container");
  const starText = document.querySelectorAll(".star-text");
  const starLogo = document.querySelectorAll(".star-logo");
  starContainer.forEach((item, i) => {
    item.addEventListener("click", () => {
      if (starText[i].textContent === "Star") {
        starText[i].textContent = "Starred";
        starLogo[i].src = "asset/images/svg/starred.svg";
      } else {
        starText[i].textContent = "Star";
        starLogo[i].src = "asset/images/svg/star.svg";
      }
      console.log(starLogo[i].src);
    });
  });

  starsDropdown.forEach((item, i) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
      dropdown[i].classList.toggle("active");
    });
    //console.log(item);
  });

  const programmingLang = document.querySelectorAll(".prog-lang");
  const langColor = document.querySelectorAll(".lang-color");
  programmingLang.forEach((item, i) => {
    if (item.textContent === "JavaScript") {
      langColor[i].style.backgroundColor = "#f1e05a";
    }
    if (item.textContent === "CSS") {
      langColor[i].style.backgroundColor = "#563d7c";
    }
  });
}
repoEndPoint();
