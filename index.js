const owner = document.querySelector(".owner-name");
let profilePics = document.querySelector(".pro-pics");
const profileSec = document.querySelector(".profile-sec");
const repositoryName = document.querySelector(".repos-container");
const reposNum = document.querySelector(".repos-num");
const description = document.querySelectorAll(".description");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const name = document.querySelector(".name");
let url =
  "https://api.github.com/users/M0hamm0d/repos?sort=created&direction=desc";
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
  console.log(data);

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
                    ${item.description == null ? "" : item.description}
                  </p>
                  <div class="language">
                    <div class="lang">
                      <div class="lang-color"></div>
                      <p class="prog-lang">${item.language}</p>
                    </div>
                    <div class="update">Updated 17 hours ago</div>
                  </div>
                </div>
                <div class="">
                  <button class="stars">
                    <div class="">
                      <img src="asset/images/svg/star.svg" alt="" />
                      <p>Star</p>
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

  main.addEventListener("click", () => {
    dropdown.forEach((item) => {
      // item.style.display === "flex"
      //   ? (item.style.display = "none")
      //   : (item.style.display = "");
      //console.log(item);
    });
  });

  starsDropdown.forEach((item, i) => {
    item.addEventListener("click", () => {
      dropdown.forEach((item) => {
        item.classList.remove("active");
        dropdown[i].classList.add("active");
      });
      //console.log(dropdown[i]);
      starsDropdown.forEach((data) => {
        //console.log(data);
        data.classList.remove("active");
      });
      //item.classList.toggle("active");
      console.log(item);
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
