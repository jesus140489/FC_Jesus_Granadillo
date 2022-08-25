var bank = document.getElementById("bank");
var power = document.getElementById("power");
var _volumeValue = document.getElementById("volumeValue");
var _volume = document.getElementById("volume");
var display = document.getElementById("display");

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

window.onload = function()
{ 
  init();
}

function init ()
{
  display.innerText = "Lets Start!";
  bank.checked = true;
  audioBank();
  power.checked = true;
  volume.value = 1;
  _volumeValue.innerText = "Volume: " + Math.round(_volume.value * 100) + "%";
}

function audioBank()
{
	if (bank.checked === true)
	{
		document.getElementById("Q").src = bankOne[0].url;
		document.getElementById("W").src = bankOne[1].url;
		document.getElementById("E").src = bankOne[2].url;
		document.getElementById("A").src = bankOne[3].url;
		document.getElementById("S").src = bankOne[4].url;
		document.getElementById("D").src = bankOne[5].url;
		document.getElementById("Z").src = bankOne[6].url;
		document.getElementById("X").src = bankOne[7].url;
		document.getElementById("C").src = bankOne[8].url;
		document.getElementById("Q").name = bankOne[0].id;
		document.getElementById("W").name = bankOne[1].id;
		document.getElementById("E").name = bankOne[2].id;
		document.getElementById("A").name = bankOne[3].id;
		document.getElementById("S").name = bankOne[4].id;
		document.getElementById("D").name = bankOne[5].id;
		document.getElementById("Z").name = bankOne[6].id;
		document.getElementById("X").name = bankOne[7].id;
		document.getElementById("C").name = bankOne[8].id;
	}
	else
	{
		document.getElementById("Q").src = bankTwo[0].url;
		document.getElementById("W").src = bankTwo[1].url;
		document.getElementById("E").src = bankTwo[2].url;
		document.getElementById("A").src = bankTwo[3].url;
		document.getElementById("S").src = bankTwo[4].url;
		document.getElementById("D").src = bankTwo[5].url;
		document.getElementById("Z").src = bankTwo[6].url;
		document.getElementById("X").src = bankTwo[7].url;
		document.getElementById("C").src = bankTwo[8].url;
		document.getElementById("Q").name = bankTwo[0].id;
		document.getElementById("W").name = bankTwo[1].id;
		document.getElementById("E").name = bankTwo[2].id;
		document.getElementById("A").name = bankTwo[3].id;
		document.getElementById("S").name = bankTwo[4].id;
		document.getElementById("D").name = bankTwo[5].id;
		document.getElementById("Z").name = bankTwo[6].id;
		document.getElementById("X").name = bankTwo[7].id;
		document.getElementById("C").name = bankTwo[8].id;
	}
}

function volumeChange()
{
  _volumeValue.innerText = "Volume: " + Math.round(_volume.value * 100) + "%";
}

function playSound(sound)
	{
		display.innerText = sound.name;
		sound.currentTime = 0;
		sound.volume = _volume.value;
		sound.play();
	}

function onButtonClick(evt) 
{
	if (power.checked === true)
	{
	playSound(document.getElementById(evt.currentTarget.textContent.trim()));
	}
}

var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) 
{
    buttons[i].addEventListener("click", onButtonClick);
}

document.addEventListener("keypress", function (e) {
        if (e.key.toLowerCase() === "q" | e.key.toLowerCase() === "w" | e.key.toLowerCase() === "e" | e.key.toLowerCase() === "a" | e.key.toLowerCase() === "s" | e.key.toLowerCase() === "d" | e.key.toLowerCase() === "z" | e.key.toLowerCase() === "x" |e.key.toLowerCase() === "c") 
		{
            e.preventDefault();
			if (power.checked === true)
			{
			playSound(document.getElementById(e.key.toUpperCase()));
			}
		}
});

bank.addEventListener('change', function() {
  audioBank();
});	
_volume.addEventListener('change', function() {
  volumeChange();
});	