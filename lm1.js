const MAX_HISTORY_LENGTH = 20;

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
	{"name": "surface-main", "display": "Surface Main (I-5)", "oneway": false, "field": "Surface", "type": Direction.RIGHT, "logname": "Surface (Entrance to La-Mulana Ruins)"},
	{"name": "surface-hidden-L", "display": "Surface Hidden Ladder Left (I-3)", "oneway": false, "field": "Surface-Hidden", "type": Direction.DOWN, "logname": "Surface (Sound Canyon)"},
	{"name": "surface-hidden-R", "display": "Surface Hidden Ladder Right (J-3)", "oneway": false, "field": "Surface-Hidden", "type": Direction.DOWN, "logname": "Surface (Underground Passage)"},

	{"name": "guidance-main", "display": "Guidance Main Entrance (C-1)", "oneway": false, "field": "Guidance", "type": Direction.LEFT, "logname": "Gate of Guidance (Pillars Gate)"},
	{"name": "guidance-bottom-L", "display": "Guidance Bottom Left (A-6)", "oneway": false, "field": "Guidance", "type": Direction.DOWN, "logname": "Gate of Guidance (Monument of Time)"},
	{"name": "guidance-bottom-R", "display": "Guidance Bottom Right (D-5)", "oneway": false, "field": "Guidance", "type": Direction.DOWN, "logname": "Gate of Guidance (Cliff of Radiance)"},
	{"name": "guidance-top-R", "display": "Guidance Top Right (G-2)", "oneway": false, "field": "Guidance", "type": Direction.UP, "logname": "Gate of Guidance (Room of Courage)"},

	{"name": "mausoleum-main-top-L", "display": "Mausoleum Main Top Left (B-1)", "oneway": false, "field": "Mausoleum", "type": Direction.UP, "logname": "Mausoleum of the Giants (Last Shrine)"},
	{"name": "mausoleum-bottom-L", "display": "Mausoleum Bottom Left (B-5)", "oneway": false, "field": "Mausoleum", "type": Direction.LEFT, "logname": "Mausoleum of the Giants (Moon Palace of the Giants)"},
	{"name": "mausoleum-bottom-R", "display": "Mausoleum Right (H-4)", "oneway": false, "field": "Mausoleum", "type": Direction.DOWN, "logname": "Mausoleum of the Giants (Star Palace of the Giants)"},

	{"name": "sun-main-top", "display": "Sun Main Top (B-1)", "oneway": false, "field": "Sun", "type": Direction.UP, "logname": "Temple of the Sun (Watchtower)"},
	{"name": "sun-L", "display": "Sun Left Buer (A-2)", "oneway": false, "field": "Sun", "type": Direction.LEFT, "logname": "Temple of the Sun (Isis' Anterior Chamber)"},
	{"name": "sun-bottom-R-1", "display": "Sun Door to Extinction Top (G-4)", "oneway": false, "field": "Sun", "type": Direction.RIGHT, "logname": "Temple of the Sun (Altar of Mirrors) (Upper)"},
	{"name": "sun-bottom-R-2", "display": "Sun Door to Extinction Bottom (G-4)", "oneway": false, "field": "Sun", "type": Direction.RIGHT, "logname": "Temple of the Sun (Altar of Mirrors) (Lower)"},

	{"name": "spring-main", "display": "Spring Main Left (A-6)", "oneway": false, "field": "Spring", "type": Direction.DOWN, "logname": "Spring in the Sky (Mural of Oannes)"},

	{"name": "inferno-main-R", "display": "Inferno Main Right (G-2)", "oneway": false, "field": "Inferno", "type": Direction.RIGHT, "logname": "Inferno Cavern (Statue of the Giant)"},
	{"name": "inferno-top", "display": "Inferno Top (E-1)", "oneway": false, "field": "Inferno", "type": Direction.UP, "logname": "Inferno Cavern (Twin's Footstool)"},
	{"name": "inferno-lava-pit", "display": "Inferno Lava Pit", "oneway": true, "field": "Inferno", "type": Direction.DOWN, "logname": "Inferno Cavern (Anterior Chamber)"},
	{"name": "inferno-lamia-R", "display": "Inferno Echidna Right (C-1)", "oneway": false, "field": "Inferno-Lamia", "type": Direction.UP, "logname": "Inferno Cavern (Echidna's Chamber)"},

	{"name": "extinction-main-1", "display": "Extinction Main Entrance Top (A-2)", "oneway": false, "field": "Extinction", "type": Direction.LEFT, "logname": "Chamber of Extinction (Mural of Invocation) (Upper)"},
	{"name": "extinction-main-2", "display": "Extinction Main Entrance Bottom (A-2)", "oneway": false, "field": "Extinction-Bottom-Main", "type": Direction.LEFT, "logname": "Chamber of Extinction (Mural of Invocation) (Lower)"},
	{"name": "extinction-mother", "display": "Extinction Mother Ladder (H-5)", "oneway": false, "field": "Extinction", "type": Direction.UP, "logname": "Chamber of Extinction (Lake of Life)"},
	{"name": "extinction-magatama-R", "display": "Extinction Magatama Right (F-1)", "oneway": false, "field": "Extinction-Magatama", "type": Direction.UP, "logname": "Chamber of Extinction (Gate of Ox-Head and Horse-Face)"},
	{"name": "extinction-palenque", "display": "Extinction Viy Ladder to Palenque", "oneway": false, "field": "Extinction-Palenque", "type": Direction.UP, "logname": "Chamber of Extinction (Shiva's Crucifix)"},

	{"name": "twin-maze-L", "display": "Twin Main Top Left (A-2)", "oneway": false, "field": "Twin", "type": Direction.UP, "logname": "Twin Labyrinths (Twin's Surrounding Wall)"},
	{"name": "twin-mother-top", "display": "Twin Mother Top Center (G-1)", "oneway": false, "field": "Twin", "type": Direction.UP, "logname": "Twin Labyrinths (Hero's Approach)"},
	{"name": "twin-skull-top", "display": "Twin Skull Top Right (I-1)", "oneway": false, "field": "Twin", "type": Direction.UP, "logname": "Twin Labyrinths (Sanctuary)"},
	{"name": "twin-bottom-L", "display": "Twin Bottom Left Ladder (B-5)", "oneway": false, "field": "Twin", "type": Direction.DOWN, "logname": "Twin Labyrinths (Idigna's Room)"},
	{"name": "twin-bottom-R", "display": "Twin Elevator Bottom Right (I-5)", "oneway": false, "field": "Twin", "type": Direction.DOWN, "logname": "Twin Labyrinths (Poseidon's Room)"},

	{"name": "endless-main-floor-1", "display": "Endless Main Entrance (D-1)", "oneway": false, "field": "Endless", "type": Direction.RIGHT, "logname": "Endless Corridor (First Endless Corridor)"},
	{"name": "endless-phil-floor-2", "display": "Endless Philosopher Ladder (E-2)", "oneway": false, "field": "Endless", "type": Direction.UP, "logname": "Endless Corridor (Second Endless Corridor)"},
	{"name": "endless-bottom-floor-5", "display": "Endless Bottom Ladder (B-5)", "oneway": false, "field": "Endless", "type": Direction.DOWN, "logname": "Endless Corridor (Fifth Endless Corridor)"},

	{"name": "mother-side-crush", "display": "Mother Side Room Skull Walls (A-3)", "oneway": false, "field": "Mother-Side-A", "type": Direction.DOWN, "logname": "Shrine of the Mother (Treasury) (Death Seal)"},
	{"name": "mother-side-smash", "display": "Mother Side Room Smash (F-3)", "oneway": false, "field": "Mother-Side-F", "type": Direction.DOWN, "logname": "Shrine of the Mother (Treasury) (Map)"},
	{"name": "mother-main-top", "display": "Mother Top Ladder (C-1)", "oneway": false, "field": "Mother-Top", "type": Direction.UP, "logname": "Shrine of the Mother (Amphisbaena's Room)"},
	{"name": "mother-bottom", "display": "Mother Bottom Ladder (E-6)", "oneway": false, "field": "Mother-Bottom", "type": Direction.DOWN, "logname": "Shrine of the Mother (Bahamut's Room)"},

	{"name": "illusion-eden", "display": "Illusion Eden Bottom Right (G-6)", "oneway": false, "field": "Illusion", "type": Direction.DOWN, "logname": "Gate of Illusion (Entrance of Illusion)"},
	{"name": "illusion-bottom-L", "display": "Illusion Bottom Left (C-5)", "oneway": false, "field": "Illusion", "type": Direction.DOWN, "logname": "Gate of Illusion (Fool's Confusion Corridor)"},
	{"name": "illusion-R", "display": "Illusion Right above Chi You (D-3)", "oneway": false, "field": "Illusion", "type": Direction.RIGHT, "logname": "Gate of Illusion (Sacrificial Abyss)"},
	{"name": "illusion-child-R", "display": "Illusion Right Dancing Child (F-2)", "oneway": false, "field": "Illusion", "type": Direction.RIGHT, "logname": "Gate of Illusion (Children's Room)"},

	{"name": "graveyard-main-top", "display": "Graveyard Main Top (B-1)", "oneway": false, "field": "Graveyard", "type": Direction.UP, "logname": "Graveyard of the Giants (First Tomb)"},
	{"name": "graveyard-grail", "display": "Graveyard Grail Room (D-2)", "oneway": false, "field": "Graveyard", "type": Direction.RIGHT, "logname": "Graveyard of the Giants (Second Tomb)"},
	{"name": "graveyard-bottom-L", "display": "Graveyard Bottom Left (B-5)", "oneway": false, "field": "Graveyard", "type": Direction.LEFT, "logname": "Graveyard of the Giants (Third Tomb)"},
	{"name": "graveyard-R-top", "display": "Graveyard Right Top (G-4)", "oneway": false, "field": "Graveyard", "type": Direction.UP, "logname": "Graveyard of the Giants (Altar of Knowledge)"},
	{"name": "graveyard-R-bottom", "display": "Graveyard Right Bottom (E-5)", "oneway": false, "field": "Graveyard", "type": Direction.DOWN, "logname": "Graveyard of the Giants (Anterior Corridor)"},

	{"name": "moonlight-top", "display": "Moonlight Top (B-1)", "oneway": false, "field": "Moonlight", "type": Direction.UP, "logname": "Temple of Moonlight (Stairway of Eden)"},
	{"name": "moonlight-top-R", "display": "Moonlight Top Right (D-2)", "oneway": false, "field": "Moonlight", "type": Direction.UP, "logname": "Temple of Moonlight (Neptune's Feet)"},
	{"name": "moonlight-bottom", "display": "Moonlight Bottom Left Blue (B-5)", "oneway": false, "field": "Moonlight-Bottom", "type": Direction.LEFT, "logname": "Temple of Moonlight (Sealed Approach)"},

	{"name": "goddess-top-L", "display": "Goddess Tower Top Left (C-1)", "oneway": false, "field": "Goddess", "type": Direction.LEFT, "logname": "Tower of the Goddess (Path to Life)"},
	{"name": "goddess-top-R", "display": "Goddess Tower Top Right (E-1)", "oneway": false, "field": "Goddess", "type": Direction.DOWN, "logname": "Tower of the Goddess (Path to Power)"},
	{"name": "goddess-pipes-top", "display": "Goddess Pipes Left Top (A-2)", "oneway": false, "field": "Goddess", "type": Direction.UP, "logname": "Tower of the Goddess (Verdandi's Tower)"},
	{"name": "goddess-secret", "display": "Goddess Tower Secret Entrance (A-2)", "oneway": true, "field": "Goddess", "type": Direction.UP, "logname": "Tower of the Goddess (Gate of Time exit)"},
	{"name": "goddess-bottom-left", "display": "Goddess Bottom Left (B-7)", "oneway": false, "field": "Goddess", "type": Direction.LEFT, "logname": "Tower of the Goddess (Urd's Tower)"},

	{"name": "ruin-bottom-right", "display": "Ruin Main/Bottom Right (G-5)", "oneway": false, "field": "Ruin", "type": Direction.RIGHT, "logname": "Tower of Ruin (Fountain of Heat)"},
	{"name": "ruin-far-L", "display": "Ruin Far Left (A-3)", "oneway": false, "field": "Ruin", "type": Direction.LEFT, "logname": "Tower of Ruin (Approach of the Philosophers)"},
	{"name": "ruin-top-R", "display": "Ruin Top Right (G-2)", "oneway": false, "field": "Ruin-Middle", "type": Direction.RIGHT, "logname": "Tower of Ruin (Burial Chamber of Life)"},

	{"name": "birth-main-grail", "display": "Birth Main Grail Entrance (A-3)", "oneway": false, "field": "Birth", "type": Direction.DOWN, "logname": "Chamber of Birth (Deva's Room)"},
	{"name": "birth-skanda-R", "display": "Birth Skanda Door (F-5)", "oneway": false, "field": "Birth", "type": Direction.RIGHT, "logname": "Chamber of Birth (Skanda's Room)"},
	{"name": "birth-side-top", "display": "Birth* Top Ladder (D-1)", "oneway": false, "field": "Birth-Side", "type": Direction.UP, "logname": "Chamber of Birth (Saraswati's Room)"},
	{"name": "birth-side-skanda-L", "display": "Birth* Door to Skanda (H-4)", "oneway": false, "field": "Birth-Side", "type": Direction.LEFT, "logname": "Chamber of Birth (Vishnu's Room)"},

	{"name": "dimensional-corr", "display": "Dimensional Corridor Entrance (B-7)", "oneway": true, "field": "Dimensional", "type": Direction.DOWN, "logname": "Dimensional Corridor"},

	{"name": "b8-surface", "display": "8-Bit Surface Entrance (B-1)", "oneway": false, "field": "8-Bit Surface", "type": Direction.RIGHT, "logname": "Gate of Time (Surface to Gate of Guidance)"},
	{"name": "b8-guidance-main", "display": "8-Bit Guidance Main Door (C-1)", "oneway": false, "field": "8-Bit Guidance", "type": Direction.LEFT, "logname": "Gate of Time (Gate of Guidance to Surface)"},
	{"name": "b8-guidance-bottom", "display": "8-Bit Guidance Bottom Ladder (A-6)", "oneway": false, "field": "8-Bit Guidance", "type": Direction.DOWN, "logname": "Gate of Time (Gate of Guidance to Mausoleum of the Giants)"},
	{"name": "b8-maus-top", "display": "8-Bit Mausoleum Top Ladder (A-7)", "oneway": false, "field": "8-Bit Mausoleum", "type": Direction.UP, "logname": "Gate of Time (Mausoleum of the Giants to Gate of Guidance)"},
	{"name": "b8-maus-hidden-bottom", "display": "8-Bit Mausoleum Hidden Bottom (G-10)", "oneway": false, "field": "8-Bit Mausoleum", "type": Direction.DOWN, "logname": "Gate of Time (Mausoleum of the Giants to Tower of the Goddess)"},
];

let _emap = new Map();
for (let entr of ENTRANCES)
	_emap.set(entr.name, entr);

const DOORS =
[
	{"name": "door-surface", "display": "Surface Door near Waterfall (I-5)", "field": "Surface", "logname": "Surface"},
	{"name": "door-guidance", "display": "Guidance Inaccessable Door (A-3)", "field": "Guidance-Top", "logname": "Gate of Guidance"},
	{"name": "door-mausoleum", "display": "Mausoleum Door near Grail (D-3)", "field": "Mausoleum", "logname": "Mausoleum of the Giants"},
	{"name": "door-sun", "display": "Sun Temple Door above Ellmac (C-5)", "field": "Sun", "logname": "Temple of the Sun"},
	{"name": "door-inferno-lamia", "display": "Inferno Echidna Left Door (B-1)", "field": "Inferno-Lamia", "logname": "Inferno Cavern (Echidna's Chamber)"},
	{"name": "door-inferno", "display": "Inferno Door above Viy (D-5)", "field": "Inferno", "logname": "Inferno Cavern (Darkness Sanctuary)"},
	{"name": "door-extinction-key", "display": "Extinction Key Fairy Door (G-5)", "field": "Extinction", "logname": "Chamber of Extinction (Path of Life)"},
	{"name": "door-extinction", "display": "Extinction Magatama Chamber Left Door (C-1)", "field": "Extinction-Magatama", "logname": "Chamber of Extinction (Approach to the Sanctuary)"},
	{"name": "door-endless", "display": "Endless Corridor One-Way Entrance (D-1)", "field": "Dimensional", "logname": "Endless Corridor (First Endless Corridor)"},
	{"name": "door-illusion", "display": "Illusion Door above Grail (C-2)", "field": "Illusion", "logname": "Gate of Illusion"},
	{"name": "door-graveyard", "display": "Graveyard of the Giants Door (C-3)", "field": "Graveyard", "logname": "Graveyard of the Giants"},
	{"name": "door-moonlight", "display": "Temple of Moonlight Door (C-5)", "field": "Moonlight", "logname": "Temple of Moonlight"},
	{"name": "door-goddess", "display": "Goddess Tower Bottom Main Door (B-9)", "field": "Goddess", "logname": "Tower of the Goddess"},
	{"name": "door-ruin-top", "display": "Ruin Nuwa's Pyramid Door (F-1)", "field": "Ruin-Top", "logname": "Tower of Ruin (N�wa's Pyramid)"},
	{"name": "door-ruin-bottom", "display": "Ruin Door Under Earth Spear (D-6)", "field": "Ruin", "logname": "Tower of Ruin (Tower of Babel)"},
	{"name": "door-birth", "display": "Birth* Wedge Door (D-2)", "field": "Birth-Side", "logname": "Chamber of Birth"},
	{"name": "door-dc", "display": "Dimensional Corridor Exit Door (B-6)", "field": "Dimensional", "logname": "Dimensional Corridor"},
	{"name": "door-8bit-maus", "display": "8-Bit Mausoleum Gate of Time Door (D-11)", "field": "8-Bit Mausoleum", "logname": "Gate of Time (Mausoleum)"},
];

let _dmap = new Map();
for (let door of DOORS)
	_dmap.set(door.name, door);

const FIELD_TABLE = [
	["Surface", {name: "Surface", hasNPCs: true}],
	["Surface-Hidden", {name: "Surface (Hidden Ladders)", hasNPCs: false}],
	["Guidance", {name: "Gate of Guidance", hasNPCs: true}],
	["Guidance-Top", {name: "Gate of Guidance", hasNPCs: false}],
	["Mausoleum", {name: "Mausoleum of the Giants", hasNPCs: true}],
	["Sun", {name: "Temple of the Sun", hasNPCs: true}],
	["Spring", {name: "Spring in the Sky", hasNPCs: true}],
	["Inferno", {name: "Inferno Caverns", hasNPCs: true}],
	["Inferno-Lamia", {name: "Inferno Caverns (Echidna's Chamber)", hasNPCs: false}],
	["Extinction", {name: "Chamber of Extinction", hasNPCs: true}],
	["Extinction-Magatama", {name: "Chamber of Extinction (Magatama Chamber)", hasNPCs: false}],
	["Extinction-Palenque", {name: "Chamber of Extinction (Palenque's Field)", hasNPCs: true}],
	["Twin", {name: "Twin Labyrinths", hasNPCs: true}],
	["Endless", {name: "Endless Corridor", hasNPCs: true}],
	["Mother-Side-A", {name: "Shrine of the Mother (Left Side Room)", hasNPCs: false}],
	["Mother-Side-F", {name: "Shrine of the Mother (Right Side Room)", hasNPCs: false}],
	["Mother-Top", {name: "Shrine of the Mother", hasNPCs: false}],
	["Mother-Bottom", {name: "Shrine of the Mother", hasNPCs: false}],
	["Illusion", {name: "Gate of Illusion", hasNPCs: true}],
	["Graveyard", {name: "Graveyard of the Giants", hasNPCs: true}],
	["Moonlight", {name: "Temple of Moonlight", hasNPCs: true}],
	["Moonlight-Bottom", {name: "Temple of Moonlight", hasNPCs: false}],
	["Goddess", {name: "Tower of the Goddess", hasNPCs: true}],
	["Ruin", {name: "Tower of Ruin (Main/Bottom Floors)", hasNPCs: true}],
	["Ruin-Middle", {name: "Tower of Ruin (Wedge Floor)", hasNPCs: false}],
	["Ruin-Top", {name: "Tower of Ruin (Nuwa's Pyramid)", hasNPCs: false}],
	["Birth", {name: "Chamber of Birth (Grail Side)", hasNPCs: true}],
	["Birth-Side", {name: "Chamber of Birth (Wedge Side)", hasNPCs: false}],
	["Dimensional", {name: "Dimensional Corridor", hasNPCs: true}],
	["8-Bit Surface", {name: "8-Bit Surface", hasNPCs: true}],
	["8-Bit Guidance", {name: "8-Bit Guidance", hasNPCs: true}],
	["8-Bit Mausoleum", {name: "8-Bit Mausoleum", hasNPCs: false}],
];

const FIELD_INFO = new Map(FIELD_TABLE);
const STARTING_SCREENS = ['Surface', 'Guidance', 'Mausoleum', 'Sun', 'Spring', 'Inferno', 'Extinction', 'Twin', 'Endless', 'Illusion', 'Graveyard', 'Moonlight', 'Goddess', 'Ruin', 'Birth', 'Dimensional', '8-Bit Surface'];

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

function changeDoorEvent(e)
{
	for (let select of door_selects)
	{
		if (select != e.target && select.value == e.target.value)
			select.value = '';
	}

	updateDoorOptions();
	updateAccessibleExits();
	updateEscapeRoute();
	recordHistory();
}

function updateDoorOptions()
{
	for (let door of DOORS)
		document.querySelector('#unfound-' + door.name).classList.remove('strike');

	for (let option of document.querySelectorAll('#door-list select option'))
		option.classList.remove('used');

	for (let select of document.querySelectorAll('#door-list select'))
	{
		if (select.value)
		{
			for (let option of document.querySelectorAll('#door-list option[value=' + select.value + ']'))
				option.classList.add('used');
			document.querySelector('#unfound-' + select.value).classList.add('strike');
		}
	}
}

function updateAccessibleExits()
{
	// remove accessible tag from all elements
	for (let option of document.querySelectorAll('.accessible'))
		option.classList.remove('accessible');

	let edges = new Map(
	[
		['Guidance-Top', [{to: 'Guidance', via: null}]],
		['Spring', [{to: 'Sun', via: 'Flooded Reservoir (B-10)'}, {to: 'Surface', via: "Bahamut's Room (C-2)"}]],
		['Sun', [{to: 'Twin', via: "Ellmac's Chamber (D-6)"}, {to: 'Moonlight', via: "Pyramid Warp (E-3)"}]],
		['Extinction-Bottom-Main', [{to: 'Extinction', via: null}]],
		['Ruin-Top', [{to: 'Ruin-Middle', via: null}]],
		['Ruin-Middle', [{to: 'Ruin', via: null}]],
		['Inferno', [{to: 'Extinction-Palenque', via: "Viy's Chamber (D-6)"}]],
		['Mother-Top', [{to: 'Mother-Bottom', via: null}]],
	]);

	let checkeddoors = new Set();
	for (let select of document.querySelectorAll('#door-list select'))
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

	for (let select of document.querySelectorAll('#door-list select'))
		if (select.value) _processField(_dmap.get(select.value).field);

	// marking all accessible and unchecked entrances and doors
	for (let other of ENTRANCES)
	{
		if (other.oneway) continue;

		let otherselect = document.querySelector('#' + other.name);
		if (otherselect && !otherselect.value && canreach.has(other.field))
			otherselect.parentNode.classList.add('accessible');
	}

	for (let other of DOORS)
	{
		if (!checkeddoors.has(other.name) && canreach.has(other.field))
			document.querySelector('#unfound-' + other.name).classList.add('accessible');
	}
}

function updateEscapeRoute()
{
	for (let item of document.querySelectorAll('#escape-route-list li'))
		item.parentNode.removeChild(item);

	let escape = calculateEscapeRoute(document.querySelector('#escape-from').value,
		document.querySelector('#escape-to').value);
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

	div.appendChild(select);
	div.appendChild(label);
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
	item.appendChild(icon.cloneNode(true));
	document.querySelector('ul#unfound-doors-list').appendChild(item);
}

let start_select = document.querySelector('#escape-from');
option = document.createElement('option');
option.setAttribute('value', 'no-surface-warp');
option.appendChild(document.createTextNode('NO GLITCHED ESCAPE'));
start_select.appendChild(option);

start_select.onchange = updateEscapeRoute;
for (let start of STARTING_SCREENS)
{
	option = document.createElement('option');
	option.setAttribute('value', start);
	option.appendChild(document.createTextNode(FIELD_INFO.get(start).name));
	start_select.appendChild(option);
}

let escape_to = document.querySelector('#escape-to');
escape_to.onchange = updateEscapeRoute;
for (let location of FIELD_TABLE)
{
	if (!location[1].hasNPCs) continue;
	option = document.createElement('option');
	option.setAttribute('value', location[0]);
	option.appendChild(document.createTextNode(location[1].name));
	escape_to.appendChild(option);
}

const DOOR_IMAGES =
[
	['1', 'Amphisbaena'],
	['2', 'Sakit'],
	['3', 'Ellmac'],
	['4', 'Bahamut'],
	['5', 'Viy'],
	['6', 'Palenque'],
	['7', 'Baphomet'],
	['Key'],
	null,
	null,
];

let dselect;
for (let i = 0; i < DOOR_IMAGES.length; ++i)
{
	let div = document.createElement('div');
	let label = document.createElement('label');

	if (DOOR_IMAGES[i])
	{
		for (let imgname of DOOR_IMAGES[i])
		{
			let img = document.createElement('img');
			img.setAttribute('src', 'images/' + imgname + '.png');
			label.appendChild(img);
		}
	}
	else label.appendChild(document.createTextNode("Open"));

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

function calculateEscapeRoute(startfield, targetfield)
{
	let edges = new Map(
	[
		['Guidance-Top', [{to: 'Guidance', via: null}]],
		['Spring', [{to: 'Sun', via: 'Flooded Reservoir (B-10)'}, {to: 'Surface', via: "Bahamut's Room (C-2)"}]],
		['Sun', [{to: 'Twin', via: "Ellmac's Chamber (D-6)"}, {to: 'Moonlight', via: "Pyramid Warp (E-3)"}]],
		['Extinction-Bottom-Main', [{to: 'Extinction', via: null}]],
		['Mausoleum', [{to: 'Spring', via: "Ribu's Pipe (D-5)"}]],
		['Ruin-Top', [{to: 'Ruin-Middle', via: null}]],
		['Ruin-Middle', [{to: 'Ruin', via: null}]],
		['Moonlight-Bottom', [{to: 'Moonlight', via: null}]],
		['Inferno', [{to: 'Extinction-Palenque', via: "Viy's Chamber (D-6)"}]],
		['Mother-Top', [{to: 'Mother-Bottom', via: "Original Shrine of the Mother (Unmarked Door)"}, {to: startfield, via: 'Surface Warp (Glitch)'}]],
	]);

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

	for (let i = 0; i < DOOR_IMAGES.length; ++i)
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

	function tryFrom(ff)
	{
		if (ff == targetfield) return [["You're already there!"]];

		let seen = new Set([ff]);
		let backtrack = new Map();
		let work = edges.get(ff) || [];

		for (let edge of work)
		{
			seen.add(edge.to);
			backtrack.set(edge.to, Object.assign({from: ff}, edge));
		}

		while (work.length && !seen.has(targetfield))
		{
			let field = work.shift().to;
			for (let exit of edges.get(field) || [])
			{
				if (seen.has(exit.to)) continue;
				work.push(exit); seen.add(exit.to);
				backtrack.set(exit.to, Object.assign({from: field}, exit));
			}
		}

		if (!seen.has(targetfield)) return [];

		let path = [[FIELD_INFO.get(targetfield).name]], field = targetfield;
		while (field != ff)
		{
			let trans = backtrack.get(field);
			if (!trans) return [];

			if (trans.via)
				path.unshift([FIELD_INFO.get(trans.from).name, 'take ' + trans.via]);
			field = trans.from;
		}

		return path;
	}

	let path = tryFrom('Mother-Top');
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

	const DOOR_NAMES = ['Amphisbaena', 'Sakit', 'Ellmac', 'Bahamut', 'Viy', 'Palenque', 'Baphomet', 'Key Fairy', '(Open)', '(Open)'];

	function importDoors(filename)
	{
		let data = fs.readFileSync(filename, 'utf8');
		let rows = new Array(DOOR_NAMES.length);

		let names = DOOR_NAMES.slice(0);
		let seen = new Set();
		for (let line of data.split(/[\r\n]+/)) if (line)
		{
			let [a, type, b] = line.split(' => ');
			if (a == 'Dimensional Corridor') continue;
			if (seen.has(a) || seen.has(b)) continue;

			// which row should this go in?
			let ndx = names.indexOf(type);
			if (ndx < 0) continue;

			seen.add(a);
			seen.add(b);
			rows[ndx] = [a, b];
			names[ndx] = null;
		}

		for (let i = 0; i < rows.length; ++i)
		{
			if (!rows[i]) continue;
			document.querySelector('#door-' + i + '-a').value = getByLogname(DOORS, rows[i][0]).name;
			document.querySelector('#door-' + i + '-b').value = getByLogname(DOORS, rows[i][1]).name;
		}
		update();
	}

	function importGates(filename)
	{
		let data = fs.readFileSync(filename, 'utf8');
		for (let line of data.split(/[\r\n]+/)) if (line)
		{
			let parts = line.split(' '), sep = -1;
			for (let i = 0; i < parts.length; ++i)
				if (parts[i].indexOf('==') != -1) sep = i;

			let ea = parts.slice(0, sep).join(' ').trim();
			let eb = parts.slice(sep+1, parts.length).join(' ').trim();

			let a = getByLogname(ENTRANCES, ea);
			let b = getByLogname(ENTRANCES, eb);
			if (!a || !b) continue;

			let select = document.querySelector('#' + a.name);
			if (select)
			{
				select.value = b.name;
				changeEntrance(select);
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
			properties: ['openDirectory'],
			title: 'Select spoiler directory (containing doors.txt and gates.txt)',
		})
		.then((f) => {
				if (!f.filePaths || !f.filePaths[0]) return;
				let foldername = f.filePaths[0];

				importDoors(path.join(foldername, 'doors.txt'));
				importGates(path.join(foldername, 'gates.txt'));
		});
	});
}
catch (e)
{
	// try-catch to hopefully allow this to run in a browser
}
