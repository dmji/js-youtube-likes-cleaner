var deleteLabelRU = "Удалить из понравившихся" // меняется в зависимости от локализации
var menuLabelRU = '"Меню действий"' // меняется в зависимости от локализации

function timeout(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
function delClick() 
{
	var tags = document.getElementsByTagName("yt-formatted-string")
	for (var i = 0; i < tags.length; i++) 
	{
		if (tags[i].textContent == deleteLabelRU) 
		{
			tags[i].click();
		}
	}
}

var n = 1;
while (1) 
{
	menus = document.querySelectorAll(`[aria-label=${menuLabelRU}]`);
	await timeout(100);
	menus[n].click();
	await timeout(100);
	delClick();
	n+=1;
}