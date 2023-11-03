const elModalUser = $("#userCrudModal");
const elImageUser = $("#userImageModal");
const $elButtonShowModal = $("#showUserModal");

$elButtonShowModal.on("click", function () {
  $(elModalUser).modal("show");
  formSubmitStatus = "insert";
});

$("body").on("click", "#showImageModal", function () {
  $(elImageUser).modal("show");
  $("#uploadedImage").attr("src", "./image/imageicon.png");
  updateUserImage($(this));
});

//search işlemi
const searchInput = document.querySelector("[data-search]");

$(searchInput).on("keyup", function () {
  let value = $(this).val().toLowerCase();
  $("#userCardGroup #userCard").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});
