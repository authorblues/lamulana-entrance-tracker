const Direction =
{
	LEFT: 'left',
	RIGHT: 'right',
	UP: 'up',
	DOWN: 'down',
};

const DIRECTION_MATCH = new Map(
[
	[Direction.LEFT, Direction.RIGHT],
	[Direction.RIGHT, Direction.LEFT],
	[Direction.UP, Direction.DOWN],
	[Direction.DOWN, Direction.UP],
]);

const ENTRANCES =
[
	{"name": "surface-main", "display": "Surface Main (I-5)", "oneway": false, "field": "Surface", "type": Direction.RIGHT},
	{"name": "surface-hidden-L", "display": "Surface Hidden Ladder Left (I-3)", "oneway": false, "field": "Surface-Hidden", "type": Direction.DOWN},
	{"name": "surface-hidden-R", "display": "Surface Hidden Ladder Right (J-3)", "oneway": false, "field": "Surface-Hidden", "type": Direction.DOWN},
	{"name": "guidance-main", "display": "Guidance Main Entrance (C-1)", "oneway": false, "field": "Guidance", "type": Direction.LEFT},
	{"name": "guidance-bottom-L", "display": "Guidance Bottom Left (A-6)", "oneway": false, "field": "Guidance", "type": Direction.DOWN},
	{"name": "guidance-bottom-R", "display": "Guidance Bottom Right (D-5)", "oneway": false, "field": "Guidance", "type": Direction.DOWN},
	{"name": "guidance-top-R", "display": "Guidance Top Right (G-2)", "oneway": false, "field": "Guidance", "type": Direction.UP},
	{"name": "mausoleum-main-top-L", "display": "Mausoleum Main Top Left (B-1)", "oneway": false, "field": "Mausoleum", "type": Direction.UP},
	{"name": "mausoleum-bottom-L", "display": "Mausoleum Bottom Left (B-5)", "oneway": false, "field": "Mausoleum", "type": Direction.LEFT},
	{"name": "mausoleum-bottom-R", "display": "Mausoleum Right (H-4)", "oneway": false, "field": "Mausoleum", "type": Direction.DOWN},
	{"name": "sun-main-top", "display": "Sun Main Top (B-1)", "oneway": false, "field": "Sun", "type": Direction.UP},
	{"name": "sun-L", "display": "Sun Left Buer (A-2)", "oneway": false, "field": "Sun", "type": Direction.LEFT},
	{"name": "spring-main", "display": "Spring Main Left (A-6)", "oneway": false, "field": "Spring", "type": Direction.DOWN},
	{"name": "inferno-main-R", "display": "Inferno Main Right (G-2)", "oneway": false, "field": "Inferno", "type": Direction.RIGHT},
	{"name": "inferno-top", "display": "Inferno Top (E-1)", "oneway": false, "field": "Inferno", "type": Direction.UP},
	{"name": "inferno-lava-pit", "display": "Inferno Lava Pit", "oneway": true, "field": "Inferno", "type": Direction.DOWN},
	{"name": "inferno-lamia-R", "display": "Inferno Echidna Right (C-1)", "oneway": false, "field": "Inferno-Lamia", "type": Direction.UP},
	{"name": "extinction-mother", "display": "Extinction Mother Ladder (H-5)", "oneway": false, "field": "Extinction", "type": Direction.UP},
	{"name": "extinction-magatama-R", "display": "Extinction Magatama Right (F-1)", "oneway": false, "field": "Extinction-Magatama", "type": Direction.UP},
	{"name": "extinction-palenque", "display": "Extinction Viy Ladder to Palenque", "oneway": false, "field": "Extinction-Palenque", "type": Direction.UP},
	{"name": "twin-maze-L", "display": "Twin Main Top Left (A-2)", "oneway": false, "field": "Twin", "type": Direction.UP},
	{"name": "twin-mother-top", "display": "Twin Mother Top Center (G-1)", "oneway": false, "field": "Twin", "type": Direction.UP},
	{"name": "twin-skull-top", "display": "Twin Skull Top Right (I-1)", "oneway": false, "field": "Twin", "type": Direction.UP},
	{"name": "twin-bottom-L", "display": "Twin Bottom Left Ladder (B-5)", "oneway": false, "field": "Twin", "type": Direction.DOWN},
	{"name": "twin-bottom-R", "display": "Twin Elevator Bottom Right (I-5)", "oneway": false, "field": "Twin", "type": Direction.DOWN},
	{"name": "endless-main-floor-1", "display": "Endless Main Entrance (D-1)", "oneway": false, "field": "Endless", "type": Direction.RIGHT},
	{"name": "endless-phil-floor-2", "display": "Endless Philosopher Ladder (E-2)", "oneway": false, "field": "Endless", "type": Direction.UP},
	{"name": "endless-bottom-floor-5", "display": "Endless Bottom Ladder (B-5)", "oneway": false, "field": "Endless", "type": Direction.DOWN},
	{"name": "mother-side-crush", "display": "Mother Side Room Crush (A-3)", "oneway": false, "field": "Mother-Side-A", "type": Direction.DOWN},
	{"name": "mother-side-smash", "display": "Mother Side Room Smash (F-3)", "oneway": false, "field": "Mother-Side-F", "type": Direction.DOWN},
	{"name": "mother-main-top", "display": "Mother Top Ladder (C-1)", "oneway": false, "field": "Mother", "type": Direction.UP},
	{"name": "mother-bottom", "display": "Mother Bottom Ladder (E-6)", "oneway": false, "field": "Mother", "type": Direction.DOWN},
	{"name": "illusion-eden", "display": "Illusion Eden Bottom Right (G-6)", "oneway": false, "field": "Illusion", "type": Direction.DOWN},
	{"name": "illusion-bottom-L", "display": "Illusion Bottom Left (C-5)", "oneway": false, "field": "Illusion", "type": Direction.DOWN},
	{"name": "illusion-R", "display": "Illusion Right above Chi You (D-3)", "oneway": false, "field": "Illusion", "type": Direction.RIGHT},
	{"name": "illusion-child-R", "display": "Illusion Right Dancing Child (F-2)", "oneway": false, "field": "Illusion", "type": Direction.RIGHT},
	{"name": "graveyard-main-top", "display": "Graveyard Main Top (B-1)", "oneway": false, "field": "Graveyard", "type": Direction.UP},
	{"name": "graveyard-bottom-L", "display": "Graveyard Bottom Left (B-5)", "oneway": false, "field": "Graveyard", "type": Direction.LEFT},
	{"name": "graveyard-grail", "display": "Graveyard Grail Room (D-2)", "oneway": false, "field": "Graveyard", "type": Direction.RIGHT},
	{"name": "graveyard-R-top", "display": "Graveyard Right Top (G-4)", "oneway": false, "field": "Graveyard", "type": Direction.UP},
	{"name": "graveyard-R-bottom", "display": "Graveyard Right Bottom (E-5)", "oneway": false, "field": "Graveyard", "type": Direction.DOWN},
	{"name": "moonlight-top", "display": "Moonlight Top (B-1)", "oneway": false, "field": "Moonlight", "type": Direction.UP},
	{"name": "moonlight-top-R", "display": "Moonlight Top Right (D-2)", "oneway": false, "field": "Moonlight", "type": Direction.UP},
	{"name": "moonlight-bottom", "display": "Moonlight Bottom Left Blue (B-5)", "oneway": false, "field": "Moonlight", "type": Direction.LEFT},
	{"name": "goddess-top-L", "display": "Goddess Tower Top Left (C-1)", "oneway": false, "field": "Goddess", "type": Direction.LEFT},
	{"name": "goddess-top-R", "display": "Goddess Tower Top Right (E-1)", "oneway": false, "field": "Goddess", "type": Direction.DOWN},
	{"name": "goddess-pipes-top", "display": "Goddess Pipes Top (A-2)", "oneway": false, "field": "Goddess", "type": Direction.UP},
	{"name": "goddess-secret", "display": "Goddess Tower Secret Entrance (A-2)", "oneway": true, "field": "Goddess", "type": Direction.UP},
	{"name": "goddess-bottom-left", "display": "Goddess Bottom Left (B-7)", "oneway": false, "field": "Goddess", "type": Direction.LEFT},
	{"name": "ruin-bottom-right", "display": "Ruin Main/Bottom Right (G-5)", "oneway": false, "field": "Ruin", "type": Direction.RIGHT},
	{"name": "ruin-far-L", "display": "Ruin Far Left (A-3)", "oneway": false, "field": "Ruin", "type": Direction.LEFT},
	{"name": "ruin-top-R", "display": "Ruin Top Right (G-2)", "oneway": false, "field": "Ruin-Middle", "type": Direction.RIGHT},
	{"name": "birth-main-grail", "display": "Birth Main Grail Entrance (A-3)", "oneway": false, "field": "Birth", "type": Direction.DOWN},
	{"name": "birth-skanda-R", "display": "Birth Skanda Door (F-5)", "oneway": false, "field": "Birth", "type": Direction.RIGHT},
	{"name": "birth-side-top", "display": "Birth* Top Ladder (D-1)", "oneway": false, "field": "Birth-Side", "type": Direction.UP},
	{"name": "birth-side-skanda-L", "display": "Birth* Door to Skanda (H-4)", "oneway": false, "field": "Birth-Side", "type": Direction.LEFT},
	{"name": "dimensional-corr", "display": "Dimensional Corridor Entrance (B-7)", "oneway": true, "field": "Dimensional", "type": Direction.DOWN},
	{"name": "b8-surface", "display": "8-Bit Surface Entrance (B-1)", "oneway": false, "field": "8-Bit Surface", "type": Direction.RIGHT},
	{"name": "b8-guidance-main", "display": "8-Bit Guidance Main Door (C-1)", "oneway": false, "field": "8-Bit Guidance", "type": Direction.LEFT},
	{"name": "b8-guidance-bottom", "display": "8-Bit Guidance Bottom Ladder (A-6)", "oneway": false, "field": "8-Bit Guidance", "type": Direction.DOWN},
	{"name": "b8-maus-top", "display": "8-Bit Mausoleum Top Ladder (A-7)", "oneway": false, "field": "8-Bit Mausoleum", "type": Direction.UP},
	{"name": "b8-maus-hidden-bottom", "display": "8-Bit Mausoleum Hidden Bottom (G-10)", "oneway": false, "field": "8-Bit Mausoleum", "type": Direction.DOWN},
];

let _emap = new Map();
for (let entr of ENTRANCES)
	_emap.set(entr.name, entr);

const DOORS =
[
	{"name": "door-surface", "display": "Surface Door near Waterfall (I-5)", "field": "Surface"},
	{"name": "door-guidance", "display": "Guidance Inaccessable Door (A-3)", "field": "Guidance-Top"},
	{"name": "door-mausoleum", "display": "Mausoleum Door near Grail (D-3)", "field": "Mausoleum"},
	{"name": "door-sun", "display": "Sun Temple Door above Ellmac (C-5)", "field": "Sun"},
	{"name": "door-inferno-lamia", "display": "Inferno Echidna Left Door (B-1)", "field": "Inferno-Lamia"},
	{"name": "door-inferno", "display": "Inferno Door above Viy (D-5)", "field": "Inferno"},
	{"name": "door-extinction", "display": "Extinction Magatama Chamber Left Door (C-1)", "field": "Extinction-Magatama"},
	{"name": "door-illusion", "display": "Illusion Door above Grail (C-2)", "field": "Illusion"},
	{"name": "door-graveyard", "display": "Graveyard of the Giants Door (C-3)", "field": "Graveyard"},
	{"name": "door-moonlight", "display": "Temple of Moonlight Door (C-5)", "field": "Moonlight"},
	{"name": "door-goddess", "display": "Goddess Tower Bottom Main Door (B-9)", "field": "Goddess"},
	{"name": "door-ruin-top", "display": "Ruin Top of Pyramid Door (F-1)", "field": "Ruin-Top"},
	{"name": "door-ruin-bottom", "display": "Ruin Door Under Earth Spear (D-6)", "field": "Ruin"},
	{"name": "door-birth", "display": "Birth* Wedge Door (D-2)", "field": "Birth-Side"},
];

let _dmap = new Map();
for (let door of DOORS)
	_dmap.set(door.name, door);

const RENAME_FIELD = new Map(
[
	["Surface", "Surface"],
	["Surface-Hidden", "Surface (Hidden Ladders)"],
	["Guidance", "Gate of Guidance"],
	["Mausoleum", "Mausoleum of the Giants"],
	["Sun", "Temple of the Sun"],
	["Spring", "Spring in the Sky"],
	["Inferno", "Inferno Caverns"],
	["Inferno-Lamia", "Inferno Caverns (Echidna's Chamber)"],
	["Extinction", "Chamber of Extinction"],
	["Extinction-Magatama", "Chamber of Extinction (Magatama Chamber)"],
	["Extinction-Palenque", "Chamber of Extinction (Palenque's Field)"],
	["Twin", "Twin Labyrinths"],
	["Endless", "Endless Corridor"],
	["Mother-Side-A", "Shrine of the Mother (Left Side Room)"],
	["Mother-Side-F", "Shrine of the Mother (Right Side Room)"],
	["Mother", "Shrine of the Mother"],
	["Illusion", "Gate of Illusion"],
	["Graveyard", "Graveyard of the Giants"],
	["Moonlight", "Temple of Moonlight"],
	["Goddess", "Tower of the Goddess"],
	["Ruin", "Tower of Ruin"],
	["Ruin-Middle", "Tower of Ruin"],
	["Ruin-Top", "Tower of Ruin"],
	["Birth", "Chamber of Birth (Skanda's Field)"],
	["Birth-Side", "Chamber of Birth (Wedge Side)"],
	["Dimensional", "Dimensional Corridor"],
	["8-Bit Surface", "8-Bit Surface"],
	["8-Bit Guidance", "8-Bit Guidance"],
	["8-Bit Mausoleum", "8-Bit Mausoleum"],
]);

let door_selects = [];

function changeEntrance(target)
{
	// this element is correct and no more work needs to happen
	if (target.oldvalue == target.value) return;

	// save, then update oldvalue for onchange events
	let oldvalue = target.oldvalue;
	target.oldvalue = target.value;

	let other;
	if (oldvalue && (other = document.querySelector('#' + oldvalue)))
	{
		// if this was matched, clear the (previous) matching entrance
		other.value = other.oldvalue = '';
	}

	if (target.value && (other = document.querySelector('#' + target.value)))
	{
		// if this is a new match, set the opposite side to match with us
		other.value = target.getAttribute('id');

		// they may need to update on their end (they were previously matched?)
		changeEntrance(other);
	}

	// failsafe for one-ways? force this to be the only select with this value
	for (let select of document.querySelectorAll('#entrance-list select'))
		if (select != target && select.value == target.value)
			select.value = select.oldvalue = '';

	updateEntranceOptions();
	updateEscapeRoute();
}

function changeEntranceEvent(e)
{ return changeEntrance(e.target); }

function updateEntranceOptions()
{
	for (let option of document.querySelectorAll('#entrance-list select option'))
		option.classList.remove('used');

	for (let select of document.querySelectorAll('#entrance-list select'))
	{
		if (select.value)
			for (let option of document.querySelectorAll('#entrance-list option[value=' + select.value + ']'))
				option.classList.add('used');
	}
}

function changeDoorEvent(e)
{
	for (let door of DOORS)
		document.querySelector('#unfound-' + door.name).classList.remove('strike');

	for (let select of door_selects)
	{
		if (select != e.target && select.value == e.target.value)
			select.value = '';
	}

	for (let select of door_selects)
		if (select.value)
			document.querySelector('#unfound-' + select.value).classList.add('strike');

	updateDoorOptions();
	updateEscapeRoute();
}

function updateDoorOptions()
{
	for (let option of document.querySelectorAll('#door-list select option'))
		option.classList.remove('used');

	for (let select of document.querySelectorAll('#door-list select'))
	{
		if (select.value)
			for (let option of document.querySelectorAll('#door-list option[value=' + select.value + ']'))
				option.classList.add('used');
	}
}

function updateEscapeRoute()
{
	for (let item of document.querySelectorAll('#escape-route-list li'))
		item.parentNode.removeChild(item);

	let escape = calculateEscapeRoute();
	let list = document.querySelector('#escape-route-list');
	for (let path of escape)
	{
		let item = document.createElement('li');
		item.appendChild(document.createTextNode(path));
		list.appendChild(item);
	}
}

for (let entrance of ENTRANCES)
{
	if (entrance.oneway) continue;

	let div = document.createElement('div');
	let label = document.createElement('label');
	label.appendChild(document.createTextNode(entrance.display));

	let select = document.createElement('select');
	let option = document.createElement('option');
	option.setAttribute('value', '');
	option.appendChild(document.createTextNode(''));
	select.appendChild(option);

	let match = DIRECTION_MATCH.get(entrance.type);
	for (let exit of ENTRANCES)
	{
		if (entrance != exit && exit.type == match)
		{
			option = document.createElement('option');
			option.setAttribute('value', exit.name);
			option.appendChild(document.createTextNode(exit.display));
			select.appendChild(option);
		}
	}
	select.setAttribute('id', entrance.name);
	select.oldvalue = '';
	select.onchange = changeEntranceEvent;

	div.appendChild(label);
	div.appendChild(select);
	document.querySelector('#entrance-list').appendChild(div);
}

let door_select_base = document.createElement('select');
let option = document.createElement('option');
option.setAttribute('value', '');
option.appendChild(document.createTextNode(''));
door_select_base.appendChild(option);

for (let door of DOORS)
{
	option = document.createElement('option');
	option.setAttribute('value', door.name);
	option.appendChild(document.createTextNode(door.display));
	door_select_base.appendChild(option);

	let item = document.createElement('li');
	item.setAttribute('id', 'unfound-' + door.name);
	item.appendChild(document.createTextNode(door.display));
	document.querySelector('ul#unfound-doors-list').appendChild(item);
}

let dselect;
for (let i = 1; i <= DOORS.length/2; ++i)
{
	let div = document.createElement('div');
	let label = document.createElement('label');
	label.appendChild(document.createTextNode('' + i));

	div.appendChild(label);
	for (let which of ['a', 'b'])
	{
		dselect = door_select_base.cloneNode(true);
		dselect.setAttribute('id', 'door-' + i + '-' + which);
		dselect.onchange = changeDoorEvent;
		door_selects.push(dselect);
		div.appendChild(dselect);
	}
	document.querySelector('#door-list').appendChild(div);
}

function __addConnection(map, a1, a2)
{
	if (!map.has(a1.field)) map.set(a1.field, []);
	map.get(a1.field).push({to: a2.field, via: a1.display});
}

function calculateEscapeRoute()
{
	let edges = new Map(
	[
		['Guidance-Top', [{to: 'Guidance', via: null}]],
		['Spring', [{to: 'Sun', via: 'Flooded Reservoir (B-10)'}, {to: 'Surface', via: "Bahamut's Room (C-2)"}]],
		['Sun', [{to: 'Twin', via: "Ellmac's Chamber (D-6)"}, {to: 'Moonlight', via: "Pyramid Warp (E-3)"}]],
		['Mausoleum', [{to: 'Spring', via: "Ribu's Pipe (D-5)"}]],
		['Ruin-Top', [{to: 'Ruin-Middle', via: null}]],
		['Ruin-Middle', [{to: 'Ruin', via: null}]],
		['Inferno', [{to: 'Extinction-Palenque', via: "Viy's Chamber (D-6)"}]],
	]);

	for (let entr of ENTRANCES)
	{
		let select = document.querySelector('#' + entr.name);
		if (select && select.value)
		{
			let exit = _emap.get(select.value);
			__addConnection(edges, entr, exit);
		}
	}

	for (let i = 1; i <= 7; ++i)
	{
		let select1 = document.querySelector('#door-' + i + '-a');
		let select2 = document.querySelector('#door-' + i + '-b');
		if (select1.value && select2.value)
		{
			let door1 = _dmap.get(select1.value);
			let door2 = _dmap.get(select2.value);

			__addConnection(edges, door1, door2);
			__addConnection(edges, door2, door1);
		}
	}

	let seen = new Set(['Mother']);
	let backtrack = new Map();
	let work = [];

	let select = document.querySelector('#mother-main-top');
	if (select && select.value)
	{
		let exit = _emap.get(select.value);
		work.push(exit.field); seen.add(exit.field);
		backtrack.set(exit.field, {from: 'Mother', to: exit.field, via: exit.display});
	}

	while (work.length && !seen.has('Sun'))
	{
		let field = work.shift();
		for (let exit of edges.get(field) || [])
		{
			if (seen.has(exit.to)) continue;
			work.push(exit.to); seen.add(exit.to);
			backtrack.set(exit.to, Object.assign({from: field}, exit));
		}
	}

	if (!seen.has('Sun')) return [];

	let path = [], field = 'Sun';
	while (field != 'Mother')
	{
		let trans = backtrack.get(field);
		if (!trans) return [];

		if (trans.via)
			path.unshift(RENAME_FIELD.get(trans.from) +
				' to ' + RENAME_FIELD.get(trans.to) +
				' via ' + trans.via);
		field = trans.from;
	}

	return path;
}
