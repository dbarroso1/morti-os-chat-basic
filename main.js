const Readline = require('readline');
const RiveScript = require('rivescript');
const chalk = require('chalk');
const log = console.log;

log(chalk.green('#====================================================#'))
log('Morti-OS: RTC Module has started'+ (chalk.green(' Succesfully')))
log('Morti is awake! Say Hi!')
log(chalk.green('#====================================================#'))

// RiveScript Loader
const bot = new RiveScript();
const rl = Readline.createInterface({ input: process.stdin, output: process.stdout });
bot.loadFile([
    './training data/begin.rive', 
    './training data/greetings.rive', 
    './training data/personality.rive', 
    './training data/training_data.rive'
],
    function () { bot.sortReplies(); ask(); },
    function (error) { log("Error: " + error) });

function ask() {
    rl.question('[You] ', (message) => {
        var reply = bot.reply('local-user', message);
        log(chalk.blue('[Morti] ') + chalk.white(reply));
        ask();
    })
}
/*
 Electron

 const { app, BrowserWindow } = require('electron')
 function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 925,
        height: 900,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/views/assets/logo.png`
    })
    win.loadURL(`file://${__dirname}/view/index.html`)
    win.on('closed', function () {
        win = null
    })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // macOS specific close process
    if (win === null) {
        createWindow()
    }
})
*/