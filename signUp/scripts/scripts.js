window.onload = async function () {
  const signUpFields = document.querySelectorAll(".signupField");
  const signUpInputs = document.querySelectorAll(".signupField input");
  const signUpLabels = document.querySelectorAll(".signupField label");

  const checkEmail = (item) => {
    for (let i = 0; i < item.length; i++) {
      if (item[i] == "@" && i >= 3 && item.length - i > 5) {
        return true;
      }
    }
    return false;
  };

  const checkPassword = (item, i) => {
    item == "" || item.length < 8 || item.length > 15;
  };

  const validCredentials = (item, i) => {
    switch (i) {
      case 0:
        if (item.value.length < 5) {
          signUpFields[i].style.border = "2px solid red";
          signUpLabels[i].textContent = "At Least 5 Characters";
        } else {
          signUpFields[i].style.border = "2px solid #1d9bf0";
          signUpLabels[i].textContent = "Username Available";
        }
        break;
      case 1:
        if (!checkPassword(item.value)) {
          signUpFields[i].style.border = "2px solid red";
          signUpLabels[i].textContent =
            "**Password length must be between 8 and 15 Chars";
        } else {
          signUpFields[i].style.border = "2px solid #1d9bf0";
          signUpLabels[i].textContent = "Password Valid";
        }
        break;
      case 2:
        console.log(item.value);
        if (!checkEmail(item.value)) {
          signUpFields[i].style.border = "2px solid red";
          signUpLabels[i].textContent = "Please write a valid Email";
        } else {
          signUpFields[i].style.border = "2px solid #1d9bf0";
          signUpLabels[i].textContent = "Email Available";
        }
    }
  };

  signUpInputs.forEach((item, i) => {
    item.addEventListener("input", () => {
      signUpLabels[i].style.top = "0px";
      signUpLabels[i].style.fontSize = "12px";
      validCredentials(item, i);
    });
  });

  // *************
  // Get the modal
  let modal = document.getElementById("myModal");

  // Get the button that opens the modal
  let btn = document.querySelectorAll(".blue-btn");

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn[0].onclick = function () {
    modal.style.display = "flex";
  };

  // When the user clicks on <span> (x), close the modal

  span.onclick = function () {
    modal.style.display = "none";
  };

  document.getElementById("submit").addEventListener("click", () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;

    console.log(username, password, email, dob);
    fetch("http://localhost:8080/apis/signUp.php", {
      method: "POST",
      body: new URLSearchParams({
        username: username,
        password: password,
        email: email,
        dob: dob,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    console.log("submit");
  });

  // *************
  // SIGN IN MODEL
  let signInModal = document.getElementById("signInModal");

  let signInBtn = document.getElementById("signIn");

  let signInSpan = document.getElementsByClassName("close")[1];

  signInBtn.onclick = function () {
    signInModal.style.display = "flex";
  };

  signInSpan.onclick = function () {
    signInModal.style.display = "none";
  };

  document.getElementById("signInSubmit").addEventListener("click", () => {
    let username = document.getElementById("signIn-username").value;
    let password = document.getElementById("signIn-password").value;
    let email = document.getElementById("signIn-email").value;

    console.log(username, password, email, dob);
    fetch("http://localhost:8080/apis/signUp.php", {
      method: "POST",
      body: new URLSearchParams({
        username: username,
        password: password,
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    console.log("submit");
  });
};
