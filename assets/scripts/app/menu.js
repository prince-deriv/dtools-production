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
    icon: "link",
    title: "Quick Links",
    target: "quick-links",
  },
  {
    icon: "balance-scale-right",
    title: "Market Controller",
    target: "market-controller",
  },
  // {
  //   icon: "dizzy",
  //   title: "Proxy Manager",
  //   target: "proxy-manager",
  // },
];

const renderMenu = () => {
  let content = "";
  menu.map((m) => {
    content += `<div class="box-item router-link" data-target="${m.target}">
            <i class="fas fa-${m.icon} icon"></i>
            <span class="text">${m.title}</span>
          </div>`;
  });

  return content;
};
