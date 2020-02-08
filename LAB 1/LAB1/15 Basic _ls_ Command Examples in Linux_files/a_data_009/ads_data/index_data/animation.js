var tt = TweenMax.to, tf = TweenMax.from, tft = TweenMax.fromTo,td = TweenMax.delayedCall, ts = TweenMax.set, tweenDelay = .5;



init = function(){
	build_timeline_main();
	addListeners();
	
	
	
}
function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}
function build_timeline_main() {	
	
	//Show Ad
	ts("#container_dc", {display:"block"});
	var mainTL = new TimelineMax();
		mainTL.to(bgFade, .25, {autoAlpha:0, ease:Power1.easeInOut, overwrite:"none", onComplete:hideBGFade},"fr0")
		.add("fr1", "+=0")
		.staggerFromTo("#copy1 .text1", .01, {autoAlpha:0},{autoAlpha:1, ease:"Power3.easeOut"},.7,"fr1+=.2")	
		.fromTo("#copy1_line", .3, {scaleX:0},{scaleX:1, transformOrigin:"81px 50%", ease:"Power3.easeInOut"},"+=.1")	

		.add("fr2", "+=2")
		.to("#copy1", .01, {autoAlpha:0, ease:"Power3.easeOut"},"fr2" )	
		.staggerFromTo("#copy2 .text1", .01, {autoAlpha:0},{autoAlpha:1, ease:"Power3.easeOut"},1,"fr2+=.3")

		.add("fr3", "+=2.5")		
		.to("#copy2", .01, {autoAlpha:0,ease:"Power3.easeOut"},"fr3" )
		.staggerFromTo("#copy3 .text1", .5, {autoAlpha:0, x:-20},{autoAlpha:1, x:0,  ease:"Power3.easeOut"},.07,"fr3+=.3" )
		.staggerFromTo("#copy3 .text2", .5, {autoAlpha:0, x:-20},{autoAlpha:1, x:0, ease:"Power3.easeOut"},.07,"+=.25" )
		.add("ef")
		.call(function(){console.log(mainTL.duration());});
		//mainTL.seek("fr1_out")		
}



hideBGFade = function(){
	bgFade.style.display = "none";
}


//Add Event Listeners
setRoll = function(){
	var x = document.getElementById("background_exit_dc");
	if (x.addEventListener) {                    
		// For all major browsers, except IE 8 and earlier
	    x.addEventListener('mouseover', bgOverHandler, false);
	    x.addEventListener('mouseout', bgOutHandler, false);
	} else {                  
		// For IE 8 and earlier versions hide rollover effect
	}
}
addListeners = function() {
	setRoll();
}


bgOverHandler = function(e) {
	ts(cta, {autoAlpha:.7, overwrite:"true"});			
}

bgOutHandler = function(e) {
	ts(cta, {autoAlpha:1, overwrite:"true"});			
}


function bgExitHandler() {

}


