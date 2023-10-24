let register = () => {
  let userName = document.querySelector("#userName").value;
  let password = document.querySelector("#userPassword").value;
  let currentUser = {
    userName,
    password,
  };
  let allUsers = JSON.parse(localStorage.getItem("allUsers"))
    ? JSON.parse(localStorage.getItem("allUsers"))
    : [];

  //   Check if userName is already there in db
  let userFound = false;

  for (let i = 0; i < allUsers.length; i++) {
    let dbUser = allUsers[i];
    if (currentUser.userName == dbUser.userName) {
      userFound = true;
    }
  }

  if (userFound == true) {
    alert("Username already taken");
    return;
  }
  //   check ends

  allUsers.push(currentUser);

  localStorage.setItem("allUsers", JSON.stringify(allUsers));
};

let login = () => {
  let userName = document.querySelector("#userName").value;
  let password = document.querySelector("#userPassword").value;
  console.log(userName, password);
  let currentUser = {
    userName,
    password,
  };
  let allUsers = JSON.parse(localStorage.getItem("allUsers"))
    ? JSON.parse(localStorage.getItem("allUsers"))
    : [];

  let userFound = false;

  for (let i = 0; i < allUsers.length; i++) {
    let dbUser = allUsers[i];
    if (JSON.stringify(currentUser) == JSON.stringify(dbUser)) {
      userFound = true;
    }
  }

  if (userFound == true) {
    location.replace("home.html");
  } else {
    alert("Incorrect username or password");
  }
};
