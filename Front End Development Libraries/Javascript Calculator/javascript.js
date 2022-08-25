var display = document.getElementById("display");
var _dot = false;

window.onload = function()
{ 
  init();
}

function init ()
{
  _dot = false;
  display.innerText = "0";
}

function onButtonClick(evt) 
{
	if (evt.currentTarget.textContent.trim() === "AC")
    {
      init();
    }
	else if(evt.currentTarget.textContent.trim() === ".")
    {
      if (_dot === false)
        {
		  display.innerText += ".";
          _dot = true;
        }
    }
	else if(evt.currentTarget.textContent.trim() === "-")
    {
		if (display.textContent !== "-")
        {
			if (display.textContent[display.textContent.length-2] === "+" | display.textContent[display.textContent.length-2] === "/" | display.textContent[display.textContent.length-2] === "*" | display.textContent[display.textContent.length-2] === "-")
			{
				if (display.textContent[display.textContent.length-1] !== "-")
				{
					display.innerText += "-";
					_dot = false;
				}
			}
			else
			{
				display.innerText += "-";
				_dot = false;
			}
		}
	}
	else if(evt.currentTarget.textContent.trim() === "+" | evt.currentTarget.textContent.trim() === "/" | evt.currentTarget.textContent.trim() === "x")
    {
	if (display.textContent[display.textContent.length-1] === "+" | display.textContent[display.textContent.length-1] === "/" | display.textContent[display.textContent.length-1] === "*" | display.textContent[display.textContent.length-1] === "-")
	{
		display.innerText = display.textContent.slice(0, -1);
		if (display.textContent[display.textContent.length-1] === "+" | display.textContent[display.textContent.length-1] === "/" | display.textContent[display.textContent.length-1] === "*" | display.textContent[display.textContent.length-1] === "-")
		{
			display.innerText = display.textContent.slice(0, -1);
		}
	}
		if (evt.currentTarget.textContent.trim() === "x")
		{
			display.innerText += "*";
		}
		else
		{
			display.innerText += evt.currentTarget.textContent.trim();
		}
		_dot = false;
	}
    else if(evt.currentTarget.textContent.trim() === "0")
    {
      if (display.textContent !== "0")
        {
		  display.innerText += "0";
        }
    }
    else if(parseInt(evt.currentTarget.textContent.trim()) >= "1" &&  parseInt(evt.currentTarget.textContent.trim())<= 9)
    {
		if (display.textContent === "0")
		{
			display.innerText = "";
		}
		display.innerText += evt.currentTarget.textContent.trim();
	}
    else if(evt.currentTarget.textContent.trim() === "=")
    {
		display.innerText = eval(display.textContent).toString();
		_dot = false;
	}
}

var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) 
{
    buttons[i].addEventListener("click", onButtonClick);
}