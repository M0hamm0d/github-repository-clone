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
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        class="octicon octicon-star d-inline-block mr-2"
                      >
                        <path
                          d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
                        ></path>
                      </svg>
                      <p>star</p>
                    </div>
                    <div class="">
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        class="octicon octicon-triangle-down"
                      >
                        <path
                          d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"
                        ></path>
                      </svg>
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
