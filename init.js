dojo.provide("FxPresentation.init");

dojo.declare("Presentation", null, {
	_locked: false,
	node: "panel",
	nodes: [],
	currentSlide: 0,
	screen: "screen",
	imgCounter: 0,
	progressBar: null,
	lastSlide: null,
	slides: [
		{
			animIn: {
				onBegin: function(){
					dojo.style(this.node, "display", "block");
				},
				duration: 1000,
				properties: {
					transform: { start: "scale(0)", end: "scale(1)" }
				}
			},
			animOut: {
				duration: 1000,
				onEnd: function(){
					dojo.style(this.node, "display", "none");
				},
				properties: {
					transform: { start: "scale(1)", end: "scale(0)" }
				}
			},
			content: "<div>dojo.Deferred</div>"
				+ "<ul>"
				+ "<li><span style='color:green'>dojo.Deferred</span> refactored</li>"
				+ "<div>dojo.xhr().then(...).then(...);</div>"
				+ "</ul>"
		},
		{
			animIn: {
				onBegin: function(){
					dojo.style(this.node, {
						display: "block",
						opacity: 1
					});
				},
				duration: 1000,
				properties: {
					transform: { start: "scale(0)", end: "scale(1)" }
				}
			},
			animOut: {
				duration: 1000,
				onBegin: function(){
					dojo.style(this.node, "opacity", 1);	
				},
				onEnd: function(){
					dojo.style(this.node, "display", "none");
				},
				properties: {
					opacity: .2,
					transform: { start: "rotate(0deg) scale(1)", end: "rotate(180deg) scale(.01)" }
				}
			},
			content: "<div>Running in a <span style='color:red'>Firefox</span> extension</div>"
			+ "<ul>"
			+ "<li>set djConfig.hostEnv = \"<span style='color:red'>ff_ext</span>\"' before including dojo.js</li>"
			+ "</ul>"
		},
		{
			animIn: {
				onBegin: function(){
					dojo.style(this.node, {
						display: "block",
						opacity: 0
					})
					;
				},
				duration: 1000,
				properties: {
					opacity: { start: 0, end: 1 },
					transform: { start: "rotate(-180deg) scale(.01)", end: "rotate(360deg) scale(1)" }
				}
			},
			animOut: {
				duration: 1000,
				onEnd: function(){
					dojo.style(this.node, "display", "none");
				},
				properties: {
					opacity: 0,
					transform: { start: "scale(1)", end: "scale(2)" }
				}
			},
			content: "<div>dojo.Stateful</div>"
				+ "<ul>"
				+ "<li>A new generic interface and base class for <span style='color:green'>getting</span>, <span style='color:red'>setting</span>, and <span style='color:navy'>watching</span> for property changes</li>"
				+ "</ul>"
		},
		{
			animIn: {
				onBegin: function(){
					dojo.style(this.node, "display", "block");
				},
				duration: 1000,
				properties: {
					opacity: { start: 0, end: 1 },
					transform: { start: "scale(2)", end: "scale(1)" }
				}
			},
			animOut: {
				duration: 1000,
				onEnd: function(){
					dojo.style(this.node, "display", "none");
				},
				properties: {
					transform: { start: "scale(1,1)", end: "scale(0.01,20)" }
				}
			},
			content: "<div>Input widgets</div>"
			+ "<ul>"
			+ "<li>The width/height of the input widgets has been standardized</li>"
			+ "</ul>"
		},
		{
			animIn: {
				onBegin: function(){
					dojo.style(this.node, "display", "block");
				},
				duration: 1000,
				properties: {
					transform: { start: "scale(0.01,20)", end: "scale(1,1)" }
				}
			},
			animOut: {
				duration: 1000,
				onEnd: function(){
					dojo.style(this.node, "display", "none");
				},
				properties: {
					transform: { start: "scale(1,1)", end: "scale(20,0.01)" }
				}
			},
			content: "<div>new <span style='color:green'>placeholder</span> parameter</div>"
				+ "<div><img src='images/placeholder.jpg' /></div>"
				+ "<div class='code'>&lt;input id='date1' name='date1' type='text' dojoType='dijit.form.DateTextBox' <span style='color:green'>placeHolder</span>='Birthday' &gt;</div>"
		},
		{
			animIn: {
				onBegin: function(){
					dojo.style(this.node, "display", "block");
				},
				duration: 1000,
				properties: {
					transform: { start: "scale(20,0.01)", end: "scale(1,1)" }
				}
			},
			animOut: {
				duration: 1000,
				onEnd: function(){
					dojo.style(this.node, "display", "none");
				},
				properties: {
					transform: { start: "skew(0deg,0deg)", end: "skew(90deg,0deg)" }
				}
			},
			content: "<div>ColorPalette enhancements</div>"
				+ "<div><img src='images/colorpalette.jpg' alt='ColorPalette enhancements' /></div>"
		},
		{
			animIn: {
				onBegin: function(){
					dojo.style(this.node, "display", "block");
				},
				duration: 1000,
				properties: {
					transform: { start: "skew(-90deg,0deg)", end: "skew(0deg,0deg)" }
				}
			},
			animOut: {
				duration: 1000,
				onEnd: function(){
					dojo.style(this.node, "display", "none");
				},
				properties: {
					transform: { start: "skew(0deg,0deg)", end: "skew(0deg,90deg)" }
				}
			},
			content: "<div>dijit.Dialog <span style='color:blue'>action bar</span></div>"
				+ "<div><img src='images/actionbar.jpg' alt='action bar' /></div>"
		},
		{
			animIn: {
				onBegin: function(){
					dojo.style(this.node, "display", "block");
				},
				duration: 1000,
				properties: {
					transform: { start: "skew(0deg,270deg)", end: "skew(0deg,360deg)" }
				}
			},
			animOut: {
				duration: 1000,
				onEnd: function(){
					dojo.style(this.node, "display", "none");
				},
				properties: {
					transform: { start: "skew(0deg,0deg)", end: "skew(90deg,90deg)" }
				}
			},
			content: "<div><span style='color:orange'>claro</span>: new Dijit and DojoX Grid theme</div>"
				+ "<div><img src='images/claro.jpg' alt='claro theme' /></div>"
		},
		{
			animIn: {
				onBegin: function(){
					dojo.style(this.node, "display", "block");
				},
				duration: 1000,
				properties: {
					transform: { start: "skew(270deg,270deg)", end: "skew(360deg,360deg)" }
				}
			},
			animOut: {
				duration: 1000,
				onEnd: function(){
					dojo.style(this.node, "display", "none");
				},
				properties: {
					transform: { start: "scale(1, 1) skew(0deg,360deg)", end: "scale(0, 1) skew(0deg,340deg)" }
				}
			},
			content: "<div>New chart themes</div>"
				+ "<div><img src='images/chart.jpg' alt='new chart themes' /></div>"
		},
		{
			animIn: {
				onBegin: function(){
					dojo.style(this.node, {
						display: "block",
						transformOrigin: "450px 235px"
					});
				},
				duration: 1000,
				properties: {
					transform: { start: "scale(0, 1) skew(0deg,20deg)", end: "scale(1, 1) skew(0deg,0deg)" }
				}
			},
			animOut: {
				duration: 1000,
				onBegin: function(){
					dojo.style(this.node, "transformOrigin", "900px 0");
				},
				properties: {
					transform: { start: "rotate(0deg)", end: "rotate(90deg)" }
				}
			},
			content: "<div>dojox.Geo</div>"
				+ "<div><img src='images/geo.jpg' alt='dojox.geo' /></div>"
						
		},
		{
			animIn: {
				onBegin: function(){
					dojo.style(this.node, {
						display: "block",
						transformOrigin: "0 0",
						top: 0
					});
				},
				duration: 1000,
				properties: {
					transform: { start: "rotate(90deg)", end: "rotate(0deg)" }
				}
			},
			animOut: {
				duration: 1000,
				onEnd: function(){
					dojo.style(this.node, "display", "none");
				},
				properties: {
					top:600
				}
			},
			content: "<div>new dojox editor plugins</div>"
					+ "<div><img src='images/editor.jpg' alt='editor plugins' /></div>"

		},
		{
			animIn: {
				onBegin: function(){
					dojo.style(this.node, "display", "block");
				},
				duration: 1000,
				properties: {
					top: { start: 600, end: 0 }
				}
			},
			animOut: {
				duration: 1000,
				onEnd: function(){
					dojo.style(this.node, "display", "none");
				},
				properties: {
					top: { start: 0, end: 600 }
				}
			},
			content: "<div>css transformations</div>"
						+ "<div><img src='images/css3.jpg' alt='css transformations' /></div>"

		}
	],
	footer: "<div class='footer'>www.dojotoolkit.org - dojo 1.5 presentation</div>",
	images: [
		{
			src: "chart.jpg",
			img: null
		},
		{
			src: "placeholder.jpg",
			img: null
		},
		{
			src: "geo.jpg",
			img: null
		},
		{
			src: "colorpalette.jpg",
			img: null
		},
		{
			src: "editor.jpg",
			img: null
		},
		{
			src: "css3.jpg",
			img: null
		},
		{
			src: "actionbar.jpg",
			img: null
		},
		{
			src: "claro.jpg",
			img: null
		},
		{
			src: "dojo.png",
			img: null
		}
	],
	constructor: function(){
		dojo.style("progressContainer", "transform", "rotate(-12deg)");
		dojo.byId("preload").innerHTML = "loading images";
		this.progressBar = new dijit.ProgressBar({
			width:300,
			maximum: this.images.length,
			progress: 0
		},"progress");
		this.preloadImages();
	},
	onImageLoad: function(){
		this.imgCounter++;
		this.progressBar.update({
			progress: this.imgCounter
		});
		if(this.imgCounter == this.images.length){
			this.progressBar.destroy();
			dojo.destroy("progressContainer");
			this.start();
		}
	},
	preloadImages: function(){
		var images = this.images;
		for(var i = 0, l = this.images.length; i < l; i++){
			images[i].img = new Image();
			images[i].img.onload = dojo.hitch(this, this.onImageLoad);
			images[i].img.src = "images/" + images[i].src;
		}
	},

	flip: function(args){
		var anims = [],
			whichAnims = args.whichAnims || [0, 1, 2, 3],
				direction = args.direction || 1,
			transforms = [
				{ start: "scale(1, 1) skew(0deg,0deg)", end: "scale(0, 1) skew(0," + (direction * 30) + "deg)" },
				{ start: "scale(0, 1) skew(0deg," + (direction * 30) + "deg)", end: "scale(-1, 1) skew(0deg,0deg)" },
				{ start: "scale(-1, 1) skew(0deg,0deg)", end: "scale(0, 1) skew(0deg," + (-direction * 30) + "deg)" },
				{ start: "scale(0, 1) skewX(0deg) skewY(" + (-direction * 30) + "deg)", end: "scale(1, 1) skewX(0deg) skewY(0deg)" }
		];
		for(var i = 0; i < whichAnims.length; i++){
			anims.push(dojo.animateProperty(
				dojo.mixin({
				node: args.node,
				duration: args.duration || 600,
				properties: {
					transform: transforms[whichAnims[i]]
				}}, args)
			));
		}
		return dojo.fx.chain(anims);
	},

	lastAnim: function(){
		var target = this.slides[this.currentSlide].node, pn = target.parentNode,
			clones = [], lastSlidesClones = [], lastSlide = this.lastSlide, self = this;
		for(var i = 0; i < 10; i++){
			var c = dojo.clone(target);
			pn.appendChild(c);
			dojo.style(c, "clip", "rect(" + i*90 + "px, 900px, " + (i+1)*90 + "px, 0px)");
			clones.push(c);

			c = dojo.clone(lastSlide);
			pn.appendChild(c);
			dojo.style(c, "clip", "rect(" + i*90 + "px, 900px, " + (i+1)*90 + "px, 0px)");
			lastSlidesClones.push(c);
		}
		dojo.style(target, "display", "none");
		dojo.forEach(clones, function(item, i){
			dojo.fx.chain([
				self.flip({
					whichAnims:[0],
					node: clones[i]
				}),
				self.flip({
					onBegin: function(){
						dojo.style(this.node, "display", "block");
					},
					onEnd: function(){
						if(i === 9){
							dojo.style(lastSlide, "display", "block");
							for(var j = 0; j < 10; j++){
								dojo.destroy(clones[j]);
								dojo.destroy(lastSlidesClones[j]);
							}
							self.currentSlide = self.slides.length;
							self._locked = false;
						}
					},
					whichAnims:[3],
					node: lastSlidesClones[i]
				})
			]).play(120*i);
		});
	},
	changeSlide: function(direction){
		var anims = [], nextSlide, self = this;
		nextSlide = this.currentSlide + direction;
		if(nextSlide < 0 || nextSlide == this.slides.length){
			return;
		}
		anims[0] = dojo.animateProperty(dojo.mixin(this.slides[this.currentSlide].animOut, {
			node: this.slides[this.currentSlide].node
		}));
		this.currentSlide = nextSlide;
		anims[1] = dojo.animateProperty(dojo.mixin(this.slides[this.currentSlide].animIn, {
			node: this.slides[this.currentSlide].node
		}));
		var anim = dojo.fx.chain(anims);
		dojo.connect(anim, "onEnd", function(){
			self._locked = false;
		});
		anim.play();
	},
	start: function(){
		var slides = this.slides,
			navBar = dojo.create("div", {
				className: "navbar",
				innerHTML: "<div class='buttons'><div id='back'><img id='p' src='images/prev.png' alt='back'/></div> <div id='forward'><img id='n' src='images/next.png' alt='forward' /></div></div>"
			}, this.node)
		;
		for(var i = 0, l = slides.length; i < l; i++){
			this.slides[i].node = dojo.create("div",{
				className: "slide",
				innerHTML: slides[i].content + this.footer
			}, this.node, "first");
		}
		this.lastSlide = dojo.create("div", {
			className: "lastslide",
			innerHTML: "<div class='container'>" +
					"<img src='images/dojo.png' alt='dojo' />" +
					"<div>Unbeatable JavaScript Tools</div>" +
					"</div>"
		}, this.node, "first");
		dojo.connect(navBar, "onclick", this, "handleEvents");
		dojo.connect(dojo.doc, "onkeypress", this, "handleEvents");
		dojo.style(this.slides[0].node, "display", "block");
	},
	handleEvents:function(evt){
		if(this._locked){
			return;
		}
		var target = evt.type == "keypress" ? evt.keyChar : evt.target.id, direction = 0;
		switch(target){
			case "p":
				if(this.currentSlide === 0){
					return;
				}
				if(this.currentSlide === this.slides.length){
					dojo.style(this.slides[--this.currentSlide].node, "display", "block");
					dojo.style(this.lastSlide, "display", "none");
					this._locked = false;
					return;
				}
				direction = -1;
			break;
			case "n":
				if(this.currentSlide == this.slides.length-1){
					this.lastAnim();
					return;
				}else if(this.currentSlide >= this.slides.length){
					this._locked = false;
					return;
				}
				direction = 1;
			break;
			default:
				return;
			break;
		}
		this._locked = true;
		this.changeSlide(direction);
	}
});

dojo.ready(function(){
	new Presentation;
});