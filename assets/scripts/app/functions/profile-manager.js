const profileManager = {
  name: null,
  photo: null,
  email: null,
  updated: false,
  load: () => {
    ["dtools_profile_name", "dtools_profile_photo", "dtools_profile_email"].map(
      (key) => {
        chrome.storage.local.get(key, function (value) {
          const val = value[key];
          const new_key = cleanKey(key, "profile_");

          profileManager[new_key] = val;
        });
      }
    );

    const { name, photo, email, updated } = profileManager;

    if (name && photo && email && !updated) {
      profileManager.updated = true;

      const profile_contaier = $(".profile-container");
      profile_contaier.css("display", "flex");
      profile_contaier.find(".photo").attr("src", photo);
      profile_contaier.find(".name").html(name);
      profile_contaier.find(".email").html(email);

      // Other personalized data
      const prefix = $("#prefix");
      const aa_email = $("#aa-email");

      const first_name = name.split(" ")[0].toLowerCase();

      if (prefix.val() == "Dtools" || $.trim(prefix.val()) == "") {
        prefix.val(first_name);
      }

      if ($.trim(aa_email.val()) == "") {
        aa_email.val(first_name + "@deriv.com");
      }
    }
  },
  init: () => {
    profileManager.load();

    setInterval(() => {
      profileManager.load();
    }, 10);
  },
};
