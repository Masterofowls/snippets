// Electron Advanced Features Cheatsheet

// Window Management
const createCustomWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false, // Frameless window
    transparent: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });
};

// IPC Communication
// Main Process
ipcMain.handle('async-message', async (event, arg) => {
  const result = await someAsyncOperation(arg);
  return result;
});

ipcMain.on('sync-message', (event, arg) => {
  event.returnValue = someOperation(arg);
});

// Renderer Process (via preload)
window.api = {
  send: (channel, data) => ipcRenderer.send(channel, data),
  invoke: (channel, data) => ipcRenderer.invoke(channel, data),
  receive: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args))
};

// Native File Dialogs
const showFileDialog = async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile', 'multiSelections'],
    filters: [
      { name: 'Documents', extensions: ['pdf', 'doc'] }
    ]
  });
};

// System Tray
const createTray = () => {
  const tray = new Tray('icon.png');
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show App', click: () => mainWindow.show() },
    { label: 'Quit', click: () => app.quit() }
  ]);
  tray.setContextMenu(contextMenu);
};

// Custom Protocol
app.setAsDefaultProtocolClient('myapp');
app.on('open-url', (event, url) => {
  event.preventDefault();
  handleDeepLink(url);
});

// Screen Capture
const captureScreen = async () => {
  const sources = await desktopCapturer.getSources({
    types: ['window', 'screen']
  });
};

// Native Notifications
const showNotification = () => {
  new Notification({
    title: 'Notification',
    body: 'Message',
    icon: 'icon.png'
  }).show();
};

// Power Monitor
powerMonitor.on('suspend', () => {
  saveApplicationState();
});

powerMonitor.on('resume', () => {
  restoreApplicationState();
});

// Global Shortcuts
globalShortcut.register('CommandOrControl+X', () => {
  // Handle shortcut
});

// Auto Updater
const setupAutoUpdater = () => {
  autoUpdater.setFeedURL({
    url: 'https://update.server/releases'
  });
  
  autoUpdater.on('update-downloaded', () => {
    autoUpdater.quitAndInstall();
  });
};

// Session Management
const configureSession = () => {
  const ses = session.defaultSession;
  ses.setProxy({
    proxyRules: 'socks5://proxy.example.com:1080'
  });
  
  ses.clearCache();
  ses.clearStorageData();
};

// Security Best Practices
const securityBestPractices = {
  windowConfig: {
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      enableRemoteModule: false
    }
  },
  CSP: {
    policy: "default-src 'self'; script-src 'self'"
  }
};

// Process Communication
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  app.quit();
});

// Crash Reporter
crashReporter.start({
  productName: 'YourApp',
  companyName: 'YourCompany',
  submitURL: 'https://crash-reporter.example.com'
});

// Native Module Integration
const ffi = require('ffi-napi');
const nativeFunction = ffi.Library('./native', {
  'processData': ['void', ['string']]
});

// Best Practices:
// 1. Always use contextIsolation and disable nodeIntegration
// 2. Implement proper error handling
// 3. Use IPC for secure main/renderer communication
// 4. Implement proper security measures
// 5. Handle app lifecycle events properly
// 6. Use auto-updater for updates
// 7. Consider platform-specific features
// 8. Optimize performance and memory usage
// 9. Implement proper logging
// 10. Handle deep linking securely
