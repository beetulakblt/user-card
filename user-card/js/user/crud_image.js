const dropArea = $("#dropArea");

// dropArea üzerine bir dosya sürüklendiğinde çalışacak işlev
dropArea.on("dragover", function (e) {
  e.preventDefault();
  dropArea.addClass("dragover");
});

dropArea.on("dragleave", function (e) {
  e.preventDefault();
  dropArea.removeClass("dragover");
});

dropArea.on("drop", function (e) {
  e.preventDefault();
  dropArea.removeClass("dragover");

  const files = e.originalEvent.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    uploadImage(file);
  }
});

// Dosya seçmek için tıklama işlemi
dropArea.on("click", function () {
  const input = $("<input type='file' accept='image/*' style='display:none;'>");
  input.on("change", function (e) {
    const file = e.target.files[0];
    uploadImage(file);
  });

  input.click();
});

function uploadImage(file) {
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const image = $("#uploadedImage");
      image.attr("src", e.target.result);
      elImageUser.modal("show");
      userImageBase64 = e.target.result;
    };

    reader.readAsDataURL(file);
  } else {
    alert("Lütfen bir resim dosyası seçin.");
  }
}
