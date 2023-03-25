document.getElementById("doAction").onclick = function(){	
var list = document.getElementById('listz');
var listitem = document.createElement('li');
var text1 = document.getElementById('item').value;
	listitem.appendChild(document.createTextNode(text1));
	list.appendChild(listitem);
}