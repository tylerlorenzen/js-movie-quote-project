document.addEventListener('DOMContentLoaded', () => {

    const backgroundImage = document.getElementById("backgroundImage");
    let gradient = 99;
    let urlLink = ["https://m.media-amazon.com/images/M/MV5BNDM3ZDY5NTQtMGVjYy00MTY4LWIwMTYtOTBjMDFjY2Q5ZDU5XkEyXkFqcGdeQXVyNDA4MDkxNzE@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BNWI4NWY1OGItZmU3NS00MGZlLWE4MDItNzBiZjBjOTNiNjIwXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BNjcwNjlhODctMmM3Ni00ZTMwLTk3MzAtZjZhZjA5NmUxNzc3XkEyXkFqcGdeQXVyNjc3NDgwNzU@._V1_.jpg"]
    let opacityCount = 100
    let opacityTimer
    let faddingIn = true
    let i = 0

    function changeBackground() {
        if(i < urlLink.length)  {
            backgroundImage.style.backgroundImage = `url('${ urlLink[i] }')`;
            backgroundImage.style.backgroundSize = "cover";
            backgroundImage.style.backgroundPosition = "center";
            i++;
            fadeIn();
        } else {
            i = 0
            backgroundImage.style.backgroundImage = `url('${ urlLink[i] }')`;
            backgroundImage.style.backgroundSize = "cover";
            backgroundImage.style.backgroundPosition = "center";
            i++;
            fadeIn();
        }
    }

    function fadeIn() {
        opacityTimer = setInterval(function () {
            document.getElementById("backgroundFadeOut").style.opacity = `${ opacityCount }%`;
            opacityCount -= 1
            if (opacityCount === 0) {
                faddingIn = false
                pause()  
            }
        }, 30)

   }



   function fadeOut() {
        opacityTimer = setInterval(function () {
            document.getElementById("backgroundFadeOut").style.opacity = `${ opacityCount }%`;
            opacityCount += 1
            if (opacityCount === 100) {
                faddingIn = true
                pause()
            }
        }, 30)
   }


   function pause() {
        clearInterval(opacityTimer)
        console.log(opacityCount)
        if (!faddingIn) {
            fadeOut()
        }
        if (faddingIn) {
            changeBackground()
        }
    }


    function start() {
        changeBackground();
    }

    //let timerID = setInterval(changeBackground, 1000, gradient > 0)

    start()

});








