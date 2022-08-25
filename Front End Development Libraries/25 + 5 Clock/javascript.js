	var _start = false;
	var _label = "Session";
	var _break_length = document.getElementById("break-length");
	var _session_length = document.getElementById("session-length");
	var _timer_label = document.getElementById("timer-label");
	var _time_left = document.getElementById("time-left");
	var _beep = document.getElementById("beep");

	window.onload = function()
	{ 
	  setInterval(countDown, 1000);
	  init();
	}

	function init ()
	{
	  _break_length.innerText = "5";
	  _session_length.innerText = "25";
	  _label = "Session";
	  _timer_label.innerText = _label;
	  _time_left.innerText = _session_length.textContent + ":00";
	  _start = false;
	  _beep.pause();
	  _beep.currentTime = 0;
	}

	function countDown ()
	{
		if (_start === true)
		{
			var _minutes = parseInt(_time_left.textContent[0] + _time_left.textContent[1]);
			var _seconds = parseInt(_time_left.textContent[3] + _time_left.textContent[4]);
			
			if (_minutes !== 0 && _seconds === 0)
			{
				_minutes -= 1;
				_seconds = 59;
			}
			else if (_seconds > 0)
			{
				_seconds -= 1;
				if (_minutes === 0 && _seconds === 0)
				{
					_beep.play();
				}
			}
			else if (_minutes === 0 && _seconds === 0)
			{
				if (_label === "Session")
				{
					_minutes = parseInt(_break_length.textContent);
					_seconds = 0;
					_label = "Break";
				}
				else if (_label === "Break")
				{
					_minutes = parseInt(_session_length.textContent);
					_seconds = 0;
					_label = "Session";
				}
				_timer_label.innerText = _label;
				_beep.pause();
				_beep.currentTime = 0;
			}
			
			if (_minutes > 9 && _seconds > 9)
			{
				_time_left.innerText = _minutes.toString() + ":" + _seconds.toString();
			}
			else if (_minutes < 10 && _seconds > 9)
			{
				_time_left.innerText = "0" + _minutes.toString() + ":" + _seconds.toString();
			}
			else if (_minutes > 9 && _seconds < 10)
			{
				_time_left.innerText = _minutes.toString() + ":" + "0" + _seconds.toString();
			}
			else if (_minutes < 10 && _seconds < 10)
			{
				_time_left.innerText = "0" + _minutes.toString() + ":" + "0" + _seconds.toString();
			}
		}
	}

	function onButtonClick(evt) 
	{
		if (evt.currentTarget.id.trim() === "session-increment" && parseInt(_session_length.textContent) < 60)
		{
			_session_length.textContent = (parseInt(_session_length.textContent) + 1).toString();
			if (parseInt(_session_length.textContent) > 9 )
			{
				_time_left.innerText = _session_length.textContent + ":00";
			}
			else
			{
				_time_left.innerText = "0" + _session_length.textContent + ":00";
			}
		}
		else if ((evt.currentTarget.id.trim() === "session-decrement" && parseInt(_session_length.textContent) > 1))
		{
			_session_length.innerText = (parseInt(_session_length.textContent) - 1).toString();
			if (parseInt(_session_length.textContent) > 9 )
			{
				_time_left.innerText = _session_length.textContent + ":00";
			}
			else
			{
				_time_left.innerText = "0" + _session_length.textContent + ":00";
			}
		}
		else if ((evt.currentTarget.id.trim() === "break-increment" && parseInt(_break_length.textContent) < 60))
		{
			_break_length.innerText = (parseInt(_break_length.textContent) + 1).toString();
		}
		else if ((evt.currentTarget.id.trim() === "break-decrement" && parseInt(_break_length.textContent) > 1))
		{
			_break_length.innerText = (parseInt(_break_length.textContent) - 1).toString();
		}
		else if (evt.currentTarget.id.trim() === "reset")
		{
			init();
		}
		else if (evt.currentTarget.id.trim() === "start_stop")
		{
			if (_start === false)
			{
				_start=true;
			}
			else
			{
				_start=false;
			}
			
		}
	}

	var buttons = document.getElementsByTagName("button");
	for (var i = 0; i < buttons.length; i++) 
	{
		buttons[i].addEventListener("click", onButtonClick);
	}