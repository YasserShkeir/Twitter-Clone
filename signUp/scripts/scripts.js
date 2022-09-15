window.onload = function () {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("signup");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "flex";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let dob = document.getElementById("dob");

  let data = {
    username: username,
    password: password,
    email: email,
    phone: phone,
    dob: dob,
  };

  fetch("", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
};
