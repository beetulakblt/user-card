let userList;
//
async function getUserList() {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => (userList = json));
  await setDataLocalStorage();
  await createUserList();
}

function getDataLocalStorage() {
  let storageData = window.localStorage.getItem("userList");

  if (storageData && storageData != null) {
    userList = JSON.parse(storageData);
    createUserList();
  } else {
    getUserList();
  }
}

function setDataLocalStorage() {
  localStorage.setItem("userList", JSON.stringify(userList));
}

getDataLocalStorage();
