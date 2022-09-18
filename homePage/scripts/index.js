window.onload = () => {
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
  const imgChangeBtn = document.querySelector("#changeImage");
  const changeImage = () => {};

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
        console.log(111);
      }
    });
  });

  /* Edit Profile Section End */
};
