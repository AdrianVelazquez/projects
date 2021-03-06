(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 320,
	height: 1200,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/BlueGradientImage.png", id:"BlueGradientImage"},
		{src:"images/img_athlete1.png", id:"img_athlete1"},
		{src:"images/img_athlete2.png", id:"img_athlete2"},
		{src:"images/img_facilities.png", id:"img_facilities"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.BlueGradientImage = function() {
	this.initialize(img.BlueGradientImage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.img_athlete1 = function() {
	this.initialize(img.img_athlete1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,900);


(lib.img_athlete2 = function() {
	this.initialize(img.img_athlete2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,901);


(lib.img_facilities = function() {
	this.initialize(img.img_facilities);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,900);


(lib.shape_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0072B8").s().p("EgoDAO2MAmfgw1MgcQA1MMAq8g7EMgV9AwiIqNV7MAydhN6MghYBWlILv1IMAaOgusMgWjBF+IAEAAMAajg2PMgQ7A7yMgn+AAXg");
	this.shape.setTransform(256.5,303);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,513,605.9);


(lib.textheadline3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABkG6IjAonIgCAAIAAInIiJAAIAAtzICNAAIC3H4IACAAIAAn4ICJAAIAANzg");
	this.shape.setTransform(63.4,486.8,0.429,0.429);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjTG6IAAtzIGVAAIAACEIj8AAIAADkIDCAAIAACDIjCAAIAAEEIENAAIAACEg");
	this.shape_1.setTransform(39.2,486.8,0.429,0.429);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiBBXIBgiuICkAAIifCug");
	this.shape_2.setTransform(127.5,460.8,0.429,0.429);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AivGDQg4g9AAhjIAAnFQAAhjA4g9QA+hCBxAAQByAAA9BCQA5A9AABjIAAHFQAABjg5A9Qg9BChyAAQhxAAg+hCgAg+koQgRAWAAAzIAAG+QAAAzARAXQATAYArAAQAsAAATgYQARgXAAgzIAAm+QAAgzgRgWQgTgYgsAAQgrAAgTAYg");
	this.shape_3.setTransform(121.9,486.8,0.429,0.429);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABuG6IgbjEIilAAIgbDEIiTAAICjtzIC7AAICjNzgAg8ByIB5AAIg8l6IgBAAg");
	this.shape_4.setTransform(276.5,486.8,0.429,0.429);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjSG6IAAtzIGUAAIAACEIj8AAIAADkIDBAAIAACDIjBAAIAAEEIEOAAIAACEg");
	this.shape_5.setTransform(252.9,486.8,0.429,0.429);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AipF9Qg7hEgEhoICQgVQAEBCAZAjQAYAhAkAAQAoAAAXgVQAZgVAAgnQAAg5gwg3QgVgYhThIQhKg8ghgxQgwhHAAhWQAAhpA+g6QA9g5BuAAQBaAAA5A8QA2A6AKBgIiRAQQgEg0gZgZQgVgVgeAAQgjAAgUAXQgTAXAAApQAAAxAwA1QARATBXBNQBJA9AhAyQAwBIAABRQAABrhCA9QhBA6hrAAQhlAAg/hJg");
	this.shape_6.setTransform(229.2,486.8,0.429,0.429);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjSG6IAAtzIGVAAIAACEIj+AAIAADkIDCAAIAACDIjCAAIAAEEIEPAAIAACEg");
	this.shape_7.setTransform(197,486.8,0.429,0.429);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjnG6IAAtzIDhAAQDuAAAAELIAAFdQAAELjuAAgAhPE9IA0AAQA7AAAYgbQAYgbAAhGIAAmBQAAhGgYgbQgYgbg7AAIg0AAg");
	this.shape_8.setTransform(172.6,486.8,0.429,0.429);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABkG6Ii/onIgDAAIAAInIiKAAIAAtzICNAAIC4H4IACAAIAAn4ICJAAIAANzg");
	this.shape_9.setTransform(147.2,486.8,0.429,0.429);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjoG6IAAtzIDiAAQDvAAgBELIAAFdQABELjvAAgAhQE9IA1AAQA8AAAYgbQAXgbAAhGIAAmBQAAhGgXgbQgYgbg8AAIg1AAg");
	this.shape_10.setTransform(96.6,486.8,0.429,0.429);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABuHlIjTpdIgCAAIAAJdIiXAAIAAvJICbAAIDJIpIADAAIAAopICWAAIAAPJg");
	this.shape_11.setTransform(276.6,295.5,0.429,0.429);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjAGqQg+hDAAhtIAAnyQAAhuA+hDQBEhIB8gBQB9ABBEBIQA+BDAABuIAAHyQAABtg+BDQhEBIh9ABQh8gBhEhIgAhElGQgTAZgBA4IAAHrQABA4ATAZQAVAaAvABQAwgBAVgaQATgZAAg4IAAnrQAAg4gTgZQgUgagxgBQgvABgVAag");
	this.shape_12.setTransform(248.8,295.5,0.429,0.429);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ai8GqQg+hDAAhtIAAnyQAAhuA+hDQBEhIB7gBQB4AABDBPQA9BJAABzIAABHIinAAIAAhLQAAg6gYggQgWgcgjAAQguABgVAaQgTAZAAA4IAAHrQAAA4ATAZQAVAaAuABQAsgBATgZQASgXAAgyIAAh1ICnAAIAABwQAABtg9BDQhDBIh4ABQh7gBhEhIg");
	this.shape_13.setTransform(221.1,295.5,0.429,0.429);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AB4HlIgdjXIi1AAIgeDXIihAAICyvJIDOAAICzPJgAhCB8ICEAAIhBmfIgBAAg");
	this.shape_14.setTransform(183.5,295.5,0.429,0.429);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AkNHlIAAvJIDvAAQCbAABHBCQBKBEAACYQAACahKBCQhHBBibAAIhIAAIAAGOgAhmgwIBAAAQBQAAAfggQAegfAAhXQAAhWgeggQgfgfhQAAIhAAAg");
	this.shape_15.setTransform(158.4,295.5,0.429,0.429);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ADBHlIAAr1IgDAAIiWL1IhPAAIiWr1IgDAAIAAL1IiSAAIAAvJIDcAAIB2I2IABAAIB2o2IDcAAIAAPJg");
	this.shape_16.setTransform(126.4,295.5,0.429,0.429);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AB4HlIgdjXIi1AAIgeDXIihAAICzvJIDNAAICzPJgAhCB8ICFAAIhCmfIgBAAg");
	this.shape_17.setTransform(95.6,295.5,0.429,0.429);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ai8GqQg+hDAAhtIAAnyQAAhuA+hDQBEhIB8gBQB3AABDBPQA9BJAABzIAABHIinAAIAAhLQAAg6gYggQgVgcgjAAQgvABgVAaQgTAZAAA4IAAHrQAAA4ATAZQAVAaAvABQAsgBATgZQARgXAAgyIAAh1ICnAAIAABwQAABtg9BDQhDBIh3ABQh8gBhEhIg");
	this.shape_18.setTransform(68.8,295.5,0.429,0.429);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AB4HlIgdjXIi1AAIgeDXIihAAICzvJIDNAAICzPJgAhCB8ICEAAIhBmfIgBAAg");
	this.shape_19.setTransform(42.2,295.5,0.429,0.429);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AlSLFIAA2JIKKAAIAADUImWAAIAAFuIE4AAIAADSIk4AAIAAGhIGxAAIAADUg");
	this.shape_20.setTransform(273,423,0.429,0.429);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah4LFIAAy1IjsAAIAAjUILJAAIAADUIjsAAIAAS1g");
	this.shape_21.setTransform(236.6,423,0.429,0.429);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ah4LFIAA2JIDxAAIAAWJg");
	this.shape_22.setTransform(209,423,0.429,0.429);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AmJLFIAA2JIFdAAQDjAABoBgQBrBjAADfQAADghrBhQhoBgjjAAIhqAAIAAJGgAiWhIIBeAAQB3AAArgtQAtgvAAh+QAAh9gtgvQgrgth3AAIheAAg");
	this.shape_23.setTransform(178.6,423,0.429,0.429);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AEbLFIAAxTIgEAAIjdRTIhzAAIjcxTIgEAAIAARTIjVAAIAA2JIFBAAICtM8IACAAICss8IFBAAIAAWJg");
	this.shape_24.setTransform(131.9,423,0.429,0.429);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AkZJuQhbhhAAigIAArZQAAigBbhhQBjhrC2AAQC2AABkBrQBbBhAACgIAALZQAACghbBhQhkBqi2AAQi2AAhjhqgAhlndQgcAlAABSIAALNQAABSAcAkQAfAnBGAAQBHAAAegnQAcgkAAhSIAArNQAAhSgcglQgegnhHABQhGgBgfAng");
	this.shape_25.setTransform(86.3,423,0.429,0.429);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AkTJuQhbhhAAigIAArZQAAigBbhhQBjhrC1AAQCvABBhByQBaBqAACpIAABnIj0AAIAAhtQAAhVgkguQgfgogzAAQhFgBgeAnQgcAlAABSIAALNQAABSAcAkQAeAnBFAAQBAAAAcglQAagiAAhIIAAirID0AAIAACjQAACfhaBiQhgBqiwAAQi1AAhjhqg");
	this.shape_26.setTransform(45.8,423,0.429,0.429);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AjlICQhPhcgGiMIDDgcQAGBYAhAvQAgAtAxAAQA3AAAfgcQAhgdAAg0QAAhOhBhKQgcgfhxhiQhjhSgshBQhBhgAAhzQAAiPBThNQBShOCWAAQB6AABMBSQBIBNAOCCIjDAWQgGhGgigjQgcgbgpAAQgvAAgbAfQgaAeAAA4QAABDBBBHQAWAYB3BpQBiBTAtBDQBBBgAABuQAACQhaBSQhXBQiRAAQiJAAhVhjg");
	this.shape_27.setTransform(274.5,350.3,0.429,0.429);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AjsILQhNhSABiGIAAplQgBiGBNhSQBThaCZAAQCZAABUBaQBMBSABCGIAAJlQgBCGhMBSQhUBaiZAAQiZAAhThagAhUmRQgXAfAABFIAAJbQAABFAXAfQAZAgA7AAQA7AAAaggQAXgfABhFIAApbQgBhFgXgfQgaggg7AAQg7AAgZAgg");
	this.shape_28.setTransform(241.5,350.3,0.429,0.429);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AB8JUIiQnuQgmAFhDAAIAAHpIjNAAIAAynIEfAAQCuAABUBQQBWBVAAC7QAACDgtBPQgkA9g+AcICuIcgAh9g8IBIAAQBSAAAigmQAigoAAhpQAAhpgigoQgignhSAAIhIAAg");
	this.shape_29.setTransform(208.1,350.3,0.429,0.429);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhlJUIAAv1IjGAAIAAiyIJXAAIAACyIjGAAIAAP1g");
	this.shape_30.setTransform(175.5,350.3,0.429,0.429);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AjsILQhMhSgBiGIAAplQABiGBMhSQBUhaCYAAQCZAABUBaQBNBSgBCGIAAJlQABCGhNBSQhUBaiZAAQiYAAhUhagAhUmRQgYAfABBFIAAJbQgBBFAYAfQAaAgA6AAQA8AAAZggQAYgfgBhFIAApbQABhFgYgfQgZggg8AAQg6AAgaAgg");
	this.shape_31.setTransform(143.9,350.3,0.429,0.429);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AjlICQhPhcgGiMIDDgcQAGBYAhAvQAgAtAxAAQA3AAAfgcQAhgdAAg0QAAhOhBhKQgcgfhxhiQhjhSgshBQhBhgAAhzQAAiPBThNQBShOCWAAQB6AABMBSQBIBNAOCCIjDAWQgGhHgigiQgcgbgpAAQgvAAgbAfQgaAeAAA4QAABDBBBHQAWAYB3BpQBiBTAtBDQBBBgAABuQAACQhaBSQhXBQiRAAQiJAAhVhjg");
	this.shape_32.setTransform(110.7,350.3,0.429,0.429);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AjsILQhMhSgBiGIAAplQABiGBMhSQBUhaCYAAQCZAABUBaQBNBSgBCGIAAJlQABCGhNBSQhUBaiZAAQiYAAhUhagAhUmRQgXAfgBBFIAAJbQABBFAXAfQAZAgA7AAQA8AAAZggQAXgfAAhFIAApbQAAhFgXgfQgZggg8AAQg7AAgZAgg");
	this.shape_33.setTransform(77.7,350.3,0.429,0.429);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ACHJUIkDrnIgDAAIAALnIi6AAIAAynIC+AAID4KoIADAAIAAqoIC6AAIAASng");
	this.shape_34.setTransform(43.5,350.3,0.429,0.429);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.textheadline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADJMmIgxllIkuAAIgxFlIkNAAIEq5LIFWAAIEpZLgAhuDQIDdAAIhtqzIgDAAg");
	this.shape.setTransform(269.4,114.9,0.433,0.434);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AC2MmIlfvuIgDAAIAAPuIj7AAIAA5LIEBAAIFQOZIADAAIAAuZID7AAIAAZLg");
	this.shape_1.setTransform(223.3,114.9,0.433,0.434);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJMmIAA5LIETAAIAAZLg");
	this.shape_2.setTransform(188.2,114.9,0.433,0.434);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AFBMmIAAzqIgEAAIj6TqIiFAAIj6zqIgEAAIAATqIjxAAIAA5LIFrAAIDFOtIADAAIDFutIFrAAIAAZLg");
	this.shape_3.setTransform(147.2,114.9,0.433,0.434);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlALDQhnhvAAi1IAAs9QAAi1BnhvQBxh5DPAAQDPAAByB5QBnBvAAC1IAAM9QAAC1hnBvQhyB5jPAAQjPAAhxh5gAhyoeQggApAABeIAAMvQAABeAgApQAiAsBQAAQBRAAAigsQAggpAAheIAAsvQAAhegggpQgigshRAAQhQAAgiAsg");
	this.shape_4.setTransform(94.9,114.9,0.433,0.434);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmnMmIAA5LIGbAAQG0AAAAHnIAAJ9QAAHnm0AAgAiSJDIBgAAQBtAAAsgyQAsgxAAh/IAArBQAAh+gsgyQgsgxhtAAIhgAAg");
	this.shape_5.setTransform(48.4,114.9,0.433,0.434);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkaJwQhbhhAAigIAArdQAAigBbhhQBkhrC2AAQC3AABkBrQBbBhAACgIAALdQAACghbBhQhkBri3AAQi3AAhjhrgAhlneQgcAkAABTIAALPQAABTAcAkQAeAoBHAAQBHAAAegoQAdgkAAhTIAArPQAAhTgdgkQgegnhHAAQhHAAgeAng");
	this.shape_6.setTransform(273.8,193.1,0.433,0.434);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkUJ6QhbhjAAioIAArdQAAifBZhiQBhhrCtAAQCtgBBkB0QBcBrAACoIAABbIjpAAQAAibgig7Qgfg2hJAAQhtAAAACcIAALZQAABJAaAkQAcAqA9AAQBHgBAfgtQAegtAAhrIAAiKIiaAAIAAi/IGOAAIAALQIh2AAIgthrQg6BFgyAbQg4AfhRgBQiTAAhZhhg");
	this.shape_7.setTransform(232.7,193.1,0.433,0.434);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlULIIAA2PIKNAAIAADVImYAAIAAFvIE5AAIAADTIk5AAIAAGiIG0AAIAADWg");
	this.shape_8.setTransform(194.6,193.1,0.433,0.434);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkRJwQhkhjAAi2IAAwnID0AAIAAQwQAABPAgAmQAgAoBBAAQBCAAAggoQAggmAAhPIAAwwID0AAIAAQnQAAC2hkBjQhiBhiwAAQivAAhihhg");
	this.shape_9.setTransform(154.7,193.6,0.433,0.434);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjSLRIAAjUIAzAAQBFAAAegeQAdgcAAg9IAAxWIDzAAIAARyQgBCThGBIQhRBUi9AAg");
	this.shape_10.setTransform(120.6,193.6,0.433,0.434);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ak5LIIAA2PID0AAIAAS5IF/AAIAADWg");
	this.shape_11.setTransform(80.6,193.1,0.433,0.434);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlULIIAA2PIKNAAIAADVImYAAIAAFvIE5AAIAADTIk5AAIAAGiIG0AAIAADWg");
	this.shape_12.setTransform(44.8,193.1,0.433,0.434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.textheadline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai3GcQg/hJgGhxICdgWQAEBGAbAmQAaAkAnAAQArAAAZgXQAbgXAAgpQAAg/g0g7QgXgZhahOQhQhBgjg1Qg0hNAAhcQAAhzBDg+QBCg+B3AAQBiAAA9BCQA6A9AMBpIidARQgEg4gcgbQgWgXghAAQgmAAgVAZQgWAYABAtQgBA2A0A5QATATBeBUQBPBCAlA2QA0BNAABYQAAB0hIBBQhHBAhzAAQhuAAhEhPg");
	this.shape.setTransform(279,171.7,0.433,0.433);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjjHeIAAu7IG1AAIAACPIkRAAIAAD3IDSAAIAACNIjSAAIAAEYIEkAAIAACQg");
	this.shape_1.setTransform(254.3,171.7,0.433,0.433);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aj6HeIAAu7ID0AAQEBAAAAEhIAAF5QAAEhkBAAgAhWFWIA5AAQBAAAAagdQAagdAAhLIAAmhQAAhLgageQgagdhAAAIg5AAg");
	this.shape_2.setTransform(227.7,171.7,0.433,0.433);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AB3HeIgejUIiyAAIgdDUIieAAICvu7IDLAAICvO7gAhBB7ICDAAIhBmZIgBAAg");
	this.shape_3.setTransform(200.4,171.7,0.433,0.433);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Aj6HeIAAu7ID0AAQEBAAAAEhIAAF5QAAEhkBAAgAhWFWIA5AAQBAAAAagdQAagdAAhLIAAmhQAAhLgageQgagdhAAAIg5AAg");
	this.shape_4.setTransform(173.9,171.7,0.433,0.433);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhQHeIAAu7ICiAAIAAO7g");
	this.shape_5.setTransform(153.1,171.7,0.433,0.433);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjSHeIAAu7IClAAIAAMrIEAAAIAACQg");
	this.shape_6.setTransform(135.4,171.7,0.433,0.433);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhRHeIAAu7ICjAAIAAO7g");
	this.shape_7.setTransform(116.6,171.7,0.433,0.433);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AkBHeIAAu7ID0AAQD8AAAAD9QAABDgbA0QgeA7g5AWQBCAbAgA0QAjA4AABaQAAB/g7BGQhBBQiFAAgAhdFWIBFAAQA+AAAdglQAagjAAhLQAAhLgegjQghglhGAAIg1AAgAhdhVIA8AAQAuAAAegfQAgghAAg6QAAiHhpAAIg/AAg");
	this.shape_8.setTransform(95.9,171.7,0.433,0.433);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AB3HeIgdjUIiyAAIgeDUIifAAICxu7IDKAAICwO7gAhBB7ICDAAIhBmZIgBAAg");
	this.shape_9.setTransform(68.2,171.7,0.433,0.433);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABXHeIAAmoIitAAIAAGoIikAAIAAu7ICkAAIAAGGICtAAIAAmGICkAAIAAO7g");
	this.shape_10.setTransform(40.9,171.7,0.433,0.433);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiCEmQgug0gEhQIBwgQQADAyAUAbQASAaAcgBQAfABARgRQAUgQgBgeQAAgtglgqQgQgShAg4Qg5gugZglQglg4AAhCQAAhRAvgtQAvgsBWAAQBFAAAtAvQApAsAHBLIhvAMQgDgogUgUQgQgQgXAAQgbAAgPASQgQASAAAfQAAAmAmApQANAPBDA7QA4AwAaAmQAmA4AAA+QAABTg0AvQgyAthTAAQhOAAgwg5g");
	this.shape_11.setTransform(282.2,130.2,0.433,0.433);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiCErQgxgvABhYIAAn9IB1AAIAAICQAABLA9AAQA+AAAAhLIAAoCIB2AAIAAH9QAABYgxAvQguAvhVAAQhUAAgugvg");
	this.shape_12.setTransform(263,130.4,0.433,0.433);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag5FWIAApEIhyAAIAAhmIFXAAIAABmIhxAAIAAJEg");
	this.shape_13.setTransform(244.6,130.2,0.433,0.433);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABVFWIgViYIh/AAIgUCYIhzAAIB+qqICQAAIB+KqgAguBXIBdAAIgvkjIAAAAg");
	this.shape_14.setTransform(220.1,130.2,0.433,0.433);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABNFWIiTmqIgCAAIAAGqIhrAAIAAqqIBtAAICOGEIABAAIAAmEIBrAAIAAKqg");
	this.shape_15.setTransform(200.5,130.2,0.433,0.433);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiHEsQgsgvABhNIAAlfQgBhNAsgvQAwgzBXAAQBYAAAvAzQAsAwABBMIAAFfQgBBNgsAvQgvAzhYAAQhXAAgwgzgAgvjlQgOASAAAnIAAFZQAAAnAOASQAOASAhAAQAiAAAOgSQAOgSAAgnIAAlZQAAgngOgSQgOgTgiAAQghAAgOATg");
	this.shape_16.setTransform(180.7,130.2,0.433,0.433);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag5FWIAAqqIBzAAIAAKqg");
	this.shape_17.setTransform(165.9,130.2,0.433,0.433);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiEEsQgsgvAAhNIAAlfQAAhNAsgvQAwgzBXAAQBUAAAvA4QArAyAABRIAAAzIh2AAIAAg2QAAgogRgXQgPgTgYAAQghAAgPATQgNASAAAnIAAFZQAAAnANASQAPASAhAAQAfABANgTQAMgQAAgiIAAhTIB2AAIAABPQAABMgrAwQgvAzhUAAQhXAAgwgzg");
	this.shape_18.setTransform(151.1,130.2,0.433,0.433);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiEEsQgsgvAAhNIAAlfQAAhMAsgwQAwgzBWAAQBVAAAvA4QArAyAABRIAAAzIh2AAIAAg2QAAgogRgXQgPgTgZAAQggAAgPATQgNASAAAnIAAFZQAAAnANASQAPASAgAAQAfABAOgTQAMgQAAgiIAAhTIB2AAIAABPQAABMgrAwQgvAzhVAAQhWAAgwgzg");
	this.shape_19.setTransform(131.5,130.2,0.433,0.433);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiiFWIAAqqIE5AAIAABmIjDAAIAACwICVAAIAABlIiVAAIAADIIDPAAIAABng");
	this.shape_20.setTransform(113.2,130.2,0.433,0.433);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiiFWIAAqqIFFAAIAABmIjQAAIAACwICbAAIAABlIibAAIAAEvg");
	this.shape_21.setTransform(95.3,130.2,0.433,0.433);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABGFWIhRkcQgWADgnAAIAAEZIh1AAIAAqqIClAAQBjgBAwAvQAyAwAABrQAACHhTAjIBkE3gAhIghIAqAAQAvAAASgXQAUgWAAg9QAAg8gUgXQgSgWgvAAIgqAAg");
	this.shape_22.setTransform(76.3,130.2,0.433,0.433);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AijFWIAAqqIE5AAIAABmIjDAAIAACwICVAAIAABlIiVAAIAADIIDRAAIAABng");
	this.shape_23.setTransform(57.3,130.2,0.433,0.433);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ai9FWIAAqqICoAAQBtgBAyAvQA0AvAABsQAABsg0AuQgyAuhtAAIgyAAIAAEZgAhHghIAtAAQA3AAAWgXQAVgWABg9QgBg9gVgWQgWgWg3AAIgtAAg");
	this.shape_24.setTransform(38.3,130.2,0.433,0.433);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.img_facilities_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_facilities();
	this.instance.setTransform(0,0,1.333,1.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Artwork
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7CAIAAj/IBzAAIAAAYIhXAAIAABXIBAAAIAAAWIhAAAIAABiIBbAAIAAAYg");
	this.shape.setTransform(80.8,306.4,0.541,0.541);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhCCAIAAj/IAwAAQApAAAVAcQAXAeAABFQAABGgXAeQgVAcgpAAgAgmBoIAPAAQAfAAAOgTQARgYAAg9QAAg8gRgYQgOgTgfAAIgPAAg");
	this.shape_1.setTransform(72,306.4,0.541,0.541);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhHAAQAAiCBHAAQBIAAAACCQAACDhIAAQhHAAAAiDgAgfhVQgNAaABA7QgBA8ANAaQALAWAUAAQAUAAALgWQANgaAAg8QAAg7gNgaQgLgWgUAAQgUAAgLAWg");
	this.shape_2.setTransform(249.1,306.4,0.541,0.541);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLCAIg9j/IAcAAIAsDKIAAAAIAtjKIAcAAIg8D/g");
	this.shape_3.setTransform(240.6,306.4,0.541,0.541);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMCAIAAj/IAZAAIAAD/g");
	this.shape_4.setTransform(234.6,306.4,0.541,0.541);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNCAIAAjnIg0AAIAAgYICDAAIAAAYIg1AAIAADng");
	this.shape_5.setTransform(228.9,306.4,0.541,0.541);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlCAIgnh6IgkACIAAB4IgcAAIAAj/IA+AAQAeAAATASQATASAAAfQAAAwgpANIAsB/gAgmgOIAYAAQAbAAAMgMQAMgKAAgXQAAgWgMgLQgMgLgbAAIgYAAg");
	this.shape_6.setTransform(221,306.4,0.541,0.541);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhHAAQAAiCBHAAQBIAAAACCQAACDhIAAQhHAAAAiDgAgfhVQgMAaAAA7QAAA8AMAaQALAWAUAAQAUAAALgWQANgaAAg8QAAg7gNgaQgLgWgUAAQgUAAgLAWg");
	this.shape_7.setTransform(211.7,306.4,0.541,0.541);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/CAIAAj/IA9AAQAdAAASATQATAUAAAgQAAAggTATQgSARgdAAIghAAIAAB0gAgjgKIAdAAQAqAAAAguQAAgvgqAAIgdAAg");
	this.shape_8.setTransform(203.1,306.4,0.541,0.541);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag7CAIAAj/IBzAAIAAAYIhYAAIAABXIBAAAIAAAWIhAAAIAABiIBcAAIAAAYg");
	this.shape_9.setTransform(195,306.4,0.541,0.541);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhCCAIAAj/IAwAAQApAAAVAcQAXAeAABFQAABGgXAeQgVAcgpAAgAgmBoIAPAAQAfAAAOgTQARgYAAg9QAAg8gRgYQgOgTgfAAIgPAAg");
	this.shape_10.setTransform(186.2,306.4,0.541,0.541);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhHAAQAAiCBHAAQBIAAAACCQAACDhIAAQhHAAAAiDgAgehVQgNAaAAA7QAAA8ANAaQALAWATAAQAVAAAKgWQANgaABg8QgBg7gNgaQgKgWgVAAQgTAAgLAWg");
	this.shape_11.setTransform(174.5,306.4,0.541,0.541);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMCAIAAjnIg1AAIAAgYICDAAIAAAYIg0AAIAADng");
	this.shape_12.setTransform(166.5,306.4,0.541,0.541);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAnCAIhOjdIgBAAIAADdIgbAAIAAj/IArAAIBAC7IABAAIAAi7IAbAAIAAD/g");
	this.shape_13.setTransform(158.1,306.4,0.541,0.541);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag8CAIAAj/IB0AAIAAAYIhYAAIAABXIBAAAIAAAWIhAAAIAABiIBdAAIAAAYg");
	this.shape_14.setTransform(149.7,306.4,0.541,0.541);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA+CAIAAjqIAAAAIg1DqIgRAAIg1jqIAAAAIAADqIgaAAIAAj/IAsAAIArDAIAAAAIAsjAIAsAAIAAD/g");
	this.shape_15.setTransform(139.5,306.4,0.541,0.541);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAvCAIgPhMIg/AAIgQBMIgbAAIA4j/IAlAAIA4D/gAgbAcIA3AAIgciIIAAAAg");
	this.shape_16.setTransform(129.5,306.4,0.541,0.541);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag/CAIAAj/IA9AAQAdAAASATQATAUAAAgQAAAggTATQgSARgdAAIghAAIAAB0gAgjgKIAdAAQAqAAAAguQAAgvgqAAIgdAAg");
	this.shape_17.setTransform(122.1,306.4,0.541,0.541);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA/CAIAAjqIgBAAIg2DqIgQAAIg1jqIgBAAIAADqIgZAAIAAj/IAsAAIArDAIAAAAIAsjAIAsAAIAAD/g");
	this.shape_18.setTransform(111.9,306.4,0.541,0.541);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAwCAIgQhMIg/AAIgPBMIgcAAIA4j/IAlAAIA4D/gAgbAcIA3AAIgciIIAAAAg");
	this.shape_19.setTransform(101.9,306.4,0.541,0.541);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgyBmQgUghAAhFQAAhFAUggQASgdAiAAQA8AAAGBRIgcAAQgFg6ghAAQgXAAgKAYQgMAZAAA6QAAA6AMAaQAKAYAXAAQAUAAAKgPQALgQABgiIAbAAQAAAqgSAXQgSAXghAAQgiAAgSgdg");
	this.shape_20.setTransform(93.2,306.4,0.541,0.541);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiBHIAchHIgaAAIAAhGIBEAAIAABGIgnBHg");
	this.shape_21.setTransform(81.5,286.7,0.541,0.541);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhOC4QgcgggBg2IArAAQABAmARAVQASAWAgAAQAdAAAQgSQARgTAAghQAAgggagcQgOgOgrgfQgpgbgSgWQgaggAAgpQAAgtAcgbQAcgbAuAAQAsAAAcAeQAcAfADA3IgqAAQgGhNg6AAQgaAAgQAQQgQAQAAAYQAAAgAbAaQAMALAtAhQBVA4AABJQAAA0gcAcQgdAdgzAAQgwAAgegig");
	this.shape_22.setTransform(247.1,275.1,0.541,0.541);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABPDUIgZh+IhrAAIgZB+IguAAIBemnIA9AAIBeGngAguAvIBdAAIgvjiIAAAAg");
	this.shape_23.setTransform(233.5,275.1,0.541,0.541);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ABADUIiBlvIgBAAIAAFvIguAAIAAmnIBHAAIBsE3IABAAIAAk3IAtAAIAAGng");
	this.shape_24.setTransform(218.7,275.1,0.541,0.541);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABPDUIgZh+IhrAAIgZB+IguAAIBemnIA9AAIBeGngAguAvIBdAAIgvjiIAAAAg");
	this.shape_25.setTransform(203.9,275.1,0.541,0.541);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ABoDUIAAmDIgBAAIhYGDIgcAAIhZmDIgBAAIAAGDIgqAAIAAmnIBJAAIBIE/IABAAIBIk/IBJAAIAAGng");
	this.shape_26.setTransform(187.3,275.1,0.541,0.541);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhjDUIAAmnIDAAAIAAAnIiSAAIAACRIBrAAIAAAlIhrAAIAACjICZAAIAAAng");
	this.shape_27.setTransform(171.6,275.1,0.541,0.541);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhNC4QgdgggBg2IArAAQABAmARAVQASAWAgAAQAdAAARgSQARgTAAghQAAgggbgcQgNgOgrgfQgqgbgRgWQgbggAAgpQAAgtAcgbQAcgbAuAAQAtAAAcAeQAcAfACA3IgqAAQgGhNg5AAQgbAAgQAQQgQAQAAAYQAAAgAbAaQAMALAtAhQBVA4AABJQAAA0gcAcQgdAdgzAAQgwAAgdgig");
	this.shape_28.setTransform(157.7,275.1,0.541,0.541);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhGDBQgegZAAgyIAAggIBCAAIAAAiQAAARAJAKQAIAKAPAAQAQAAAIgLQAKgNAAgcIAAhgQAAgSgKgKQgHgJgOAAQgZAAgMAeIg5AAQAFiBABhXICuAAIgCA8IhxAAIgDBcIABABQAMgPAOgFQAJgFASAAQApAAAUAeQARAbAAA1IAAA7QAABEgXAfQgXAhg0AAQguAAgbgWg");
	this.shape_29.setTransform(137.9,275.3,0.541,0.541);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVDUIAAi0IhjjzIAyAAIBHC6IBGi6IAyAAIhiDzIAAC0g");
	this.shape_30.setTransform(117.9,275.1,0.541,0.541);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhkByIAAgZIBCAAIAAAdQAAAqAhAAQAgAAAAgyIAAggQAAgigOgNQgOgNggAAIAAg4QAfAAANgNQAOgOAAglQAAgfgHgMQgGgOgQAAQgPAAgIAJQgJALAAAYIAAARIhCAAIAAgUQAAgsAagbQAbgcAtAAQAtAAAZAiQAYAeAAAtQABAngKAVQgKAXgaAPQAfAOALAXQAKAVAAAtQAABAgaAeQgaAfg0AAQhhAAAAhog");
	this.shape_31.setTransform(97.9,275.1,0.541,0.541);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCDXIAAlPIg6AAIAAgnQA4gcAcgbIAlAAIAAGtg");
	this.shape_32.setTransform(71.7,275,0.541,0.541);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ApLJBIDJv1IgRPoIC+ytIApNzIAOGSICe3/ICfX/IAy0LIDCS2IABAAIgQvrIDIP1IpMEyg");
	this.shape_33.setTransform(160.4,88.8,0.541,0.541);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AU6J+QkmAAiBhsQimiLAAl1QAAl7CriWQCQh+FFAAQD3AACMAPQBGAIAUAHIgYGHIiqAAIgZi8QhfgMhdAAQg9AAgaAEQg6AJgqAeQh3BWAAEJQAAEFBJBoQAmA4BBAJQAoAGCxgDIAAj9IibgrIAAijIHVAAIAYKugAB5JnIAYi+IBggRIg5ppIkKM4ImDAAIkds6Ig7JrIBgARIAZC+InrAAIAYi+IBggRIBYs3IhhgQIgYi+IJXAAIENMFID8sEIJ+AAIgZC+IhgARIBMM1IBgARIAZC+gA9bJnIAYi+IBggRIAAs1IhggRIgYi+IJoAAIgYC+IhgARIAAM1IBgARIAYC+g");
	this.shape_34.setTransform(160.4,183.6,0.541,0.541);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhYBoQgkgmAAhCQAAhBAkgmQAjgmA7AAQA2AAAgAlIAAggIAeAAIAABhIgfAAQgDgjgWgTQgVgUgjAAQgrAAgaAeQgbAeAAAzQAAA2AbAfQAaAeAsAAQA+AAANhFIAnAAQgFAvgdAaQgeAZg1AAQg9AAgjgmg");
	this.shape_35.setTransform(127.2,237.3,0.541,0.541);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAsCIIAAgcIAnAAIgXg8Ih5AAIgaA8IApAAIAAAcIhsAAIAAgcIAfAAIBpjzIAnAAIBoDzIAeAAIAAAcgAAwATIgwh0IgxB0IBhAAg");
	this.shape_36.setTransform(142.8,237.3,0.541,0.541);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AiDCIIAAgcIAmAAIAAjXIgmAAIAAgcIB5AAQBEAAAlAjQAlAkAABAQAABCglAjQglAjhEAAgAg4BsIAuAAQAwAAAcgcQAcgdAAgzQAAgygcgdQgcgcgwAAIguAAg");
	this.shape_37.setTransform(159.7,237.3,0.541,0.541);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAsCIIAAgcIAnAAIgXg8Ih5AAIgaA8IAoAAIAAAcIhrAAIAAgcIAeAAIBqjzIAnAAIBoDzIAeAAIAAAcgAAwATIgwh0IgxB0IBhAAg");
	this.shape_38.setTransform(112.4,237.3,0.541,0.541);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhBCIIAAgcIAuAAIAAhWIhaiBIgVAAIAAgcIBnAAIAAAcIgnAAIBDBjIBDhjIgmAAIAAgcIBlAAIAAAcIgWAAIhdCBIAABWIAtAAIAAAcg");
	this.shape_39.setTransform(209.7,237.3,0.541,0.541);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("ABDCIIAAgcIAmAAIAAjXIgDAAIhZDzIgdAAIhYjzIgBAAIAADXIAjAAIAAAcIhsAAIAAgcIAkAAIAAjXIgkAAIAAgcIBkAAIBODfIBPjfIBkAAIAAAcIglAAIAADXIAlAAIAAAcg");
	this.shape_40.setTransform(191.6,237.3,0.541,0.541);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhyCIIAAgcIAmAAIAAjXIgmAAIAAgcIDlAAIAABSIgdAAIAAg2Ih+AAIAABcIA9AAIAAgoIAcAAIAABqIgcAAIAAgoIg9AAIAABhIB+AAIAAg6IAdAAIAABWg");
	this.shape_41.setTransform(173.9,237.3,0.541,0.541);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// black
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("A4/cIMAAAg4PMAx/AAAMAAAA4Pg");
	this.shape_42.setTransform(160,180);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,360);


(lib.ctabgtint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8FA124").s().p("A4/FeIAAq7MAx/AAAIAAK7g");
	this.shape.setTransform(160,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,70);


(lib.ctabg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFD730").s().p("A4/FeIAAq7MAx/AAAIAAK7g");
	this.shape.setTransform(160,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,70);


(lib.ctaarrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002F53").s().p("AhHCzICOiQIkYAAIAAhFIEYAAIiOiQIBkAAIC1CyIi1Czg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-17.9,42.1,36);


(lib.clickthrough = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.imgathlete2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_athlete2();
	this.instance.setTransform(0,0,1.332,1.332);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,319.7,1200);


(lib.imgathlete1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_athlete1();
	this.instance.setTransform(0,0,1.342,1.342);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,439,1208.1);


(lib.shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape_0();
	this.instance.setTransform(256.4,302.9,1,1,0,0,0,256.4,302.9);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,513,605.9);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMeAu4MAAAhdvIY9AAMAAABdvg");
	mask.setTransform(337,300);

	// Layer 3
	this.instance = new lib.shape();
	this.instance.setTransform(256.4,364,1,1,0,0,0,256.4,302.9);
	this.instance.alpha = 0.398;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#002D54","#006FBA"],[0.514,1],2.2,-93.9,2.2,222.1).s().p("EgMeAu4MAAAhdvIY9AAMAAABdvg");
	this.shape.setTransform(337,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(257,0,160,600);


(lib.ctalabelsignup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#032E53").s().p("AgyAiIAmhDIA/AAIg9BDg");
	this.shape.setTransform(172.5,-3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#032E53").s().p("AhSCtIAAlZICeAAIAAA0IhiAAIAABZIBLAAIAAAyIhLAAIAABmIBpAAIAAA0g");
	this.shape_1.setTransform(251.6,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#032E53").s().p("AgcCtIAAklIg6AAIAAg0ICtAAIAAA0Ig6AAIAAElg");
	this.shape_2.setTransform(231,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#032E53").s().p("AhRCtIAAlZICdAAIAAA0IhiAAIAABZIBKAAIAAAyIhKAAIAABmIBoAAIAAA0g");
	this.shape_3.setTransform(211.6,21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#032E53").s().p("AhcCtIAAlZIBYAAQBbAAAABcQgBAYgJATQgMAVgUAJQAwASAAA+QAAAugVAZQgYAdgwAAgAghB8IAZAAQAWAAAKgOQAKgMAAgbQgBgbgKgNQgNgOgYAAIgTAAgAghgeIAWAAQAQAAALgLQALgMAAgVQAAgxglAAIgXAAg");
	this.shape_4.setTransform(188.7,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#032E53").s().p("AgcCtIAAlZIA5AAIAAFZg");
	this.shape_5.setTransform(169.7,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#032E53").s().p("AAjCtIgoiQQgLACgUAAIAACOIg7AAIAAlZIBUAAQAxAAAYAYQAaAYgBA3QABBEgqARIAyCdgAgkgQIAWAAQAXAAAJgLQAKgMAAgeQAAgfgKgMQgJgLgXAAIgWAAg");
	this.shape_6.setTransform(151.6,21.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#032E53").s().p("AhCCYQgWgYAAgnIAAixQAAgnAWgYQAYgaArAAQAqAAAYAcQAWAbAAApIAAAZIg7AAIAAgbQAAgVgJgLQgIgKgMAAQgQAAgHAKQgHAJAAATIAACuQAAAUAHAJQAHAKAQAAQAQAAAHgJQAGgJAAgSIAAgpIA7AAIAAAoQAAAngWAYQgXAagrAAQgrAAgYgag");
	this.shape_7.setTransform(126.9,21.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#032E53").s().p("AhBCVQgXgbgCgoIA4gJQACAaAKANQAJANANABQAQAAAJgJQAJgIAAgPQAAgWgTgWQgIgJgfgdQg9gxAAg1QAAgpAZgXQAYgXAqAAQAjAAAWAYQAVAXAEAlIg4AGQgCgTgKgLQgIgIgMAAQgcAAAAAiQAAAUATAUQAHAIAhAeQA8AyAAA0QAAAqgaAXQgZAYgpAAQgoAAgYgdg");
	this.shape_8.setTransform(104.3,21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#032E53").s().p("AAnCtIhKjXIgBAAIAADXIg2AAIAAlZIA3AAIBHDFIABAAIAAjFIA1AAIAAFZg");
	this.shape_9.setTransform(81.8,21.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#032E53").s().p("AgcCtIAAlZIA5AAIAAFZg");
	this.shape_10.setTransform(63.1,21.1);

	this.arrow = new lib.ctaarrow();
	this.arrow.setTransform(21.1,21.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.6,259.9,45.7);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 160x600
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-1.2,666.8,2,2,0,0,0,256.4,333.4);

	this.instance_1 = new lib.BlueGradientImage();
	this.instance_1.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-514,0,1025.9,1333.9);


(lib.ctasignupon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.cta_label = new lib.ctalabelsignup();
	this.cta_label.setTransform(167.5,40.8,1,1,0,0,0,137.4,26);
	this.cta_label.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.cta_label.cache(-2,-9,264,50);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.instance = new lib.ctabgtint();
	this.instance.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,70);


(lib.ctasignupoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta_label
	this.cta_label = new lib.ctalabelsignup();
	this.cta_label.setTransform(167.5,41,1,1,0,0,0,137.4,26);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.cta_bg = new lib.ctabg();

	this.timeline.addTween(cjs.Tween.get(this.cta_bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,70);


(lib.ctasignup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cta_on.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cta-on
	this.cta_on = new lib.ctasignupon();
	this.cta_on.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.cta_on).wait(1));

	// cta-off
	this.cta_off = new lib.ctasignupoff();
	this.cta_off.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.cta_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,70);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/**
		 * Squarewave CreateJS Template 1.1 (September 2016)
		 **/
		var root = this;
		
		var stageHeight = stage.canvas.height;
		var stageWidth = stage.canvas.width;
		
		// cta
		var ctaHeight = 70; // need to get this dynamically
		var ctaOpenY = root.cta.y;
		var ctaOffset = 6; // how many pixels of the cta should be visible behind the
		var ctaClosedY = ctaOpenY + ctaHeight - ctaOffset;
		
		
		var mainTl = new TimelineMax();
		
		/**** uncomment to use within creative ******/
		/*
		root.clickthrough.on('mouseover' , onRollOver );
		root.clickthrough.on('mouseout' , onRollOut );
		root.clickthrough.on('click' , onClick );
		*/
		
		this.onInit = function () {
			this.animate();
		}
		
		// banner animation
		this.animate = function () {
			
			mainTl.add('start', 0.2)
		
			// frame 1 animation
			.from(root.facilities, 1, {
				y: stageHeight,
				ease: Strong.easeOut
			}, 'start')
			.from(root.athlete_1, 1.2, {
				scaleX: 1.5,
				scaleY: 1.5,
				alpha: 0,
				ease: Strong.easeOut
			}, 'start')
			.from(root.text_1, 1, {
					alpha: 0,
					y: '+=100',
					ease: Strong.easeOut
				}, 'start+=0.2')
				.from(root.footer, 0.75, {
					y: stageHeight,
					ease: Strong.easeOut
				}, 'start')
				.fromTo(root.cta, 0.75, {
					y: stageHeight
				}, {
					y: ctaClosedY,
					ease: Strong.easeOut
				}, 'start')
		
			// frame 2
			.add('frame2', '+=1')
				.to(root.text_1, 0.5, {
					alpha: 0,
					ease: Strong.easeOut
				}, 'frame2')
				.from(root.text_2, 0.65, {
					alpha: 0,
					y: '+=100',
					ease: Strong.easeOut
				}, 'frame2+=0.75')
				
				// Athlete transition
				.to(root.athlete_1, 1.4, {
					x: '-=' + stageWidth,
					ease: Strong.easeOut
				}, 'frame2+=0.75')
				.from(root.athlete_2, 1.4, {
					x: '+=' + stageWidth,
					ease: Strong.easeOut
				}, 'frame2+=0.75')
				
		
			// transition to end frame 
			.add('frame3', '+=1.5')
				.to(root.text_2, 0.5, {
					alpha: 0,
					ease: Strong.easeOut
				}, 'frame3')
				.to(root.facilities, 0.5, {
				y: stageHeight,
				alpha: 0,
				ease: Strong.easeOut
			}, 'frame3')
			.to(root.athlete_2, 0.5, {
					alpha: 0,
					scaleX: 1.5,
					scaleY: 1.5,
					ease: Strong.easeIn
				}, 'frame3')
				
		
			.add('endFrame')
				.from(root.text_3, 0.65, {
					alpha: 0,
					scaleX: 0.6,
					scaleY: 0.6,
					ease: Strong.easeOut
				}, 'endFrame')
				.to(root.cta, 0.6, {
					y: ctaOpenY,
					ease: Back.easeOut.config(0.5),
					onComplete: this.ctaOpen
				}, 'endFrame+=0.6');
		}
		
		var ctaIsOpen = false;
		// only do the rollover on the cta if it's open/visible
		this.ctaOpen = function () {
			if (!ctaIsOpen) {
				ctaIsOpen = true;
			}
		}
		
		// mouse over/mouse out events
		this.onRollOverEvent = function (e) {
			// wake up creative if asleep //
			if (root.adHelper && !root.adHelper.awake) root.adHelper.wake();
		
			if (ctaIsOpen) TweenMax.to(root.cta.cta_on, 0.2, {
				alpha: 1
			});
		}
		
		this.onRollOutEvent = function (e) {
			if (ctaIsOpen) TweenMax.to(root.cta.cta_on, 0.2, {
				alpha: 0
			});
		}
		
		this.onClickEvent = function (e) {
			console.log("creative-click");
		}
		
		
		
		
		
		
		/**
		 * AD HELPER METHODS
		 *
		 * If everything is setup correctly, you can use
		 * root.adHelper.sleep() & root.adHelper.wake()
		 * to manually control AdHelper.
		 * NOTE: sleep() pauses CreateJS AND TweenLite
		 *
		 **/
		this.adHelper = null; // adhelper reference //
		this.onSlowDown = function () {
			console.log("creative-slowdown");
		}
		
		this.onSleep = function () {
			console.log("creative-sleep");
		}
		
		this.onWake = function () {
			console.log("creative-wake");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// clickthrough
	this.clickthrough = new lib.clickthrough();
	this.clickthrough.setTransform(160,599.9,1.067,4.8,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickthrough, 0, 1, 2, false, new lib.clickthrough(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough).wait(1));

	// footer
	this.footer = new lib.footer();
	this.footer.setTransform(0,840);

	this.timeline.addTween(cjs.Tween.get(this.footer).wait(1));

	// cta
	this.cta = new lib.ctasignup();
	this.cta.setTransform(0,770);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// text: headline 3
	this.text_3 = new lib.textheadline3();
	this.text_3.setTransform(160,401.9,1,1,0,0,0,160,401.9);
	this.text_3.cache(-2,-2,324,1204);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1));

	// athlete_2
	this.athlete_2 = new lib.imgathlete2();
	this.athlete_2.setTransform(159,599.5,1,1,0,0,0,159,599.5);

	this.timeline.addTween(cjs.Tween.get(this.athlete_2).wait(1));

	// athlete_1
	this.athlete_1 = new lib.imgathlete1();
	this.athlete_1.setTransform(160,600,1,1,0,0,0,160,600);

	this.timeline.addTween(cjs.Tween.get(this.athlete_1).wait(1));

	// text: headline 2
	this.text_2 = new lib.textheadline2();
	this.text_2.cache(-2,-2,324,1204);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1));

	// text: headline 1
	this.text_1 = new lib.textheadline1();
	this.text_1.cache(-2,-2,324,1204);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// image: facilities
	this.facilities = new lib.img_facilities_1();
	this.facilities.setTransform(120,450,1,1,0,0,0,120,450);

	this.timeline.addTween(cjs.Tween.get(this.facilities).wait(1));

	// background
	this.bg = new lib.background();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354,599.9,1025.9,1334.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;