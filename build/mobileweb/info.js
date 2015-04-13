var infoWin = Ti.UI.currentWindow;

var school = Ti.UI.createLabel({
	text: 'Education: Highschool, currently attending University of Idaho for Information Systems',
	font: {fontSize: 20},
	top: '10%',
	left: '5%'
});

var jobHistory = Ti.UI.createLabel({
	text: 'Job History:\n	2 years McDonalds\n	2 months Call Center\n	1 year sales associate\n	1 year in-store Tech Support\n	2 years phone IT for an ISP',
	font: {fontSize: 20},
	top: '20%',
	left: '5%'
});

var skills = Ti.UI.createLabel({
	text: 'Skills:\n \*Personally designed and built multiple computers\n \* Years of customer service experience\n \* Familiar with C++, Java, some HTML',
	font: {fontSize: 20},
	top: '60%',
	left: '5%'
});

infoWin.addEventListener('click', function(e){
	infoWin.close();
});

infoWin.add(school);
infoWin.add(jobHistory);
infoWin.add(skills);

infoWin.open();
