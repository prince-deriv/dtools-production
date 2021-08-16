# DTools
A simple google chrome extension made for Deriv FE Team for easier and faster development experience.



## Installation
In order to work on your own version of the Dtools  **fork this project**.

You will need to perform the following on your development machine:

1. Run `npm install` to install the modules
2. Run `npm run dev` to run local watchers and compilers
3. Build something amazing and useful :)

## Local Development
In order to run the extension on local environment you need to change the settings in the extension files. 

If you are only making changes on popup:
1. Under `assets/scripts/popup.js` change `env` variable to `local`

If you are changing both popup and background scripts

1. Open `assets/scripts/popup.js`,`assets/scripts/content.js`,`assets/scripts/popup.js` and change `env` variable to `local`

Then load the extension package to google chrome after the change. 
