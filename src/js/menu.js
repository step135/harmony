function Menu() {
	this.init();
}

Menu.prototype = {
	container: null,
	undo: null,
	foregroundColor: null,
	backgroundColor: null,
	selector: null,
	save: null,
	clear: null,
	about: null,

	init() {
		var separator = " | ", space = " ";
		this.container = this.createContainer();
		this.undo = this.appendButton('Undo');
		this.appendTextNode(separator);
		this.foregroundColor = this.appendColorSelectorCanvas(COLOR);
		this.appendTextNode(space);
		this.backgroundColor = this.appendColorSelectorCanvas(BACKGROUND_COLOR);
		this.appendTextNode(space);
		this.selector = this.appendBrushesSelector();
		this.appendTextNode(separator);
		this.save = this.appendButton('Save');
		this.appendTextNode(space);
		this.clear = this.appendButton('Clear');
		this.appendTextNode(separator);
		this.about = this.appendButton('About');
	},
	
	setColor: function( canvas, color ) {
		var context = canvas.getContext("2d");
		context.fillStyle = 'rgb(' + color[0] + ', ' + color[1] +', ' + color[2] + ')';
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = 'rgba(0, 0, 0, 0.1)';
		context.fillRect(0, 0, canvas.width, 1);
	},

	appendBrushesSelector() {
		var select = document.createElement("select");
		for (var i = 0; i < BRUSHES.length; i++) {
			var option = document.createElement("option");
			option.id = i;
			option.innerHTML = BRUSHES[i].toUpperCase();
			select.appendChild(option);
		}
		this.container.appendChild(select);
		return select
	},

	createContainer() {
		var container = document.createElement("div");
		container.className = 'gui';
		container.style.position = 'absolute';
		container.style.top = '0px';
		return container;
	},

	appendTextNode(text) {
		var separator = document.createTextNode(text);
		this.container.appendChild(separator);
	},

	appendButton(text) {
		var button = document.createElement("span");
		button.className = 'button';
		button.innerHTML = text;
		this.container.appendChild(button);
		return button;
	},

	appendColorSelectorCanvas(color){
		var canvas = document.createElement("canvas");
		canvas.style.marginBottom = '-3px';
		canvas.style.cursor = 'pointer';
		canvas.width = 15;
		canvas.height = 15;
		this.container.appendChild(canvas);
		this.setColor( canvas, color );
		return canvas;
	}
}
