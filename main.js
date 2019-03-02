const {app, BrowserWindow} = require('electron');
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
	main.setMenu(null);
	main.openDevTools();
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
