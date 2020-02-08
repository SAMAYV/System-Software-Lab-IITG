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

	function bg2In() {
		var bg2TL = new TimelineMax();
			bg2TL.fromTo(scrub_bar, 10, {scaleX:.2}, {scaleX:.6, transformOrigin:"28px 100%", ease:Power0.easeNone},"start")		
		return bg2TL;		
		//bg2TL.timeScale( 0.8);
	}
	function bg1In() {
		var bg1TL = new TimelineMax();
			bg1TL.timeScale(1.2)
				.add("start1")
				.to("#img_bg", 4, {scaleY:2.5, transformOrigin:"150px 114px", ease:Power1.easeInOut},"start1")
				.set("#img_left_arm", {scale:1, rotation:-95, y:55, x:2, transformOrigin:"90px 50px"},"start1")
				.set("#img_right_arm", {scale:1, rotation:93, y:55, x:-3, transformOrigin:"210px 70px"},"start1")
			
				.to("#img_left_arm", 1, {x:43, ease:Power1.easeInOut},"start1")
				.to("#img_right_arm", 1, {x:-45, ease:Power1.easeInOut},"start1")
			
				.staggerFromTo(".line", 3, {y:200, scaleX:.4, scaleY:.8, rotation:.01},{scaleX:2.5, scaleY:2, rotation:0, y:-50,force3D:true, ease:Power1.easeInOut},.15,"start1")
				.to("#img_hands", 2, {y:165, ease:Power1.easeInOut},"start1+=1.1")
				.to("#img_bg", 2, {y:50, ease:Power1.easeInOut},"start1+=1.1")
				.to(["#img_bg", "#anim_bg"], 1,{autoAlpha:0},"start1+=2")
				.fromTo("#img_bg2", 2, {autoAlpha:1},{autoAlpha:0, ease:Power1.easeInOut},"start1+=2")
		
		
				
		return bg1TL;
		//bg1TL.timeScale(200);
	}	
	
	//Show Ad
	ts("#container_dc", {display:"block"});
	var mainTL = new TimelineMax();
		mainTL.to(bgFade, .25, {autoAlpha:0, ease:Power1.easeInOut, overwrite:"none", onComplete:hideBGFade},"fr0")
		.add("fr1", "+=0")
		.staggerFromTo("#copy1 .text1", .01, {autoAlpha:0},{autoAlpha:1, ease:"Power3.easeOut"},.75,"fr1+=.2")	
		
			
		.add("fr1_out", "+=1.25")
		.from("#anim_container", .01, {autoAlpha:0, ease:"Power3.easeOut"},"fr1_out" )
		.to("#copy1", .01, {autoAlpha:0, ease:"Power3.easeOut"},"fr1_out+=.25" )
		.add(bg1In,"fr1_out+=0")
		.add(bg2In,"fr1_out")
	
		//.addPause()
		.add("fr2", "+=2.1")
		.to("#anim_container", .01, {autoAlpha:0, ease:"Power3.easeInOut"},"fr2" )
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


