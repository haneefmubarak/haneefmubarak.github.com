var GetColor = function () {
	return "#" + Math.random ().toString (16).slice (2, 8);
}

var SetBackground = function () {
	document.body.style.background = GetColor ();
}

SetBackground ();

document.body.onkeyup = function (e) {
	if (e.keyCode == 32) SetBackground ();
}
