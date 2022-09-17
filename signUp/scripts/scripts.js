window.onload = async function () {
  // Get the modal
  let modal = document.getElementById("myModal");

  // Get the button that opens the modal
  let btn = document.getElementById("signup");

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "flex";
  };

  // When the user clicks on <span> (x), close the modal

  span.onclick = function () {
    modal.style.display = "none";
  };

  document.getElementById("submit").addEventListener("click", () =>{
      
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    
    console.log(username, password, email, dob)
    fetch("http://localhost:8080/apis/signUp.php", {

      method: "POST",
      body: new URLSearchParams({
        "username": username,
        "password": password,
        "email": email,
        "dob": dob
      })
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
      console.log("submit")
    debugger
  })
};
