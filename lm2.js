const MAX_HISTORY_LENGTH = 20;

const Direction =
{
	LEFT: 'left',
	RIGHT: 'right',
	UP: 'up',
	DOWN: 'down',
	GATE: 'gate',
};

const DIRECTION_MATCH = new Map(
[
	[Direction.LEFT, Direction.RIGHT],
	[Direction.RIGHT, Direction.LEFT],
	[Direction.UP, Direction.DOWN],
	[Direction.DOWN, Direction.UP],
	[Direction.GATE, Direction.GATE],
]);

const ENTRANCES =
[
	{"name": "surface-main", "display": "Surface Main (F-5)", "oneway": false, "field": "Surface", "type": Direction.RIGHT, "logname": "Village of Departure Main (F-5)"},
	{"name": "surface-ladder", "display": "Surface Ladder Down (F-3)", "oneway": false, "field": "Surface", "type": Direction.DOWN, "logname": "Village of Departure Ladder (F-3)"},

	{"name": "guidance-main", "display": "Guidance Main Entrance (C-1)", "oneway": false, "field": "Guidance", "type": Direction.LEFT, "logname": "Gate of Guidance Main (C-1)"},
	{"name": "guidance-down", "display": "Guidance Ladder Down (A-6)", "oneway": false, "field": "Guidance", "type": Direction.DOWN, "logname": "Gate of Guidance Ladder (A-6)"},
	{"name": "guidance-left-gate", "display": "Guidance Left Gate (A-3)", "oneway": false, "field": "Guidance", "type": Direction.GATE, "logname": "Gate of Guidance Gate (A-3)"},

	{"name": "maus-left", "display": "Mausoleum Bottom Left (A-5)", "oneway": false, "field": "Mausoleum", "type": Direction.LEFT, "logname": "Mausoleum of Giants Left Door (A-5)"},
	{"name": "maus-up", "display": "Mausoleum Main Ladder Up (A-1)", "oneway": false, "field": "Mausoleum", "type": Direction.UP, "logname": "Mausoleum of Giants Ladder (A-1)"},

	{"name": "endless-corridor", "display": "Endless Corridor (C-1)", "oneway": false, "field": "Endless", "type": Direction.RIGHT, "logname": "Endless Corridor (C-1)"},

	{"name": "illusion-left", "display": "Gate of Illusion Left Gate (A-1)", "oneway": false, "field": "Illusion", "type": Direction.GATE, "logname": "Gate of Illusion Left Gate (A-1)"},
	{"name": "illusion-right", "display": "Gate of Illusion Right Gate (C-1)", "oneway": false, "field": "Illusion", "type": Direction.GATE, "logname": "Gate of Illusion Right Gate (C-1)"},

	{"name": "cavern-left", "display": "Cavern Left (A-1)", "oneway": false, "field": "Cavern", "type": Direction.LEFT, "logname": "Cavern Left Door (A-1)"},
	{"name": "cavern-right", "display": "Cavern Right (D-1)", "oneway": false, "field": "Cavern", "type": Direction.RIGHT, "logname": "Cavern Right Door (D-1)"},
	{"name": "cliff", "display": "Cliff (A-1)", "oneway": false, "field": "Cliff", "type": Direction.LEFT, "logname": "Cliff (A-1)"},

	{"name": "ygg-main-gate", "display": "Yggdrasil Main Gate (D-4)", "oneway": false, "field": "Yggdrasil", "type": Direction.GATE, "logname": "Roots of Yggdrasil Main (D-4)"},
	{"name": "ygg-tl-gate", "display": "Yggdrasil Top Left Switch Gate (A-1)", "oneway": false, "field": "Yggdrasil", "type": Direction.GATE, "logname": "Roots of Yggdrasil Top Left Gate (A-1)"},
	{"name": "ygg-tm-gate", "display": "Yggdrasil Top Middle Nidhogg Gate (D-1)", "oneway": false, "field": "Yggdrasil", "type": Direction.GATE, "logname": "Roots of Yggdrasil Top Middle Gate (D-1)"},
	{"name": "ygg-tr-gate", "display": "Yggdrasil Top Right Birth Gate (G-1)", "oneway": false, "field": "Yggdrasil", "type": Direction.GATE, "logname": "Roots of Yggdrasil Top Right Gate (G-1)"},
	{"name": "ygg-bottom", "display": "Yggdrasil Ladder Down Left (C-5)", "oneway": false, "field": "Yggdrasil", "type": Direction.DOWN, "logname": "Roots of Yggdrasil Ladder (C-5)"},

	{"name": "annwfn-main-top", "display": "Annwfn Main Ladder Up (C-1)", "oneway": false, "field": "Annwfn", "type": Direction.UP, "logname": "Annwfn Ladder (C-1)"},
	{"name": "annwfn-bottom", "display": "Annwfn Bottom One-Way Ladder (F-1)", "oneway": true, "field": "Annwfn", "type": Direction.DOWN, "logname": "Annwfn Bottom (E-5)"},
	{"name": "annwfn-br-gate", "display": "Annwfn Bottom Right Gate (G-4)", "oneway": false, "field": "Annwfn-Lower", "type": Direction.GATE, "logname": "Annwfn Gate (G-4)"},

	{"name": "ib-left-gate", "display": "Imm Battlefield Left Side Gate (A-6)", "oneway": false, "field": "Battlefield-Left", "type": Direction.GATE, "logname": "Immortal Battlefield Gate (A-6)"},
	{"name": "ib-top", "display": "Imm Battlefield Cetas Ladder Up (F-1)", "oneway": false, "field": "Battlefield", "type": Direction.UP, "logname": "Immortal Battlefield Up Ladder (F-1)"},
	{"name": "ib-right", "display": "Imm Battlefield Right (H-4)", "oneway": false, "field": "Battlefield", "type": Direction.RIGHT, "logname": "Immortal Battlefield Right Door (H-4)"},
	{"name": "ib-bottom-wheel", "display": "Imm Battlefield Wheel Ladder Down (D-7)", "oneway": false, "field": "Battlefield", "type": Direction.DOWN, "logname": "Immortal Battlefield Down Ladder near Spinning Wheel (D-7)"},
	{"name": "ib-buried-fortress", "display": "Imm Battlefield Alviss Ladder Down (G-7)", "oneway": false, "field": "Battlefield", "type": Direction.DOWN, "logname": "Immortal Battlefield Down Ladder below Battery Chest (G-7)"},
	{"name": "ib-bottom-moon", "display": "Imm Battlefield Moon Altar Hallway (G-7)", "oneway": true, "field": "Battlefield", "type": Direction.DOWN, "logname": "Immortal Battlefield Moon Altar Hallway (G-7)"},

	{"name": "icefire-mid-gate", "display": "Icefire Middle Gate (D-3)", "oneway": false, "field": "Icefire", "type": Direction.GATE, "logname": "Icefire Treetop Gate (D-3)"},
	{"name": "icefire-fire-up", "display": "Icefire Fire Side Ladder Up (C-1)", "oneway": false, "field": "Icefire", "type": Direction.UP, "logname": "Icefire Treetop Ladder Fire Side (C-1)"},
	{"name": "icefire-ice-lt-up", "display": "Icefire Ice Side Left Ladder Up (F-1)", "oneway": false, "field": "Icefire", "type": Direction.UP, "logname": "Icefire Treetop Left Ladder Ice Side (F-1)"},
	{"name": "icefire-ice-rt-up", "display": "Icefire Ice Side Right Ladder Up (F-1)", "oneway": false, "field": "Icefire", "type": Direction.UP, "logname": "Icefire Treetop Right Ladder Ice Side (F-1)"},

	{"name": "df-twins-gate", "display": "Divine Fortress Gate near Twins (A-3)", "oneway": false, "field": "Divine", "type": Direction.GATE, "logname": "Divine Fortress Gate (A-3)"},

	{"name": "frost-berg-gate", "display": "Frost Giants Bergelmir Gate (B-4)", "oneway": false, "field": "Frost-Giants", "type": Direction.GATE, "logname": "Shrine of the Frost Giants Gate (B-4)"},
	{"name": "frost-back-gate", "display": "Frost Giants Backside Gate (B-2)", "oneway": false, "field": "Frost-Giants-Back", "type": Direction.GATE, "logname": "Shrine of the Frost Giants Backside (B-2)"},

	{"name": "gotd-4switches-gate", "display": "Gate of the Dead 4 Switches Gate (F-5)", "oneway": false, "field": "GOTD", "type": Direction.GATE, "logname": "Gate of the Dead Gate (F-5)"},
	{"name": "taka-bottom-gate", "display": "Takamagahara Shrine Bottom Gate (C-7)", "oneway": false, "field": "Takamagahara", "type": Direction.GATE, "logname": "Takamagahara Shrine Gate (C-7)"},
	{"name": "hlab-chaos-gate", "display": "Heaven's Labyrinth Gate near Chaos (D-1)", "oneway": false, "field": "Heaven", "type": Direction.GATE, "logname": "Heavens Labyrinth Gate (D-1)"},

	{"name": "valhalla-gate", "display": "Valhalla Main Gate (A-2)", "oneway": false, "field": "Valhalla", "type": Direction.GATE, "logname": "Valhalla Gate (A-2)"},
	{"name": "dslm-main-gate", "display": "Dark Star Lord's Maus Main Gate (D-7)", "oneway": false, "field": "DSLM", "type": Direction.GATE, "logname": "Dark Star Lord's Mausoleum Gate (D-7)"},
	{"name": "chaos-main-gate", "display": "Ancient Chaos Main Gate (D-6)", "oneway": false, "field": "Chaos", "type": Direction.GATE, "logname": "Ancient Chaos Gate (D-6)"},
	{"name": "malice-top-gate", "display": "Hall of Malice Top Gate (C-1)", "oneway": false, "field": "Malice-Top", "type": Direction.GATE, "logname": "Hall of Malice Gate (C-1)"},

	{"name": "inferno-echidna", "display": "Inferno Cavern, Echidna's Chamber (B-1)", "oneway": true, "field": "Echidna", "type": Direction.UP, "logname": "Inferno Cavern (B-1)"},
];

let _emap = new Map();
for (let entr of ENTRANCES)
	_emap.set(entr.name, entr);

const DOORS =
[
	{"name": "soul-ygg-bottom", "display": "Yggdrasil Bottom Soul Gate (D-6)", "field": "Yggdrasil", "logname": "Roots of Yggdrasil Soul Gate (D-6)"},
	{"name": "soul-annwfn-bl", "display": "Annwfn Bottom Left Soul Gate (A-4)", "field": "Annwfn", "logname": "Annwfn Soul Gate (A-4)"},
	{"name": "soul-ib-tr", "display": "Imm Battlefield Top Right Soul Gate (H-2)", "field": "Battlefield", "logname": "Immortal Battlefield Two Soul Gate (H-2)"},
	{"name": "soul-ib-bl", "display": "Imm Battlefield Bottom Left Soul Gate (B-7)", "field": "Battlefield-Left", "logname": "Immortal Battlefield Three Soul Gate (B-7)"},
	{"name": "soul-ib-boat", "display": "Imm Battlefield Spiral Boat Soul Gate (D-4)", "field": "Battlefield-Boat", "logname": "Immortal Battlefield Nine Soul Gate(D-4)"},
	{"name": "soul-icefire-rat", "display": "Icefire Under Ratatoskr Soul Gate (G-3)", "field": "Icefire", "logname": "Icefire Treetop Three Soul Gate (G-3)"},
	{"name": "soul-icefire-vid", "display": "Icefire Vidofnir Soul Gate (D-6)", "field": "Icefire", "logname": "Icefire Treetop Five Soul (D-6)"},
	{"name": "soul-df-main", "display": "Divine Fortress Bottom Left Soul Gate (C-5)", "field": "Divine", "logname": "Divine Fortress Soul Gate (C-5)"},
	{"name": "soul-frost-balor", "display": "Frost Giants Balor Soul Gate (E-1)", "field": "Frost-Giants", "logname": "Shrine of the Frost Giants Five Soul Gate (E-1)"},
	{"name": "soul-frost-main", "display": "Frost Giants Main Soul Gate (E-4)", "field": "Frost-Giants", "logname": "Shrine of the Frost Giants Two Soul Gate (E-4)"},
	{"name": "soul-gotd-main", "display": "Gate of the Dead Main Soul Gate (C-4)", "field": "GOTD", "logname": "Gate of the Dead Soul Gate (C-4)"},
	{"name": "soul-taka-top", "display": "Takamagahara Top Main Soul Gate (D-1)", "field": "Takamagahara", "logname": "Takamagahara Shrine Three Soul Gate (D-1)"},
	{"name": "soul-taka-main", "display": "Takamagahara Belial Soul Gate (B-1)", "field": "Takamagahara-Belial", "logname": "Takamagahara Shrine Five Soul Gate (B-1)"},
	{"name": "soul-hlab-main", "display": "Heaven's Labyrinth Main Soul Gate (E-5)", "field": "Heaven", "logname": "Heavens Labyrinth Soul Gate (E-5)"},
	{"name": "soul-valhalla-tr", "display": "Valhalla Top Right Soul Gate (E-2)", "field": "Valhalla", "logname": "Valhalla Soul Gate (E-2)"},
	{"name": "soul-chaos-abzu", "display": "Ancient Chaos Abzu/Corridor Soul Gate (C-1)", "field": "Chaos-Abzu", "logname": "Ancient Chaos Soul Gate (C-1)"},
	{"name": "soul-malice", "display": "Hall of Malice Hidden Soul Gate (D-3)", "field": "Malice", "logname": "Hall of Malice Soul Gate (D-3)"},
	{"name": "soul-ep-gloom", "display": "Eternal Prison Gloom Charon Soul Gate (D-2)", "field": "Eternal-Prison", "logname": "Eternal Prison Gloom Soul Gate (D-2)"},
];

let _dmap = new Map();
for (let door of DOORS)
	_dmap.set(door.name, door);

const RENAME_FIELD = new Map(
[
	["Annwfn", "Annwfn"],
	["Annwfn-Lower", "Annwfn"],
	["Battlefield", "Immortal Battlefield"],
	["Battlefield-Left", "Immortal Battlefield"],
	["Battlefield-Boat", "Immortal Battlefield"],
	["Cavern", "Cavern"],
	["Chaos", "Ancient Chaos"],
	["Chaos-Abzu", "Ancient Chaos, Ziggurat of Abzu"],
	["Cliff", "Cliff"],
	["DSLM", "Dark Star Lord's Mausoleum"],
	["Divine", "Divine Fortress"],
	["Echidna", "Inferno Cavern, Echidna's Chamber"],
	["Eternal-Prison", "Eternal Prison"],
	["Endless", "Endless Corridor"],
	["Frost-Giants", "Shrine of the Frost Giants"],
	["Frost-Giants-Back", "Shrine of the Frost Giants"],
	["GOTD", "Gate of the Dead"],
	["Guidance", "Gate of Guidance"],
	["Heaven", "Heaven's Labyrinth"],
	["Icefire", "Icefire Treetop"],
	["Illusion", "Gate of Illusion"],
	["Malice", "Hall of Malice"],
	["Malice-Top", "Hall of Malice"],
	["Mausoleum", "Mausoleum of the Giants"],
	["Surface", "Surface"],
	["Takamagahara", "Takamagahara Shrine"],
	["Takamagahara-Belial", "Takamagahara Shrine"],
	["Valhalla", "Valhalla"],
	["Yggdrasil", "Roots of Yggdrasil"],
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

	updateEntranceOptions();
	updateDoorOptions();
	updateAccessibleExits();
	updateEscapeRoute();
}

function changeEntranceEvent(e)
{
	changeEntrance(e.target);
	recordHistory();
}

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

function updateDoorOptions()
{
	for (let option of document.querySelectorAll('#soul-list select option'))
		option.classList.remove('used');

	for (let select of document.querySelectorAll('#soul-list select.doormatch'))
	{
		console.log(select.value);
		if (select.value)
			for (let option of document.querySelectorAll('#soul-list select.doormatch option[value=' + select.value + ']'))
				option.classList.add('used');
	}
}

function updateAccessibleExits()
{
	// remove accessible tag from all elements
	for (let option of document.querySelectorAll('.accessible'))
		option.classList.remove('accessible');

	let edges = new Map(
	[
		['Annwfn', [{to: 'Battlefield', via: "Bifrost (C-5)"}]],
		['Annwfn-Lower', [{to: 'Annwfn', via: null}]],
		['Battlefield-Left', [{to: 'Battlefield', via: null}]],
		['Battlefield-Boat', [{to: 'Battlefield', via: null}]],
		['Eternal-Prison', [
			{to: 'Takamagahara', via: 'Any Unmarked Door (IGT seconds 0-15)'},
			{to: 'Divine', via: 'Any Unmarked Door (IGT seconds 45-0)'},

			// corridor of blood door (can these be reached?)
			{to: 'Chaos-Abzu', via: 'Corridor of Blood (C-4)'},
			{to: 'Malice', via: 'Corridor of Blood (C-4)'},
		]],
		['Malice-Top', [{to: 'Malice', via: null}]],
		['Mausoleum', [{to: 'Guidance', via: "Samaranta's Elevator (A-5)"}]],

		// corridor of blood
		['Valhalla', [
			{to: 'Frost-Giants-Back', via: 'Corridor of Blood (C-2)'},
			{to: 'DSLM', via: 'Corridor of Blood (C-2)'},
			{to: 'Chaos-Abzu', via: 'Corridor of Blood (C-2)'},
			{to: 'Malice', via: 'Corridor of Blood (C-2)'},
			{to: 'Eternal-Prison', via: 'Corridor of Blood (C-2)'},
		]],
		['Frost-Giants-Back', [
			{to: 'Valhalla', via: 'Corridor of Blood (C-1)'},
			{to: 'DSLM', via: 'Corridor of Blood (C-1)'},
			{to: 'Chaos-Abzu', via: 'Corridor of Blood (C-1)'},
			{to: 'Malice', via: 'Corridor of Blood (C-1)'},
			{to: 'Eternal-Prison', via: 'Corridor of Blood (C-1)'},
		]],
		['DSLM', [
			{to: 'Valhalla', via: 'Corridor of Blood (C-2)'},
			{to: 'Frost-Giants-Back', via: 'Corridor of Blood (C-2)'},
			{to: 'Chaos-Abzu', via: 'Corridor of Blood (C-2)'},
			{to: 'Malice', via: 'Corridor of Blood (C-2)'},
			{to: 'Eternal-Prison', via: 'Corridor of Blood (C-2)'},
		]],
		['Chaos-Abzu', [
			{to: 'Frost-Giants-Back', via: 'Corridor of Blood (C-3)'},
			{to: 'DSLM', via: 'Corridor of Blood (C-3)'},
			{to: 'Malice', via: 'Corridor of Blood (C-3)'},
			{to: 'Eternal-Prison', via: 'Corridor of Blood (C-3)'},
		]],
		['Malice', [
			{to: 'Frost-Giants-Back', via: 'Corridor of Blood (F-5)'},
			{to: 'DSLM', via: 'Corridor of Blood (F-5)'},
			{to: 'Chaos-Abzu', via: 'Corridor of Blood (F-5)'},
			{to: 'Eternal-Prison', via: 'Corridor of Blood (F-5)'},
		]],
	]);

	let checkeddoors = new Set();
	for (let select of document.querySelectorAll('#soul-list select'))
		if (select.value) checkeddoors.add(select.value);

	let seen = new Set();
	let canreach = new Set();

	function _processField(f)
	{
		let work = [f];
		while (work.length)
		{
			let field = work.shift();
			if (canreach.has(field)) continue;
			canreach.add(field);

			let connect = edges.get(field) || [];
			for (let c of connect) work.push(c.to);
		}
	}

	// building list of accessible fields
	for (let entr of ENTRANCES)
	{
		let select = document.querySelector('#' + entr.name);
		if (select && select.value) _processField(_emap.get(entr.name).field);
	}

	for (let select of document.querySelectorAll('#soul-list select'))
		if (select.value) _processField(_dmap.get(select.value).field);

	// marking all accessible and unchecked entrances and doors
	for (let other of ENTRANCES)
	{
		let otherselect = document.querySelector('#' + other.name);
		if (otherselect && !otherselect.value && canreach.has(other.field))
			otherselect.parentNode.classList.add('accessible');
	}

	for (let other of DOORS)
	{
		let otherselect = document.querySelector('#' + other.name);
		if (otherselect && !otherselect.value && canreach.has(other.field))
			otherselect.parentNode.classList.add('accessible');
	}
}

function updateEscapeRoute()
{
	for (let item of document.querySelectorAll('#escape-route-list li'))
		item.parentNode.removeChild(item);

	let escape = calculateEscapeRoute('Battlefield-Boat');
	let list = document.querySelector('#escape-route-list');
	for (let path of escape)
	{
		let item = document.createElement('li');
		item.appendChild(document.createTextNode(path[0]));
		if (path.length > 1)
		{
			let via1 = document.createElement('ul');
			let via2 = document.createElement('li');
			via2.appendChild(document.createTextNode(path[1]));
			via2.classList.add('via-path');
			via1.appendChild(via2);
			item.appendChild(via1);
		}
		list.appendChild(item);
	}
}

function update()
{
	updateEntranceOptions();
	updateDoorOptions();
	updateAccessibleExits();
	updateEscapeRoute();
}

function entrancesMatch(a, b, override)
{
	if (override) return true;
	return DIRECTION_MATCH.get(a.type) == b.type;
}

function deleteChildren(node)
{
	while (node.firstChild)
		node.firstChild.remove();
}

const SOULDOORS = [1, 2, 3, 5, 9];
function buildTracker()
{
	deleteChildren(document.querySelector('#entrance-list'));
	deleteChildren(document.querySelector('#soul-list'));
	deleteChildren(document.querySelector('#escape-route-list'));

	let allowAny = !!document.querySelector('#full-rando').checked;

	let icon = document.createElement('span');
	icon.classList.add('icon');
	icon.appendChild(document.createTextNode("(?)"));

	for (let entrance of ENTRANCES)
	{
		let div = document.createElement('div');
		//if (entrance.oneway) div.classList.add('oneway');
		let label = document.createElement('label');
		label.appendChild(document.createTextNode(entrance.display));
		label.appendChild(icon.cloneNode(true));

		let select = document.createElement('select');
		let option = document.createElement('option');
		option.setAttribute('value', '');
		option.appendChild(document.createTextNode(''));
		//if (entrance.oneway) select.setAttribute('disabled', true);
		select.appendChild(option);

		for (let exit of ENTRANCES)
		{
			if (entrancesMatch(entrance, exit, allowAny) && entrance != exit)
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

		div.appendChild(select);
		div.appendChild(label);
		document.querySelector('#entrance-list').appendChild(div);
	}

	let soulselect = document.createElement('select');
	soulselect.classList.add('soulcount');
	let souloption = document.createElement('option');
	souloption.appendChild(document.createTextNode(''));
	souloption.setAttribute('value', '');
	soulselect.appendChild(souloption);

	for (let value of SOULDOORS)
	{
		souloption = document.createElement('option');
		souloption.appendChild(document.createTextNode(value));
		souloption.setAttribute('value', value);
		soulselect.appendChild(souloption);
	}

	for (let entrance of DOORS)
	{
		let div = document.createElement('div');
		//if (entrance.oneway) div.classList.add('oneway');
		let label = document.createElement('label');
		label.appendChild(document.createTextNode(entrance.display));
		label.appendChild(icon.cloneNode(true));

		let select = document.createElement('select');
		select.classList.add('doormatch');

		let option = document.createElement('option');
		option.setAttribute('value', '');
		option.appendChild(document.createTextNode(''));
		//if (entrance.oneway) select.setAttribute('disabled', true);
		select.appendChild(option);

		for (let exit of DOORS)
		{
			if (entrance != exit)
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

		let ssclone = soulselect.cloneNode(true);
		ssclone.setAttribute('id', entrance.name + '-count');

		div.appendChild(select);
		div.appendChild(ssclone);
		div.appendChild(label);
		document.querySelector('#soul-list').appendChild(div);
	}
}

buildTracker();
document.querySelector('#full-rando').onchange = buildTracker;

function __addConnection(map, a1, a2)
{
	if (!map.has(a1.field)) map.set(a1.field, []);
	map.get(a1.field).push({to: a2.field, via: a1.display});
}

const GRAIL_FIELDS = [
	'Yggdrasil', 'Annwfn', 'Battlefield', 'Icefire', 'Divine', 'Frost-Giants', 'GOTD', 'Takamagahara', 'Heaven',
	'Valhalla', 'DSLM', 'Chaos', 'Malice', 'Eternal-Prison'
];
function calculateEscapeRoute(startfield)
{
	let edges = new Map(
	[
		['Annwfn', [{to: 'Battlefield', via: "Bifrost (C-5)"}]],
		['Annwfn-Lower', [{to: 'Annwfn', via: null}]],
		['Battlefield-Left', [{to: 'Battlefield', via: null}]],
		['Battlefield-Boat', [{to: 'Battlefield', via: null}]],
		['Eternal-Prison', [
			{to: 'Takamagahara', via: 'Any Unmarked Door (IGT seconds 0-15)'},
			{to: 'Divine', via: 'Any Unmarked Door (IGT seconds 45-0)'},
		]],
		['Malice-Top', [{to: 'Malice', via: null}]],
		['Mausoleum', [{to: 'Guidance', via: "Samaranta's Elevator (A-5)"}]],
	]);

	for (let orig of ['Guidance', 'Mausoleum', 'Surface'])
	{
		let name = RENAME_FIELD.get(orig);
		for (let field of GRAIL_FIELDS)
		{
			if (!edges.has(orig)) edges.set(orig, []);
			edges.get(orig).push({to: field, via: "Holy Grail warp (entering " + name + " activated Holy Grail)"});
		}
	}

	for (let entr of ENTRANCES)
	{
		if (entr.oneway) continue;

		let select = document.querySelector('#' + entr.name);
		if (select && select.value)
		{
			let exit = _emap.get(select.value);
			__addConnection(edges, entr, exit);
		}
	}

	for (let entr of DOORS)
	{
		let select = document.querySelector('#' + entr.name);
		if (select && select.value)
		{
			let exit = _dmap.get(select.value);
			__addConnection(edges, entr, exit);
		}
	}

	function tryFrom(ff)
	{
		const TARGET = 'Cliff';
		if (ff == TARGET) return [["You're already there!"]];

		let seen = new Set([ff]);
		let backtrack = new Map();
		let work = edges.get(ff) || [];

		for (let edge of work)
		{
			seen.add(edge.to);
			backtrack.set(edge.to, Object.assign({from: ff}, edge));
		}

		while (work.length && !seen.has(TARGET))
		{
			let field = work.shift().to;
			for (let exit of edges.get(field) || [])
			{
				if (seen.has(exit.to)) continue;
				work.push(exit); seen.add(exit.to);
				backtrack.set(exit.to, Object.assign({from: field}, exit));
			}
		}

		if (!seen.has(TARGET)) return [];

		let path = [[RENAME_FIELD.get(TARGET)]], field = TARGET;
		while (field != ff)
		{
			let trans = backtrack.get(field);
			if (!trans) return [];

			if (trans.via)
				path.unshift([RENAME_FIELD.get(trans.from), 'take ' + trans.via]);
			field = trans.from;
		}

		return path;
	}

	let path = tryFrom(startfield);
	if (path.length) return path;

	return [["Uhhh... You're on your own. Good luck, kiddo! :^)"]];
}

function setState(json)
{
	for (const [k,v] of json)
	{
		let obj = document.querySelector(k);
		obj.value = obj.oldvalue = v;
	}
	previous_state = json;
}

function getState()
{
	let state = new Map();
	for (let select of document.querySelectorAll('select'))
		state.set('#' + select.getAttribute('id'), select.value);
	return state;
}

let history = [];
let previous_state = getState();
function undo()
{
	if (!history.length) return;
	setState(history.pop());
	update();
}

function recordHistory()
{
	history.push(previous_state);
	previous_state = getState();
	while (history.length > MAX_HISTORY_LENGTH)
		history.shift();
}

function stable_sort(list, comp)
{
	if (!comp) comp = (a, b) => (a < b ? -1 : a > b ? 1 : 0);
	if (list.length <= 1) return list;

	let mid = Math.floor(list.length / 2);
	let x = stable_sort(list.slice(0, mid), comp);
	let y = stable_sort(list.slice(mid), comp);

	let res = [];
	while (x.length && y.length)
		res.push(comp(x[0], y[0]) <= 0 ? x.shift() : y.shift());

	while (x.length) res.push(x.shift());
	while (y.length) res.push(y.shift());
	return res;
}

function getByLogname(list, logname)
{
	for (let item of list)
		if (item.logname == logname) return item;
	return null;
}

update();

try
{
	const ipc = require('electron').ipcRenderer;
	const {dialog} = require('electron').remote;
	const fs = require('fs');
	const path = require('path');

	function importSpoiler(filename)
	{
		let data = fs.readFileSync(filename, 'utf8');
		for (let line of data.split(/[\r\n]+/)) if (line)
		{
			let soulparts = line.trim().split(': Soul Amount ');
			let lineparts = soulparts[0].trim().split(' - ');
			if (lineparts.length != 2) continue;

			if (soulparts.length == 1)
			{
				let a = getByLogname(ENTRANCES, lineparts[0]);
				let b = getByLogname(ENTRANCES, lineparts[1]);
				if (!a || !b) continue;

				let select = document.querySelector('#' + a.name);
				if (select)
				{
					select.value = b.name;
					changeEntrance(select);
				}
			}
			else
			{
				let a = getByLogname(DOORS, lineparts[0]);
				let b = getByLogname(DOORS, lineparts[1]);
				if (!a || !b) continue;

				let select = document.querySelector('#' + a.name);
				if (select)
				{
					select.value = b.name;
					changeEntrance(select);
				}
			}
		}
		update();
	}

	ipc.on('undo', undo);
	ipc.on('reset', function(e, m)
	{
		for (let select of document.querySelectorAll('select'))
			select.value = '';
		update();
		history = [];
	});

	ipc.on('save', function(e, m)
	{
		dialog.showSaveDialog({
			title: 'Save JSON state file',
			filters: [
				{ name: 'JSON file', extensions: ['json'] },
			],
		})
		.then((f) => {
			if (!f.filePath) return;
			let json = JSON.stringify([...getState()])
			fs.writeFileSync(f.filePath, json, 'utf8');
		});
	});

	ipc.on('open', function(e, m)
	{
		dialog.showOpenDialog({
			properties: ['openFile'],
			title: 'Select JSON state file',
			filters: [
				{ name: 'JSON file', extensions: ['json'] },
			],
		})
		.then((f) => {
			if (!f.filePaths || !f.filePaths[0]) return;
			let data = fs.readFileSync(f.filePaths[0], 'utf8');
			setState(new Map(JSON.parse(data)));
			update();
		});
	});

	ipc.on('import-spoiler', function(e, m)
	{
		dialog.showOpenDialog({
			properties: ['openFile'],
			title: 'Select spoilers.txt',
			filters: [
				{ name: 'spoilers.txt', extensions: ['txt'] },
			],
		})
		.then((f) => {
				if (!f.filePaths || !f.filePaths[0]) return;
				importSpoiler(f.filePaths[0]);
		});
	});
}
catch (e)
{
	// try-catch to hopefully allow this to run in a browser
	throw(e);
}
