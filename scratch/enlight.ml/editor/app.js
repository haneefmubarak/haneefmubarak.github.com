document.getElementById ("note-title").innerHTML = localStorage["note-title"] || "";
document.getElementById ("note-content").innerHTML = localStorage["note-content"];

setInterval (function () {
	var title = document.getElementById ("note-title").innerHTML;

	localStorage["note-title"] = title;
	localStorage["note-content"] = document.getElementById ("note-content").innerHTML;

	document.getElementsByTagName ("title")[0].innerHTML = "LiveNotes: " + title;
}, 1000);
