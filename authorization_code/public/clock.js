var sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav");
		sound.loop = true;

        //updates clock every second
        setInterval(showTime, 1000);
        
        //funct. to create clock
        function showTime() {
            let time = new Date();
            let hours =time.getHours();
            let mins = time.getMinutes();
            let secs = time.getSeconds();
            //var am_pm = "AM";
	    var am_pm = time.getHours() >= 12 ? ' PM' : ' AM';
            
            //Convert clock to 12 hr format
            if (hours > 12) {
                hours -= 12;
                am_pm = "PM";
            }
            if (hours == 0) {
                hours = 12;
                am_pm = "AM";
            }
            
            //update time and seconds if less than 10
            hours = hours< 10 ? "0" + hours : hours;
            mins = mins < 10 ? "0" + mins : mins;
            secs = secs < 10 ? "0" + secs : secs;
          
           //display current time 
           let currentTime = hours + ":"
               + mins + ":" + secs + " " + am_pm;
           document.getElementById("clock")
               .innerHTML = currentTime;
         
           //gets the current date
           var currentDate  = new Date(),
           currentDay   = currentDate.getDate() < 10 
                ? '0' + currentDate.getDate() 
                : currentDate.getDate(),
           currentMonth = currentDate.getMonth() < 9 
                ? '0' + (currentDate.getMonth() + 1) 
                : (currentDate.getMonth() + 1);
         
           //date formatting
           let dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
           let months = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
             
           //displays date
           document.getElementById("date").innerHTML = months[currentMonth - 1] + " " + currentDay + ", " + currentDate.getFullYear();
          
     
     }
     showTime();
      
     //function to update time if less than 10
     function addZero(time) {
	     return (time < 10) ? "0" + time : time;
     }

     //function to set alarm time
     function setAlarm() {
	     var hr = document.getElementById('alarmHrs');
	
	     var min = document.getElementById('alarmMins');
  
             var secs = document.getElementById('alarmSecs');
	
	     var ap = document.getElementById('ampm');
	     
	     //variables get value of selected alarmtime
	     var selectedHour = hr.options[hr.selectedIndex].value;
             var selectedMin = min.options[min.selectedIndex].value;
             var selectedSec = secs.options[secs.selectedIndex].value;
             var selectedAP = ap.options[ap.selectedIndex].value;
  
     //disables alarm dropdown menus once alarm set
     document.getElementById('alarmHrs').disabled = true;
     document.getElementById('alarmMins').disabled = true;
     document.getElementById('alarmSecs').disabled = true;
     document.getElementById('ampm').disabled = true;
	     
     //alarm time formatting
     var alarmTime = selectedHour + ":" + selectedMin + ":" + selectedSec + selectedAP;
  
     //function to compare alarm and current time
     setInterval(function(){
	    let time = new Date();
            let hours = time.getHours();
            let mins = time.getMinutes();
            let secs = time.getSeconds();
            var am_pm = "AM";
  
            //Convert clock to 12 hr format
            if (hours > 12) {
                hours -= 12;
                am_pm = "PM";
            }
            if (hours == 0) {
                hours = 12;
                am_pm = "AM";
            }
            
            //update time and seconds if less than 10
            hours = hours < 10 ? "0" + hours : hours;
            mins = mins < 10 ? "0" + mins : mins;
            secs = secs < 10 ? "0" + secs : secs;
          
            //gets current time 
            var currentTime = hours + ":" + mins + ":" + secs + am_pm;
  
           //gets alarm time
           var alarmTime = selectedHour + ":" + selectedMin + ":" + selectedSec + selectedAP;
        
           //sounds the set alarm
          if (alarmTime == currentTime){
		//PUT https://api.spotify.com/embed/player/play
		const spotifyEmbedWindow = document.querySelector('iframe[src*="https://open.spotify.com/embed/playlist/0VdFQqzv7BbuvNLdiy7oYS"]').contentWindow;
                spotifyEmbedWindow.postMessage({command: 'toggle'}, '*');
                //console.log('time');
		sound.play();
	  }
     },1000);

     }

    //function to stop alarm
    function clearAlarm() {
	document.getElementById('alarmHrs').disabled = false;
	document.getElementById('alarmMins').disabled = false;
        document.getElementById('alarmSecs').disabled = false;
	document.getElementById('ampm').disabled = false;
	 //PUT https://api.spotify.com/embed/player/pause
	sound.pause();
        sound.currentTime = 0;
   }



