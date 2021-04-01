const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow } = electron;

let mainWindow

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

// Listen for app to be ready
app.on('ready', () => {
    // Create new window
    mainWindow = new BrowserWindow({
    })

    // Load HTML into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './app/index.html'),
        protocol: 'file:',
        slashes: true
    }))
})