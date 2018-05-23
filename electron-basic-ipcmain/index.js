const {app, BrowserWindow, ipcMain} = require('electron')

app.on('ready', () => {
    const win = new BrowserWindow()
    win.loadURL(`file://${__dirname}/index.html`)
    win.webContents.openDevTools()
})

ipcMain.on('send_async_channel', (e, msg) => {
    console.log(msg)
    e.sender.send('reply_async_channel', 'reply_async_message')
})