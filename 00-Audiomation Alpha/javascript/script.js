var preload;

$(document).ready(function(){

    init();
	initAnimation();
	
	loadKit($("#kitConfig #kitButton1"), "0");

    $('input').iCheck({
        checkboxClass: 'icheckbox_futurico',
        radioClass: 'iradio_futurico',
        increaseArea: '20%' // optional
    });
	
/*MENU CONTROL*/
	
	
	$(document).keydown(function(e) {
	  //console.log(e);
	  $("#title").fadeOut("slow");
	  $(".instrucitons").fadeOut("slow");
	  resize();
	  
	  //Channle Toggle
	  if(e.keyCode == 192) {
		
	  };
	  
	  //Menu Open Toggle
	  if(e.keyCode == 27) {
		if($("#bottomMenu").hasClass("active")) {
			bottomClosePage();
			
		}
		if($("#topMenu").hasClass("active")){
				topClose();

		}else{
			topOpen();
		}
	  }
	  
	  //A/V Grid
	  if (e.keyCode == 9) {  //tab pressed
	      e.preventDefault(); // stops its action
		  setGridTarget("av");
	  }
	  
	  //Start/stop Kit Loop  
	  if(e.keyCode == 32) {
	  	
	  }
	  
	  if(e.keyCode == 32) {
	  	
	  }
	  
	  //Kit Selection
	  if(e.keyCode == 49) {
		  
		audiomation.config.selectedChannel = "A"
	  	audiomation.config.selectedKit = "0"
  		$("#channel span").removeClass("activeButton");
  		$("#chA").addClass("activeButton");
        $("#kitConfig > span").removeClass("activeButton");
        $("#kitButton1").addClass("activeButton");
		
	  } else if (e.keyCode == 50) {
  
		audiomation.config.selectedChannel = "A"
	  	audiomation.config.selectedKit = "1"
  		$("#channel span").removeClass("activeButton");
  		$("#chA").addClass("activeButton");
        $("#kitConfig > span").removeClass("activeButton");
        $("#kitButton2").addClass("activeButton");
		
	  } else if (e.keyCode == 51) {
		  
  		audiomation.config.selectedChannel = "A"
  	  	audiomation.config.selectedKit = "2"
  		$("#channel span").removeClass("activeButton");
  		$("#chA").addClass("activeButton");
        $("#kitConfig > span").removeClass("activeButton");
        $("#kitButton3").addClass("activeButton");
	  	
	  } else if (e.keyCode == 52) {		
		  
    	audiomation.config.selectedChannel = "A"
        audiomation.config.selectedKit = "3"
  		$("#channel span").removeClass("activeButton");
  		$("#chA").addClass("activeButton");
        $("#kitConfig > span").removeClass("activeButton");
        $("#kitButton4").addClass("activeButton");
	  	
	  } else if (e.keyCode == 53) {
	  
    	audiomation.config.selectedChannel = "B"
    	audiomation.config.selectedKit = "4"
		$("#channel span").removeClass("activeButton");
		$("#chB").addClass("activeButton");
        $("#kitConfig > span").removeClass("activeButton");
        $("#kitButton1").addClass("activeButton");
	  	
	  } else if (e.keyCode == 54) {
  
      	audiomation.config.selectedChannel = "B"
      	audiomation.config.selectedKit = "5"
  		$("#channel span").removeClass("activeButton");
  		$("#chB").addClass("activeButton");
        $("#kitConfig > span").removeClass("activeButton");
        $("#kitButton2").addClass("activeButton");
	  	
	  } else if (e.keyCode == 55) {

      	audiomation.config.selectedChannel = "B"
      	audiomation.config.selectedKit = "6"
  		$("#channel span").removeClass("activeButton");
  		$("#chB").addClass("activeButton");
        $("#kitConfig > span").removeClass("activeButton");
        $("#kitButton3").addClass("activeButton");
	  	
	  } else if (e.keyCode == 56) {
		    
      	audiomation.config.selectedChannel = "B"
      	audiomation.config.selectedKit = "7"
  		$("#channel span").removeClass("activeButton");
  		$("#chB").addClass("activeButton");
        $("#kitConfig > span").removeClass("activeButton");
        $("#kitButton4").addClass("activeButton");
		
	  }
	  
	  //Grid Priority
	  if(e.keyCode == 221) {
		  //if()
	  }
	  
      var conf = audiomation.config.channel.A;
   	  var soundSettingId = conf.kit[0].soundSetting;
	  
	  /*Kit 1*/
	  if(e.keyCode == 81) {
	  playSound( audiomation.config.channel.A.kit[0].trigger[0].audio, soundSettingId);
	  } else if(e.keyCode == 87) {
	  playSound( audiomation.config.channel.A.kit[0].trigger[1].audio, soundSettingId);
	  } else if(e.keyCode == 69) {
	  playSound( audiomation.config.channel.A.kit[0].trigger[2].audio, soundSettingId);
	  } else if(e.keyCode == 65) {
	  playSound( audiomation.config.channel.A.kit[0].trigger[3].audio, soundSettingId);
	  } else if(e.keyCode == 83) {
	  playSound( audiomation.config.channel.A.kit[0].trigger[4].audio, soundSettingId);
	  } else if(e.keyCode == 68) {
	  playSound( audiomation.config.channel.A.kit[0].trigger[5].audio, soundSettingId);
	  } else if(e.keyCode == 90) {
	  playSound( audiomation.config.channel.A.kit[0].trigger[6].audio, soundSettingId);
	  } else if(e.keyCode == 88) {
	  playSound( audiomation.config.channel.A.kit[0].trigger[7].audio, soundSettingId);
	  }
	  
	  /*Kit 2*/
	  
	  else if(e.keyCode == 82) {
	  playSound( audiomation.config.channel.A.kit[1].trigger[0].audio, soundSettingId);
	  } else if(e.keyCode == 84) {
	  playSound( audiomation.config.channel.A.kit[1].trigger[1].audio, soundSettingId);
	  } else if(e.keyCode == 89) {
	  playSound( audiomation.config.channel.A.kit[1].trigger[2].audio, soundSettingId);
	  } else if(e.keyCode == 85) {
	  playSound( audiomation.config.channel.A.kit[1].trigger[3].audio, soundSettingId);
	  } else if(e.keyCode == 73) {
	  playSound( audiomation.config.channel.A.kit[1].trigger[4].audio, soundSettingId);
	  } else if(e.keyCode == 79) {
	  playSound( audiomation.config.channel.A.kit[1].trigger[5].audio, soundSettingId);
	  } else if(e.keyCode == 80) {
	  playSound( audiomation.config.channel.A.kit[1].trigger[6].audio, soundSettingId);
	  } else if(e.keyCode == 219) {
	  playSound( audiomation.config.channel.A.kit[1].trigger[7].audio, soundSettingId);
	  }
	  
	  /*Kit 3*/
	  
	  else if(e.keyCode == 70) {
	  playSound( audiomation.config.channel.A.kit[2].trigger[0].audio, soundSettingId);
	  } else if(e.keyCode == 71) {
	  playSound( audiomation.config.channel.A.kit[2].trigger[1].audio, soundSettingId);
	  } else if(e.keyCode == 72) {
	  playSound( audiomation.config.channel.A.kit[2].trigger[2].audio, soundSettingId);
	  } else if(e.keyCode == 74) {
	  playSound( audiomation.config.channel.A.kit[2].trigger[3].audio, soundSettingId);
	  } else if(e.keyCode == 75) {
	  playSound( audiomation.config.channel.A.kit[2].trigger[4].audio, soundSettingId);
	  } else if(e.keyCode == 76) {
	  playSound( audiomation.config.channel.A.kit[2].trigger[5].audio, soundSettingId);
	  } else if(e.keyCode == 186) {
	  playSound( audiomation.config.channel.A.kit[2].trigger[6].audio, soundSettingId);
	  } else if(e.keyCode == 222) {
	  playSound( audiomation.config.channel.A.kit[2].trigger[7].audio, soundSettingId);
	  }
	  
	  /*Kit 3*/
	  
	  else if(e.keyCode == 67) {
	  playSound( audiomation.config.channel.A.kit[3].trigger[0].audio, soundSettingId);
	  } else if(e.keyCode == 86) {
	  playSound( audiomation.config.channel.A.kit[3].trigger[1].audio, soundSettingId);
	  } else if(e.keyCode == 66) {
	  playSound( audiomation.config.channel.A.kit[3].trigger[2].audio, soundSettingId);
	  } else if(e.keyCode == 78) {
	  playSound( audiomation.config.channel.A.kit[3].trigger[3].audio, soundSettingId);
	  } else if(e.keyCode == 77) {
	  playSound( audiomation.config.channel.A.kit[3].trigger[4].audio, soundSettingId);
	  } else if(e.keyCode == 188) {
	  playSound( audiomation.config.channel.A.kit[3].trigger[5].audio, soundSettingId);
	  } else if(e.keyCode == 190) {
	  playSound( audiomation.config.channel.A.kit[3].trigger[6].audio, soundSettingId);
	  } else if(e.keyCode == 191) {
	  playSound( audiomation.config.channel.A.kit[3].trigger[7].audio, soundSettingId);
	  }
	  
	 
	});

	/*
	//Grid Up (For hold buttons)
	$(document).keyup(function(e) {
		if(){}
	});*/


 /*END HOTKEYS*/

/*MAIN MENU CONTROL*/

	$(".menuB").click(function(e) {
		console.log(e);
		if(!$(this).hasClass("activeButton")) {
			
			$(this).parent().find("span.activeButton").removeClass("activeButton");
			$(this).addClass("activeButton");
			
		}
	});
	
	$("#gridP span").click(function priorityToggle(e) {
		console.log(e);
		if(!$(this).hasClass("activePriority")) {
			
			
			
			$(this).parent().find("span.activePriority").removeClass("activePriority");
			$(this).addClass("activePriority")
			
			if(audiomation.config.gridPriority == "Channel") {
				audiomation.config.gridPriority = "Kit"
			} else {
				audiomation.config.gridPriority = "Channel"
			}
		}
	});
	

//Top Menu		
		
	$(".menuButton").click(function(e) {
		
		console.log(e);
	 	$("#title").fadeOut("slow")
		$(".instrucitons").fadeOut("slow")
		
			if($("#bottomMenu").hasClass("active")) {
				bottomClosePage();
				
			}
			if($("#topMenu").hasClass("active")){
					topClose();

			}else{
				topOpen();
			}
		});
		
	$(".topMenu div p").click(function(e) {
		console.log(e);
		if(!$(this).hasClass("activeButton")) {
			
			$(this).parent().parent().find("p.activeButton").removeClass("activeButton");
			$(this).addClass("activeButton");
		}
		
		$("#triggerOptions").click(function(e) {
			
			audiomation.config.gridTarget = "a"
			
			$(".gridSelection").removeClass("activeButton");
			$("#aGrid").addClass("activeButton");
			
			$("#triggers").show();
			$("#grid").show();
			$("#gridPriority").hide();
			$("#aGrid").show();
			$("#avGrid").hide();
			$("#vGrid").show();
			
		});
	
		$("#kitOptions").click(function(e) {
			
			audiomation.config.gridTarget = "a/v"
			
			$(".gridSelection").removeClass("activeButton");
			$("#avGrid").addClass("activeButton");
			
			$("#triggers").hide();
			$("#grid").show();
			$("#gridPriority").show();
			$("#aGrid").show();
			$("#avGrid").show();
			$("#vGrid").show();
		});
	
		$("#sequencerOptions").click(function(e) {
			
			audiomation.config.gridTarget = "a/v"
			
			$(".gridSelection").removeClass("activeButton");
			$("#avGrid").addClass("activeButton");

			$("#triggers").hide();
			$("#grid").hide();
			$("#gridPriority").hide();
			$("#aGrid").hide();
			$("#avGrid").show();
			$("#vGrid").hide();
		});
	
		$("#effectsOptions").click(function(e) {
			
			audiomation.config.gridTarget = "v"
			
			$(".gridSelection").removeClass("activeButton");
			$("#vGrid").addClass("activeButton");

			$("#triggers").show();
			$("#gridPriority").hide();
			$("#aGrid").hide();
			$("#avGrid").hide();
			$("#vGrid").show();
		});
		
	});
	
	$(".gridSelection").click(function(e) {
		console.log(e);
		if(!$(this).hasClass("activeButton")) {
					
			$(this).parent().find("span.activeButton").removeClass("activeButton");
			$(this).addClass("activeButton");
			
		}
	});

//Grid Target
	$("#aGrid").click(function(){
		setGridTarget("a");
	});
	
	$("#vGrid").click(function(){
		setGridTarget("v");
	});
	
	$("#avGrid").click(function(){
		setGridTarget("av");
	});
	
	function setGridTarget(value) {
		audiomation.config.gridTarget = value;
	}
	
//Bottom Menu
	$("#bottomMenuTrigger").on("mouseover",function(){
		if($("#bottomMenu").hasClass("active")){
			$("#bottomMenuTrigger").css("bottom","0%");
			bottomClose();
		}else{
			$("#bottomMenuTrigger").css("bottom","15%");
			bottomOpen();
		}
		
	})
});

/**/
function setEventListeners(){

    $("#grid span").on("click",function(event){

        var selectedTrigger = $("#triggers > span.active").attr("data");
        var selectedTriggerSoundId = $(this).attr("sound-id-data");

        playSound( selectedTriggerSoundId , "Drums");

        $("#grid span").removeClass("trigger"+selectedTrigger);
        $(this).addClass("trigger"+selectedTrigger);

        //Update Config
        var currentKit = $("#kitConfig .menuB.activeButton").attr("data-kit-id");

       	audiomation.config.selectedKit = currentKit;
       	console.log("currentKit:"+ currentKit);
        audiomation.config.channel.A.kit[currentKit].trigger[selectedTrigger].audio = selectedTriggerSoundId;

    });

    $("#triggers span").on("click",function(event){
        //console.log(event);

        $("#triggers > span").removeClass("active");
        $(this).addClass("active");
    });
	
}


function init() {
    if (!createjs.Sound.initializeDefaultPlugins()) {
        document.getElementById("error").style.display = "block";
        document.getElementById("content").style.display = "none";
        return;
    }

/*Sounds*/
    //examples.showDistractor("content");
    var assetsPath = "sounds/";
    var sounds = [
		/*Drum Sounds*/
		
			/*Kick*/
		
{src: "Drums/Kicks/Kick1.mp3", id: 0},
				{src: "Drums/Kicks/Kick2.mp3", id: 1},
				{src: "Drums/Kicks/Kick3.mp3", id: 2},
				{src: "Drums/Kicks/Kick4.mp3", id: 3},

			
			/*Snare*/	
				
				{src: "Drums/Snares/Snare1.mp3", id: 4},
				{src: "Drums/Snares/Snare2.mp3", id: 5},
				{src: "Drums/Snares/Snare3.mp3", id: 6},
				{src: "Drums/Snares/Snare4.mp3", id: 7},

				
			/*Tom*/
				
				{src: "Drums/Toms/Tom1.mp3", id: 8},
				{src: "Drums/Toms/Tom2.mp3", id: 9},
				{src: "Drums/Toms/Tom3.mp3", id: 10},
				{src: "Drums/Toms/Tom4.mp3", id: 11},

				
			/*Hi-Hats*/
				
				{src: "Drums/Hi-hats/Hihat1.mp3", id: 12},
				{src: "Drums/Hi-hats/Hihat2.mp3", id: 13},
				{src: "Drums/Hi-hats/Hihat3.mp3", id: 14},
				{src: "Drums/Hi-hats/Hihat4.mp3", id: 15},

				
			/*Cymbal*/
				
				{src: "Drums/Crashes/crash1.mp3", id: 16},
				{src: "Drums/Crashes/crash2.mp3", id: 17},
				{src: "Drums/Crashes/crash3.mp3", id: 18},
				{src: "Drums/Crashes/crash4.mp3", id: 19},
		
			/*Percussion*/

				{src: "Drums/Percussion/Percussion1.mp3", id: 20},
				{src: "Drums/Percussion/Percussion2.mp3", id: 21},
				{src: "Drums/Percussion/Percussion3.mp3", id: 22},
				{src: "Drums/Percussion/Percussion4.mp3", id: 23},
				{src: "Drums/Percussion/Percussion5.mp3", id: 24},
				{src: "Drums/Percussion/Percussion6.mp3", id: 25},
				{src: "Drums/Percussion/Percussion7.mp3", id: 26},
				{src: "Drums/Percussion/Percussion8.mp3", id: 27},
				{src: "Drums/Percussion/Percussion9.mp3", id: 28},
				{src: "Drums/Percussion/Percussion10.mp3", id: 29},
				{src: "Drums/Percussion/Percussion11.mp3", id: 30},
				{src: "Drums/Percussion/Percussion12.mp3", id: 31},
				
		/*Bass Sounds*/
				
			/*Bass Scale 1*/
		
				{src: "Drums/Kicks/Kick1.mp3", id: 32},
				{src: "Drums/Kicks/Kick2.mp3", id: 33},
				{src: "Drums/Kicks/Kick3.mp3", id: 34},
				{src: "Drums/Kicks/Kick4.mp3", id: 35},
				{src: "Drums/Kicks/Kick1.mp3", id: 36},
				{src: "Drums/Kicks/Kick2.mp3", id: 37},
				{src: "Drums/Kicks/Kick3.mp3", id: 38},
				{src: "Drums/Kicks/Kick4.mp3", id: 39},
		
			/*Bass Scale 2*/
		
				{src: "Drums/Kicks/Kick1.mp3", id: 40},
				{src: "Drums/Kicks/Kick2.mp3", id: 41},
				{src: "Drums/Kicks/Kick3.mp3", id: 42},
				{src: "Drums/Kicks/Kick4.mp3", id: 43},
				{src: "Drums/Kicks/Kick1.mp3", id: 44},
				{src: "Drums/Kicks/Kick2.mp3", id: 45},
				{src: "Drums/Kicks/Kick3.mp3", id: 46},
				{src: "Drums/Kicks/Kick4.mp3", id: 47},
	
			/*Bass Scale 3*/
		
				{src: "Drums/Kicks/Kick1.mp3", id: 48},
				{src: "Drums/Kicks/Kick2.mp3", id: 49},
				{src: "Drums/Kicks/Kick3.mp3", id: 50},
				{src: "Drums/Kicks/Kick4.mp3", id: 51},
				{src: "Drums/Kicks/Kick1.mp3", id: 52},
				{src: "Drums/Kicks/Kick2.mp3", id: 53},
				{src: "Drums/Kicks/Kick3.mp3", id: 54},
				{src: "Drums/Kicks/Kick4.mp3", id: 55},
		
			/*Bass Scale 4*/
		
				{src: "Drums/Kicks/Kick1.mp3", id: 56},
				{src: "Drums/Kicks/Kick2.mp3", id: 57},
				{src: "Drums/Kicks/Kick3.mp3", id: 58},
				{src: "Drums/Kicks/Kick4.mp3", id: 59},
				{src: "Drums/Kicks/Kick1.mp3", id: 60},
				{src: "Drums/Kicks/Kick2.mp3", id: 61},
				{src: "Drums/Kicks/Kick3.mp3", id: 62},
				{src: "Drums/Kicks/Kick4.mp3", id: 63},
				
		/*Lead Sounds*/
				
			/*Lead Scale 1*/
		
				{src: "Drums/Kicks/Kick1.mp3", id: 64},
				{src: "Drums/Kicks/Kick2.mp3", id: 65},
				{src: "Drums/Kicks/Kick3.mp3", id: 66},
				{src: "Drums/Kicks/Kick4.mp3", id: 67},
				{src: "Drums/Kicks/Kick1.mp3", id: 68},
				{src: "Drums/Kicks/Kick2.mp3", id: 69},
				{src: "Drums/Kicks/Kick3.mp3", id: 70},
				{src: "Drums/Kicks/Kick4.mp3", id: 71},
		
			/*Lead Scale 2*/
			
				{src: "Drums/Kicks/Kick1.mp3", id: 72},
				{src: "Drums/Kicks/Kick2.mp3", id: 73},
				{src: "Drums/Kicks/Kick3.mp3", id: 74},
				{src: "Drums/Kicks/Kick4.mp3", id: 75},
				{src: "Drums/Kicks/Kick1.mp3", id: 76},
				{src: "Drums/Kicks/Kick2.mp3", id: 77},
				{src: "Drums/Kicks/Kick3.mp3", id: 78},
				{src: "Drums/Kicks/Kick4.mp3", id: 79},
			
			/*Lead Scale 3*/
		
				{src: "Drums/Kicks/Kick1.mp3", id: 80},
				{src: "Drums/Kicks/Kick2.mp3", id: 81},
				{src: "Drums/Kicks/Kick3.mp3", id: 82},
				{src: "Drums/Kicks/Kick4.mp3", id: 83},
				{src: "Drums/Kicks/Kick1.mp3", id: 84},
				{src: "Drums/Kicks/Kick2.mp3", id: 85},
				{src: "Drums/Kicks/Kick3.mp3", id: 86},
				{src: "Drums/Kicks/Kick4.mp3", id: 87},
		
			/*Lead Scale 4*/
		
				{src: "Drums/Kicks/Kick1.mp3", id: 88},
				{src: "Drums/Kicks/Kick2.mp3", id: 89},
				{src: "Drums/Kicks/Kick3.mp3", id: 90},
				{src: "Drums/Kicks/Kick4.mp3", id: 91},
				{src: "Drums/Kicks/Kick1.mp3", id: 92},
				{src: "Drums/Kicks/Kick2.mp3", id: 93},
				{src: "Drums/Kicks/Kick3.mp3", id: 94},
				{src: "Drums/Kicks/Kick4.mp3", id: 95},
				
		/*Sample Sounds*/
		
			/*Vocal Samples*/
		
				{src: "Drums/Kicks/Kick1.mp3", id: 96},
				{src: "Drums/Kicks/Kick2.mp3", id: 97},
				{src: "Drums/Kicks/Kick3.mp3", id: 98},
				{src: "Drums/Kicks/Kick4.mp3", id: 99},
				{src: "Drums/Kicks/Kick1.mp3", id: 100},
				{src: "Drums/Kicks/Kick2.mp3", id: 101},
				{src: "Drums/Kicks/Kick3.mp3", id: 102},
				{src: "Drums/Kicks/Kick4.mp3", id: 103},
		
			/*Vocal Samples*/
		
				{src: "Drums/Kicks/Kick1.mp3", id: 104},
				{src: "Drums/Kicks/Kick2.mp3", id: 105},
				{src: "Drums/Kicks/Kick3.mp3", id: 106},
				{src: "Drums/Kicks/Kick4.mp3", id: 107},
				{src: "Drums/Kicks/Kick1.mp3", id: 108},
				{src: "Drums/Kicks/Kick2.mp3", id: 109},
				{src: "Drums/Kicks/Kick3.mp3", id: 110},
				{src: "Drums/Kicks/Kick4.mp3", id: 111},
		
			/*Vocal Samples*/
		
				{src: "Drums/Kicks/Kick1.mp3", id: 112},
				{src: "Drums/Kicks/Kick2.mp3", id: 113},
				{src: "Drums/Kicks/Kick3.mp3", id: 114},
				{src: "Drums/Kicks/Kick4.mp3", id: 115},
				{src: "Drums/Kicks/Kick1.mp3", id: 116},
				{src: "Drums/Kicks/Kick2.mp3", id: 117},
				{src: "Drums/Kicks/Kick3.mp3", id: 118},
				{src: "Drums/Kicks/Kick4.mp3", id: 119},
		
			/*Vocal Samples*/
			
				{src: "Drums/Kicks/Kick1.mp3", id: 120},
				{src: "Drums/Kicks/Kick2.mp3", id: 121},
				{src: "Drums/Kicks/Kick3.mp3", id: 122},
				{src: "Drums/Kicks/Kick4.mp3", id: 123},
				{src: "Drums/Kicks/Kick1.mp3", id: 124},
				{src: "Drums/Kicks/Kick2.mp3", id: 125},
				{src: "Drums/Kicks/Kick3.mp3", id: 126},
				{src: "Drums/Kicks/Kick4.mp3", id: 127}
				

    ];
/*END SOUNDS*/
	
    createjs.Sound.alternateExtensions = ["mp3"];   // add other extensions to try loading if the src file extension is not supported
    createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this)); // add an event listener for when load is completed
    createjs.Sound.registerSounds(sounds, assetsPath);
}

function loadSoundSetting(elm, soundType){
	console.log("Loading soundType: " + soundType);

	$("#soundS .menuB").removeClass("activeButton");
	$(elm).addClass("activeButton");

	var config = audiomation.config.channel.A;
	var currentKit = audiomation.config.selectedKit[0];

	console.log("Getting currentKit: " + currentKit);
	config.kit[currentKit].soundSetting = soundType;
}

function loadKit(elm, kitId){
	console.log("Loading kitId: " + kitId);

	$("#kitConfig .menuB").removeClass("activeButton");
	$(elm).addClass("activeButton");

	audiomation.config.selectedKit[0] = kitId;

	updateSoundSetting(kitId);
	drawGrid(kitId);
	drawTriggers(kitId);

	setEventListeners();
}

function updateSoundSetting(kitId){
	var config = audiomation.config.channel.A;
	var soundSetting = config.kit[kitId].soundSetting;
	$("#soundS .menuB").removeClass("activeButton");
	$("#soundS .menuB."+soundSetting).addClass("activeButton");
}

function drawGrid(kitId){

	var config = audiomation.config.channel.A;

	console.log(kitId);

	var kitSettings = config.kit[kitId];

	console.log(config.kit);
	console.log(kitSettings);

	$("#grid span").remove();

	for(i=0;i<32;i++){
		$("#grid").append("<span class='gridSelection kit"+kitId+"' sound-id-data="+(i)+"></span>");
	}
	for(i=0;i<8;i++){
		console.log(kitSettings);
		$("#grid span").eq(kitSettings.trigger[i].audio).addClass("trigger"+i);
	}
	
}

function drawTriggers(kitId){
	
	var config = audiomation.config.channel.A;

	console.log(kitId);

	var kitSettings = config.kit[kitId];
	
	$("#triggers span").remove();
	for(i=0;i<8;i++){
		if(i==0){
			$("#triggers").append("<span id='trigger"+i+"' data='"+i+"'' class='triggerSelection kit"+kitId+" active'></span>");
		}else{
			$("#triggers").append("<span id='trigger"+i+"' data='"+i+"'' class='triggerSelection kit"+kitId+"'></span>");
		}
	}
	
}

function soundLoaded(event) {
    //examples.hideDistractor();
    var div = document.getElementById(event.id);
}

function stop() {
    if (preload != null) {
        preload.close();
    }
    createjs.Sound.stop();
}

function playSound(targetId, soundType) {
    //Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
    if(soundType == "Bass"){
    	targetId += 32;
    } else if (soundType == "Lead"){
    	targetId += 64;
    } else if (soundType == "Samples"){
    	targetId += 96;
    }

    var instance = createjs.Sound.play(targetId);
}

//Menu Control

//Top Menu Control
function topOpen() {
	$("#topMenu").stop().animate({top:0},500,function(){
		$(this).addClass("active");
	});
	$("#mainMenu").stop().animate({top:0},500);
}

function topClose() {
	$("#topMenu").stop().animate({top:-200},500,function(){
		$(this).removeClass("active")
	});
	$("#mainMenu").stop().animate({top:-2500},200);
}

function bottomOpenPage() {
		$("#title").fadeOut("slow")
		$(".instrucitons").fadeOut("slow")
		$("#bottomMenuTrigger").hide();
		topClose();
		$("#bottomMenu").stop().animate({bottom:"91%"},500,function(){
			$(this).addClass("active");
		});
		$("#helpMenu").stop().animate({top:0},600);
}

function bottomClosePage() {

		$("#bottomMenuTrigger").show();
		$("#bottomMenu").stop().animate({bottom:-200},500,function(){
			$(this).removeClass("active");
		});
		$("#helpMenu").stop().animate({top:1000},600);
}

function bottomOpen() {
	$("#bottomMenu").stop().animate({bottom:0},500,function(){
		$(this).addClass("active");
	});
}
function bottomClose() {
	$("#bottomMenuTrigger").show();
	$("#bottomMenu").stop().animate({bottom:-200},500,function(){
		$(this).removeClass("active");
	});
}


/*Main Structure*/

var audiomation = {
    "config": {
        version: "1.0",
        author: "Sean",
        selectedChannel: "A",
		gridPriority: "Channel",
		gridTarget: "av",
		selectedKit: [0,0],
        channel: {
            "A": {
                "kit": [{
					soundSetting: "Drums",
                    trigger:[
                        {audio:1,effect:0,visual:0},
                        {audio:2,effect:0,visual:0},
                        {audio:3,effect:0,visual:0},
                        {audio:4,effect:0,visual:0},
                        {audio:5,effect:0,visual:0},
                        {audio:6,effect:0,visual:0},
                        {audio:7,effect:0,visual:0},
                        {audio:8,effect:0,visual:0}
                    ]
                },
                {
					soundSetting: "Bass",
                    trigger:[
                        {audio:2,effect:0,visual:0},
                        {audio:10,effect:0,visual:0},
                        {audio:11,effect:0,visual:0},
                        {audio:12,effect:0,visual:0},
                        {audio:13,effect:0,visual:0},
                        {audio:14,effect:0,visual:0},
                        {audio:15,effect:0,visual:0},
                        {audio:16,effect:0,visual:0}
                    ]
                },
                {
					soundSetting: "Synth",
                    trigger:[
                        {audio:3,effect:0,visual:0},
                        {audio:20,effect:0,visual:0},
                        {audio:23,effect:0,visual:0},
                        {audio:24,effect:0,visual:0},
                        {audio:25,effect:0,visual:0},
                        {audio:26,effect:0,visual:0},
                        {audio:27,effect:0,visual:0},
                        {audio:38,effect:0,visual:0}
                    ]
                },
                {
					soundSetting: "Samples",
                    trigger:[
                        {audio:4,effect:0,visual:0},
                        {audio:22,effect:0,visual:0},
                        {audio:23,effect:0,visual:0},
                        {audio:24,effect:0,visual:0},
                        {audio:25,effect:0,visual:0},
                        {audio:26,effect:0,visual:0},
                        {audio:27,effect:0,visual:0},
                        {audio:38,effect:0,visual:0}
                    ]
                }]
            },
            "B": {
                "kit": [{
					soundSetting: "Drums",
                    trigger:[
                        {audio:11,effect:0,visual:0},
                        {audio:12,effect:0,visual:0},
                        {audio:13,effect:0,visual:0},
                        {audio:14,effect:0,visual:0},
                        {audio:15,effect:0,visual:0},
                        {audio:16,effect:0,visual:0},
                        {audio:17,effect:0,visual:0},
                        {audio:18,effect:0,visual:0}
                    ]
                },
                {
					soundSetting: "Bass",
                    trigger:[
                        {audio:21,effect:0,visual:0},
                        {audio:22,effect:0,visual:0},
                        {audio:23,effect:0,visual:0},
                        {audio:24,effect:0,visual:0},
                        {audio:25,effect:0,visual:0},
                        {audio:26,effect:0,visual:0},
                        {audio:27,effect:0,visual:0},
                        {audio:38,effect:0,visual:0}
                    ]
                },
                {
					soundSetting: "Synth",
                    trigger:[
                        {audio:21,effect:0,visual:0},
                        {audio:22,effect:0,visual:0},
                        {audio:23,effect:0,visual:0},
                        {audio:24,effect:0,visual:0},
                        {audio:25,effect:0,visual:0},
                        {audio:26,effect:0,visual:0},
                        {audio:27,effect:0,visual:0},
                        {audio:38,effect:0,visual:0}
                    ]
                },
                {
					soundSetting: "Samples",
                    trigger:[
                        {audio:21,effect:0,visual:0},
                        {audio:22,effect:0,visual:0},
                        {audio:23,effect:0,visual:0},
                        {audio:24,effect:0,visual:0},
                        {audio:25,effect:0,visual:0},
                        {audio:26,effect:0,visual:0},
                        {audio:27,effect:0,visual:0},
                        {audio:38,effect:0,visual:0}
                    ]
                }]
            }
        }
    }
};

console.log(audiomation);