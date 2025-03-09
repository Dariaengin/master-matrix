
$("document").ready(function () {
    let timer;
    let timeLeft = 25 * 60;//convertion to seconds

    //function to display the timer
    function displayTimer() {
        let hours = Math.floor(timeLeft / 3600);// calculate hours
        let minutes = Math.floor(timeLeft/60)- hours * 60; //calculate minutes
        let seconds = timeLeft - (hours * 3600) - (minutes * 60);//calculate seconds

        $(".hours").text(hours < 10 ? "0" + hours : hours);
        $(".minutes").text(minutes < 10 ? "0" + minutes : minutes);
        $(".seconds").text(seconds < 10 ? "0" + seconds : seconds);
    }

    //start button
    $(".start-btn").on("click", function () {
        clearInterval(timer);
        timer = setInterval(function () {
            timeLeft--;// decrease the time by 1s
            displayTimer();
            if (timeLeft <= 0) {
                clearInterval(timer);
                $("#alarm-sound")[0].play();
            }
        }, 1000)
    });

   // reset buttton
    $(".reset-btn").on("click", function () {
        clearInterval(timer);// stop the timer 
        timeLeft = 25 * 60;
        displayTimer();//update the display
        $("#alarm-sound")[0].pause();// stop the alarm
    })

    // choose timer
    $(".choose-timer-btn").on("click", function () {
        let chosenTime= prompt("Choose time in minutes")
        if (chosenTime !== null && chosenTime.trim() !== "" && chosenTime > 0) {
            timeLeft = parseInt(chosenTime)*60;// converts the time to the number and to the seconds
            displayTimer();//show the new chosen time on display
        } else {
             alert("fill in with correct time")// show an error message 
        }
    })

})
