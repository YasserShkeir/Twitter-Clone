window.onload = () => {
  let navHome = document.querySelector("nav-home");
  let navProfile = document.querySelector("nav-profile");

  function getCurrentURL() {
    return window.location.href;
  }

  // Example
  const url = getCurrentURL();

  console.log(url);
};
