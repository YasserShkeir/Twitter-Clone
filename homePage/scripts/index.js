window.onload = () => {
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
};
