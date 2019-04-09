const {app, BrowserWindow, Menu} = require('electron');
let windows = new Map();

function createWindow(name, page, options)
{
	let _options = options || {width: 600, height: 600};
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
		            label: 'Import Spoiler Log Folder',
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
	    }
	]));
	main.openDevTools();
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
