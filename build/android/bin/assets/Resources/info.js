var infoWin = Ti.UI.currentWindow;

infoWin.addEventListener('click', function(e){
	infoWin.close();
});

infoWin.open();
