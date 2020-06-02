const {app, BrowserWindow, Menu} = require('electron');
let windows = new Map();

function createWindow(name, page, options)
{
	let _options = options || {width: 625, height: 800, webPreferences: {nodeIntegration: true}};
	_options.show = false;

	let window = new BrowserWindow(_options);
	window.once('ready-to-show', () => {
		window.show();
	});

	window.loadFile(page);

	windows.set(name, window);
	window.on('closed', () => {
		windows.delete(name);
	});

	return window;
}

app.on('ready', () => {
	let main = createWindow('main', 'index.html');
	main.setMenu(Menu.buildFromTemplate([
		{
	        label: 'File',
	        submenu: [
				{
		            label: 'Open...',
                    accelerator: 'CmdOrCtrl+O',
		            click: function(){ main.webContents.send('open'); },
		        },
				{
		            label: 'Save...',
                    accelerator: 'CmdOrCtrl+S',
		            click: function(){ main.webContents.send('save'); },
		        },
				{ type: 'separator' },
				{
		            label: 'Import Spoilers',
                    accelerator: 'CmdOrCtrl+P',
		            click: function(){ main.webContents.send('import-spoiler'); },
		        },
	        ]
	    },
		{
	        label: 'Edit',
	        submenu: [
				{
		            label: 'Undo...',
                    accelerator: 'CmdOrCtrl+Z',
		            click: function(){ main.webContents.send('undo'); },
		        },
				{
		            label: 'Reset',
		            click: function(){ main.webContents.send('reset'); },
		        },
	        ]
	    },
		{
	        label: 'Select Game...',
	        submenu: [
				{
		            label: 'La-Mulana',
		            click: function(){ main.loadURL(`file://${__dirname}/lm1.html`); },
		        },
				{
		            label: 'La-Mulana 2',
		            click: function(){ main.loadURL(`file://${__dirname}/lm2.html`); },
		        },
	        ]
	    },
		{
	        label: 'Help',
	        submenu: [
				{
		            label: 'Open Devtools',
		            click: function(){ main.openDevTools('undocked'); },
		        },
	        ]
	    },
	]));
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
