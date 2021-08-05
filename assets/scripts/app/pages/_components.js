const page_name = window.name;

const page_header = `
    <div class="header">
        <img class="logo" src="${url}/assets/images/icon.png" />
        <span class="app-name" id="app-name"></span>
        ${
          page_name == ""
            ? `<span class="update-icon router-link" data-target="changelog">
          <i class="fas fa-bolt icon"></i>
        </span>`
            : ""
        }
    </div>`;

const page_profile = `
   <div class="profile-container">
        <img class="photo" />
        <div class="details">
          <span class="name"></span>
          <span class="email"></span>
        </div>
   </div>
`;

const page_back_button = `<i class="fas fa-arrow-left icon back-btn"></i>`;