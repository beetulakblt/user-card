let elUserCardGroup = $("#userCardGroup");

// Arrow Function
const createUserList = () => {
  $(elUserCardGroup).empty();
  userList.forEach((element) => {
    let userCard = `<div id="userCard" class="col-xl-3 col-lg-6 p-3">
    <div class="user-card animate__animated animate__fadeIn">
      <div class="user-card-left">
        <img src="image/card-bg.png" alt="" />
        <div id="showImageModal" class="user-image" data-id="${element.id}">
          <img src="${
            element.user_img ? element.user_img : "image/user.png"
          }" alt="" />
        </div>
      </div>

      <div class="user-card-right">
        <div class="button-group">
          <div class="delete-button">
            <button data-id="${element.id}">
              <i class="ri-delete-bin-line"></i>
            </button>
          </div>
          <div class="edit-button">
            <button data-id="${element.id}">
              <i class="ri-edit-line"></i>
            </button>
          </div>
        </div>
				<div class="user-info">
					<div class="user-name">${element.name + " " + element.username}</div>
        	<div class="user-mail">${element.email}</div>
				</div>
        
        <div class="user-address">
          <i class="ri-map-pin-line"></i>
          <p>${
            element.address.street +
            " " +
            element.address.suite +
            " " +
            element.address.city
          }</p>
        </div>
        <div class="user-phone">
          <i class="ri-phone-line"></i>
          <p>${element.phone}</p>
        </div>
        <div class="user-website">
          <i class="ri-earth-line"></i>
          <p>${element.website}</p>
        </div>
        <div class="user-company">
          <i class="ri-building-line"></i>
          <p>${element.company.name}</p>
        </div>
      </div>
    </div>
  </div>`;
    $(elUserCardGroup).append(userCard);
  });
};
