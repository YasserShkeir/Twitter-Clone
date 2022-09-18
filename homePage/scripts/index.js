window.onload = () => {
  /* LEFT COMPONENT */
  const leftSection = document.querySelector("#left-section");
  let leftSectionContent = `
  <div id="left-menu" class="flex flex-col">
    <div id="left-nav" class="flex flex-col">
      <div id="nav-menu" class="flex flex-col">
        <a id="twitter-icon" href="/homePage/#">
          <img src="./assets/icons/twitter-icon-white.png" />
        </a>
        <a href="/homePage/#">
          <button class="nav-menu-item">
            <div id="nav-home" class="nav-menu-container flex">
              <img
                src="./assets/icons/165_Birdhouse_Tweet_Twitter-512.webp"
              />
              <p>Home</p>
            </div>
          </button>
        </a>
        <a href="/homePage/editProfile.html">
          <button class="nav-menu-item">
            <div id="nav-profile" class="nav-menu-container flex">
              <img
                src="./assets/icons/5690239_avatar-profile-white-icon-png-transparent-png.png"
              />
              <p>Profile</p>
            </div>
          </button>
        </a>
      </div>
      <button id="nav-button" class="blue-btn">Tweet</button>
    </div>
    <div class="user-card">
      <a href="/homePage/editProfile.html">
        <img class="user-card-pfp curr-user-pfp" />
      </a>
      <div id="user-card-details">
        <div id="user-fname">Fname Lname</div>
        <div id="user-uname">@username</div>
      </div>
      <button id="user-card-menu">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 14C17.4696 14 16.9609 13.7893 16.5858 13.4142C16.2107 13.0391 16 12.5304 16 12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10C18.5304 10 19.0391 10.2107 19.4142 10.5858C19.7893 10.9609 20 11.4696 20 12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14ZM12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14Z"
            fill="#E7E9EA"
          />
        </svg>
      </button>
    </div>
  </div>
  <div class="line-vert"></div>`;

  leftSection.innerHTML += leftSectionContent;

  /* RIGHT COMPONENT */
  const rightSection = document.querySelector("#right-section");
  let rightSectionContent = `
  <div class="line-vert"></div>
  <div id="right-col" class="flex flex-col fixed">
    <div id="right-search" class="fixed">
      <div id="right-search-input" class="flex">
        <svg
          onclick="search()"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_136_725)">
            <path
              d="M17.5001 17.5001L13.7617 13.7551M15.8334 8.75008C15.8334 10.6287 15.0871 12.4304 13.7587 13.7588C12.4304 15.0871 10.6287 15.8334 8.75007 15.8334C6.87145 15.8334 5.06978 15.0871 3.74139 13.7588C2.41301 12.4304 1.66673 10.6287 1.66673 8.75008C1.66673 6.87146 2.41301 5.06979 3.74139 3.74141C5.06978 2.41303 6.87145 1.66675 8.75007 1.66675C10.6287 1.66675 12.4304 2.41303 13.7587 3.74141C15.0871 5.06979 15.8334 6.87146 15.8334 8.75008V8.75008Z"
              stroke="#71767B"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_136_725">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <input type="search" placeholder="Search Twitter" name="search" />
      </div>
    </div>
    <div id="right-follow" class="flex flex-col">
      <p>Who to follow</p>
      <div id="right-follow-sugg" class="flex flex-col">
        <div class="user-card">
          <a href="/homePage/editProfile.html">
            <img class="user-card-pfp" />
          </a>
          <div id="user-card-details">
            <div id="user-fname">Fname Lname</div>
            <div id="user-uname">@username</div>
          </div>
          <button class="flw-btn">Follow</button>
        </div>
      </div>
    </div>
  </div>`;

  rightSection.innerHTML += rightSectionContent;

  /* USER MANAGEMENT START */

  /* Profile Pic: */
  const currentUser = {
    name: "Fname Lname",
    pfp: "./assets/currentUser/pfp.png",
  };

  window.localStorage.setItem("currentUser", JSON.stringify(currentUser));

  const dummyUserPFP = document.querySelectorAll(".curr-user-pfp");
  let currentUserPFP = currentUser.pfp;

  console.log(dummyUserPFP);
  dummyUserPFP.forEach((item) => {
    item.src = currentUserPFP;
  });

  const image_input = document.querySelector("#changeImage");

  image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const uploaded_image = reader.result;
      console.log(uploaded_image);
      debugger;
      currentUser.pfp = uploaded_image;
      console.log(currentUser.pfp);
      debugger;
      dummyUserPFP.forEach((item) => {
        item.src = currentUser.pfp;
      });
    });
    reader.readAsDataURL(this.files[0]);
  });

  /* USER MANAGEMENT END */

  /* Edit Profile Section Start */

  /* EDIT PROFILE BTN START */
  const editForm = document.querySelector("#editForm");
  const editBtn = document.querySelector("#edit-button");
  const closeForm = document.querySelector(".close");

  const openFormTweet = () => {
    console.log(1111);
    editForm.style.display = "flex";
  };

  const closeFormTweet = () => {
    editForm.style.display = "none";
  };

  editBtn.addEventListener("click", openFormTweet);
  closeForm.addEventListener("click", closeFormTweet);

  /* EDIT PROFILE BTN END */

  /* Profile Section: Profile Tweet/Media/Likes Buttons */
  const profileNavButtons = document.querySelectorAll(".prof-nav-btn");
  /* Initial State */
  profileNavButtons[0].style.fontWeight = "600";
  profileNavButtons[0].style.color = "#fff";
  profileNavButtons[0].style.borderBottom = "5px solid #1d9bf0";

  profileNavButtons.forEach((item) => {
    item.addEventListener("click", (event) => {
      /* Reset styling to original */
      profileNavButtons.forEach((item) => {
        item.style.border = "none";
        item.style.color = "#71767b";
        item.style.fontWeight = "400";
      });
      /* Apply styling to chosen tab */
      item.style.fontWeight = "600";
      item.style.color = "#fff";
      item.style.borderBottom = "5px solid #1d9bf0";

      if (item === profileNavButtons[0]) {
        console.log("Tweets Section");
      }
      if (item === profileNavButtons[1]) {
        console.log("Media Section");
      }
      if (item === profileNavButtons[2]) {
        console.log("Likes Section");
      }
    });
  });

  /* Edit Profile Section End */
  let username = document.getElementById('username')
  let tweets =[]

  fetch("http://localhost:8080/apis/fetch_tweets.php",  {

    method: "POST",
    body: new URLSearchParams({
      "username": username,
    })
  }).then(response => response.json())
    .then(data => {
      for(d in data){

      }
    })
    .catch(err => console.log(err));
};
