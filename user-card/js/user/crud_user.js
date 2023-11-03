let formSubmitStatus = "insert";
let new_user_obj;
let updateUserID, updateUserIndex;
let updateUserImgId, updateUserImgIndex, userImageBase64;
// User Silme İşlemi

$("body").on("click", ".delete-button", function () {
  let userID = $(this).children().data("id");
  deleteUser(userID);
});

function deleteUser(id) {
  userList = userList.filter((user) => {
    return user.id !== id;
  });
  setDataLocalStorage();
  createUserList();
}
$("#imageCrudBtn").on("click", function () {
  setUserImageForObj();
});
// User Ekleme İşlemi
$("#userCrudBtn").on("click", function () {
  getFormValue();
});
//
// User Güncelleme
$("body").on("click", ".edit-button", function () {
  updateUserID = $(this).children().data("id");
  formSubmitStatus = "update";
  updateUserIndex = userList.findIndex((user) => user.id === updateUserID);
  setInpuValue();
  $(elModalUser).modal("show");
});
function setInpuValue() {
  $("#inputName").val(userList[updateUserIndex].name);
  $("#inputUsername").val(userList[updateUserIndex].username);
  $("#inputEmail").val(userList[updateUserIndex].email);
  $("#inputNumber").val(userList[updateUserIndex].phone);
  $("#inputWebsite").val(userList[updateUserIndex].website);
  $("#inputCompany").val(userList[updateUserIndex].company.name);
  $("#inputAddress").val(userList[updateUserIndex].address.street);
  $("#inputCity").val(userList[updateUserIndex].address.city);
  $("inputState").val(userList[updateUserIndex].address.suite);
  $("#inputZip").val(userList[updateUserIndex].address.zipcode);
}
//

function getFormValue() {
  let n_image = $("").val();
  let n_username = $("#inputName").val();
  let n_usersurname = $("#inputUsername").val();
  let n_usermail = $("#inputEmail").val();
  let n_phone = $("#inputNumber").val();
  let n_web = $("#inputWebsite").val();
  let n_company = $("#inputCompany").val();
  let n_address = $("#inputAddress").val();
  let n_city = $("#inputCity").val();
  let n_state = $("#inputState").val();
  let n_zip = $("#inputZip").val();

  setUserObj(
    n_username,
    n_usersurname,
    n_usermail,
    n_phone,
    n_web,
    n_company,
    n_address,
    n_city,
    n_state,
    n_zip
  );
}

function setUserObj(
  n_username,
  n_usersurname,
  n_usermail,
  n_phone,
  n_web,
  n_company,
  n_address,
  n_city,
  n_state,
  n_zip
) {
  if (formSubmitStatus == "insert") {
    new_user_obj = {
      id: createRandomId(),
      name: n_username,
      username: n_usersurname,
      email: n_usermail,
      user_img: "",
      address: {
        street: n_address,
        suite: n_state,
        city: n_city,
        zipcode: n_zip,
      },
      phone: n_phone,
      website: n_web,
      company: {
        name: n_company,
      },
    };
    userList.push(new_user_obj);
  }
  if (formSubmitStatus == "update") {
    userList[updateUserIndex].name = n_username;
    userList[updateUserIndex].username = n_usersurname;
    userList[updateUserIndex].email = n_usermail;
    userList[updateUserIndex].phone = n_phone;
    userList[updateUserIndex].website = n_web;
    userList[updateUserIndex].company.name = n_company;
    userList[updateUserIndex].address.street = n_address;
    userList[updateUserIndex].address.city = n_city;
    userList[updateUserIndex].address.suite = n_state;
    userList[updateUserIndex].address.zipcode = n_zip;
  }
  setDataLocalStorage();
  createUserList();
  $(elModalUser).modal("hide");
}

//update ımage
function updateUserImage(el) {
  updateUserImgId = $(el).data("id");
  updateUserImgIndex = userList.findIndex(
    (user) => user.id === updateUserImgId
  );
}

function setUserImageForObj() {
  userList[updateUserImgIndex].user_img = userImageBase64;
  setDataLocalStorage();
  createUserList();
  $(elImageUser).modal("hide");
}

function createRandomId() {
  let random_id = 100 + ~~(Math.random() * 100);
  let uniq_status = userList.some((user) => user.id == random_id);
  if (!uniq_status) return random_id;
  else createRandomId();
}
