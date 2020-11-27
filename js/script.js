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


        }, 50);


        var chase = setInterval(function() {
        	makeSmallTicker += 1;
            if (makeSmallTicker==10) { makeSmallTicker = 0; makeSmallTicker = 0; };
 		document.querySelectorAll('.kitty')[makeSmallTicker].classList.remove("makeBig");
        }, 50);

        // setTimeout(function() {
        //     clearInterval(logger)
        // }, 5500)

const dynamicButton = document.getElementById("dynamicButton"); 
const sample = document.getElementById("sample"); 
const kispy = document.getElementById('kispy');
const catMeter = document.getElementById("catMeter"); 
const fundsStolen = document.getElementById("fundsStolen"); 

kispy.addEventListener("mouseover", function(){
    mouseOverKispy();
});

kispy.addEventListener("mouseout", function(){ 
    mouseOutKispy();
});

kispy.addEventListener("click", function(){
    playSample();
});


const mouseOverKispy = () => {
    document.getElementById("kispy").style.backgroundImage  = "url('img/kispyPng2.png')"
};

const mouseOutKispy = () => {
    document.getElementById("kispy").style.backgroundImage  = "url('img/kispyPng1.png')"
};



function playSample() { 
  sample.play()
} 
    let funds = 124;

const buttonKispyMeow = () => {
    let frame = 1;
        catMeter.style.display = 'block';
    playSample()
    dynamicButton.remove();
    alert("I'm Kispy! meow meow meow! Are you sure you trust Me?")
        
        var animateKispy = setInterval(function() {
            
            document.getElementById("kispy").style.backgroundImage  = "url('img/kispyPng"+frame+".png')"
            frame += 1;
            console.log(frame)
            if (frame==9) { 
                frame = 1;
                playSample();   
                fundsStolen.style.color = "black";           
             };

              if (frame==4) { 
                     fundsStolen.innerHTML = `Your bank account has been DRAINED of $${funds.toFixed(2)} $ WaRNING warniNG Transaction APPROVED`;     
                     funds = funds*2.8; 
                     fundsStolen.style.color = "red";
             };
            
        }, 100);
};

