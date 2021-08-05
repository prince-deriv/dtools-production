const hotkeys = {
  97: {
    action: "menu",
    key: "app-id-generator",
  },
};

const loadHotkeys = () => {
  $(document).keypress(function (event) {
    const key = event.charCode;

    const bindings = hotkeys[key];

    if (bindings) {
      const { action, key } = bindings;

      action == "menu" ? selectMenu(key) : inPageActions(key);
    }
  });
};

const menuActions = (key) => {
  selectMenu(key);
  pageHandler(key);
};

const inPageActions = (key) => {
  switch (action) {
    case "":
      {
      }
      break;
  }
};
