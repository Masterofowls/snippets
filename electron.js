// Electron Application Cheatsheet

const { app, BrowserWindow, ipcMain, dialog, Notification, Tray, Menu, globalShortcut } = require('electron');
const path = require('path');

// Main Window Creation
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Load content
  mainWindow.loadFile('index.html');
  // Or load URL: mainWindow.loadURL('https://example.com');
}

// App Lifecycle
app.whenReady().then(() => {
  createMainWindow();
  
  // macOS specific behavior
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// IPC Communication
ipcMain.handle('show-dialog', async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile', 'multiSelections']
  });
  return result.filePaths;
});

ipcMain.on('async-message', (event, arg) => {
  event.reply('async-reply', 'Message received');
});

// System Tray
let tray = null;
app.whenReady().then(() => {
  tray = new Tray('icon.png');
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show App', click: () => mainWindow.show() },
    { label: 'Quit', click: () => app.quit() }
  ]);
  tray.setContextMenu(contextMenu);
});

// Native Notifications
function showNotification() {
  new Notification({
    title: 'Notification',
    body: 'Message content'
  }).show();
}

// Global Shortcuts
app.whenReady().then(() => {
  globalShortcut.register('CommandOrControl+X', () => {
    console.log('Shortcut triggered');
  });
});

// Application Menu
const template = [
  {
    label: 'File',
    submenu: [
      { role: 'quit' }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
    ]
  }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

// Security Best Practices
function setupSecurityPolicies() {
  // Content Security Policy
  mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ["default-src 'self'"]
      }
    });
  });
  
  // Disable navigation
  mainWindow.webContents.on('will-navigate', (event) => {
    event.preventDefault();
  });
}

// Auto Updates
const { autoUpdater } = require('electron-updater');

autoUpdater.on('update-available', () => {
  mainWindow.webContents.send('update_available');
});

autoUpdater.on('update-downloaded', () => {
  mainWindow.webContents.send('update_downloaded');
});

// Check for updates
autoUpdater.checkForUpdatesAndNotify();

// Deep Linking
if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient('myapp', process.execPath, [path.resolve(process.argv[1])]);
  }
} else {
  app.setAsDefaultProtocolClient('myapp');
}

// Handle squirrel events for Windows
if (require('electron-squirrel-startup')) app.quit();

// Best Practices:
// 1. Always use contextIsolation and disable nodeIntegration
// 2. Implement proper error handling
// 3. Use IPC for communication between main and renderer
// 4. Implement proper security measures
// 5. Handle app lifecycle events
// 6. Implement auto-updates
// 7. Consider platform-specific features
// 8. Optimize performance and memory usage
