const owner = document.querySelector(".owner-name");
let profilePics = document.querySelector(".pro-pics");
const profileSec = document.querySelector(".profile-sec");
const repositoryName = document.querySelector(".repos-container");
const description = document.querySelectorAll(".description");

const name = document.querySelector(".name");
async function repoEndPoint() {
  let response = await fetch("https://api.github.com/users/M0hamm0d/repos");
  let data = await response.json();
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
                    <div class="">
                      <img src="asset/images/svg/dropdown.svg" alt="" />
                    </div>
                  </button>
                </div>
              </li>
    `;
    repositoryName.insertAdjacentHTML("beforeend", html);
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
    // console.log(item.textContent);
  });
  //console.log(response, data, profilePics, profileSec);
}
repoEndPoint();
