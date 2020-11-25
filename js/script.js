const kitty = document.querySelectorAll('.kitty')[0];


kitty.addEventListener("mouseover", function(){
});

kitty.addEventListener("mouseout", function(){

});

kitty.addEventListener("click", function(){
	;
});


const zoomEye = (makeBigTicker) => {
	document.querySelectorAll('.kitty')[makeBigTicker].classList.add("makeBig");

};
const makeBig = () => {
	kitty.classList.add("makeBig");
};
const makeSmall = () => {
	kitty.classList.remove("makeBig");
};

const kisspyFace = () => {
	document.getElementById("catMeter").style.backgroundImage  = "url('img/kispy.jpg')"
	        setTimeout(function() {
            document.getElementById("catMeter").style.backgroundImage  = ""
        }, 100)

}

const body = document.body;
let makeBigTicker = 0;
let makeSmallTicker = 1;


        var ticker = setInterval(function() {
            makeBigTicker += 1;
            if (makeBigTicker==10) { makeBigTicker = 0; makeSmallTicker = 0; };
 			document.querySelectorAll('.kitty')[makeBigTicker].classList.add("makeBig");


        }, 200);


        var chase = setInterval(function() {
        	makeSmallTicker += 1;
            if (makeSmallTicker==10) { makeSmallTicker = 0; makeSmallTicker = 0; };
 		document.querySelectorAll('.kitty')[makeSmallTicker].classList.remove("makeBig");
        }, 100);

        // setTimeout(function() {
        //     clearInterval(logger)
        // }, 5500)


