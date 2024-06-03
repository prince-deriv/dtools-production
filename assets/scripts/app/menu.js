const window_sizes = {
  menu: [300, 280],
  endpoint: [300, 350],
  "app-id-generator": [400, 420],
  "market-controller": [450, 260],
};

const menu = [
  {
    icon: "hashtag",
    title: "App ID Generator",
    target: "app-id-generator",
  },
  {
    icon: "hand-point-up",
    title: "Endpoint Manager",
    target: "endpoint",
  },
  {
    icon: "user",
    title: "Add Account",
    target: "add-account",
  },
  {
    icon: "coins",
    title: "Account Top-Up",
    target: "top-up",
  },
  {
    icon: "paw",
    title: "Cats or Dogs?",
    target: "cat-dog",
  },

  {
    icon: "balance-scale-right",
    title: "Market Controller",
    target: "market-controller",
  },
  // {
  //   icon: "flag",
  //   title: "Country & Residence",
  //   target: "country-code",
  // },
  {
    icon: "globe",
    title: "Deriv Static",
    target: "deriv-static",
  },
  {
    icon: "fighter-jet",
    title: "Quick Login",
    target: "quick-login",
  },
  // {
  //   icon: "road",
  //   title: "Release Manager",
  //   target: "release-manager",
  // },
  {
    icon: "copy",
    title: "File Merger",
    target: "git-file-merger",
  },
  {
    icon: "ban",
    title: "Anti-Phishing",
    target: "anti-phish",
    is_new: true,
  },
  {
    icon: "ban",
    title: "LastPass Blocker",
    target: "lastpass-blocker",
    is_new: true,
  },
  // {
  //   icon: "dizzy",
  //   title: "Proxy Manager",
  //   target: "proxy-manager",
  // },
];

const renderMenu = () => {
  let content = "";
  menu.forEach((m) => {
    content += `<div class="box-item router-link" data-target="${m.target}">
            <i class="fas fa-${m.icon} icon"></i>
            <span class="text">${m.title}</span>
            ${m.is_new ? '<span class="new-item">new</span>' : ""}
          </div>`;
  });

  return content;
};
