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

  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var dob = document.getElementById("dob");
};
