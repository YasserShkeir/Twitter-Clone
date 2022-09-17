window.onload = () => {
  let navHome = document.querySelector("nav-home");
  let navProfile = document.querySelector("nav-profile");

  /* Edit Profile Section Start */

  /* Profile Section: Profile Tweet/Media/Likes Buttons */
  const profileNavButtons = document.querySelectorAll(".prof-nav-btn");

  profileNavButtons.forEach((item) => {
    item.addEventListener("click", (event) => {
      profileNavButtons.forEach((item) => {
        item.style.border = "none";
        item.style.color = "#71767b";
      });
      item.style.color = "#fff";
      item.style.borderBottom = "5px solid #1d9bf0";
    });
  });

  /* Edit Profile Section End */
};
