var place = 300;
var lplace = 150;
var landing = Ti.UI.createWindow ({
	backgroundImage: 'Frontpage.jpg',
	//layout: 'vertical'
});

var heading = Ti.UI.createLabel({
	color: 'black',
	text: 'Peter Wilson',
	textAlignment: 'center',
	font: {fontSize: 40},
	top: 20
});

var portrait = Ti.UI.createImageView ({
	image: 'myFace.png',
	top:70
});

var myTitle = Ti.UI.createLabel({
	color: 'black',
	text: 'Job: IT Support',
	textAlignment: 'left',
	font: {fontSize: 30},
	top: place,
	left: lplace
});

var major = Ti.UI.createLabel({
	color: 'black',
	text: 'Major: Information Systems',
	textAlignment: 'left',
	font: {fontSize: 30},
	top: place+30,
	left: lplace
});

var cell = Ti.UI.createLabel({
	color: 'black',
	text: 'Cell: (208) 290-1672',
	textAlignment: 'left',
	font: {fontSize: 30},
	top: place+60,
	left: lplace
});

var email = Ti.UI.createLabel({
	color:'black',
	text: 'Email: asc3ticwils0n@gmail.com',
	textAlignment: 'left',
	font: {fontSize: 30},
	top: place+90,
	left: lplace
});

// var infoB = Ti.UI.createButton({
	// title: 'More Information',
// });

landing.addEventListener('click', function(e){
	var newWin = Ti.UI.createWindow({
		url: 'info.js',
		backgroundColor:'#6C929F',
		//layout: 'vertical'
	});
	newWin.open();
});

landing.add(heading);
landing.add(portrait);
landing.add(myTitle);
landing.add(major);
landing.add(cell);
landing.add(email);
//landing.add(infoB);

landing.open();
