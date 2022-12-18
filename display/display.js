let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let registerUserUsername = document.getElementById("register-user-username");
let registerUserFirstname = document.getElementById("register-user-firstname");
let registerUserLastname = document.getElementById("register-user-lastname");
let registerUserEmail = document.getElementById("register-user-email");
let registerUserPassowrd = document.getElementById("register-user-passowrd");
let registerUserAvatar = document.getElementById("register-user-avatar");
let registerUserLevel = document.getElementById("register-user-level");
let registerUserButton = document.getElementById("register-user");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");

registerUserButton.addEventListener("click", async function () {
    let userName = registerUserUsername.value;
    let avatar = registerUserAvatar.value
    let Price = registerUserLevel.value;
  
    let userObject = {
      username: userName,
      avatar: avatar,
      Price: Price,
    };
  
    try {
      let res = await fetch('http://localhost:3000/register_user', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObject),
      });
  
      let data = await res.json();
      console.log(data)
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  });
