var tt = TweenMax.to, tf = TweenMax.from, tft = TweenMax.fromTo,td = TweenMax.delayedCall, ts = TweenMax.set, tweenDelay = .5;



init = function(){
	build_timeline_main();
	addListeners();
	
	TweenMax.staggerTo(".star", 0, {x:100},0)
	
	
}
function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}

function build_timeline_main() {	
	
	function bg2In() {
		var bg2TL = new TimelineMax();
			bg2TL.fromTo(scrub_bar, 10, {scaleX:.25}, {scaleX:.9, transformOrigin:"28px 100%", ease:Power0.easeNone},"start")		
		return bg2TL;		
		//bg2TL.timeScale( 0.8);
	}	
	function bg1In() {
		var bg1TL = new TimelineMax();
			bg1TL.timeScale(2)
				.add("start")
				.to("#img_walking", 1,{repeat:-1, x:-3000, ease:SteppedEase.config(10)}, "start")
				.to("#img_walking_feet", 1,{repeat:-1, x:-3000, ease:SteppedEase.config(10)}, "start")
				.from("#img_beach", 5,{x:-100, ease:Power0.easeNone}, "start")
				.fromTo(["#img_towel1", "#img_towel1_front"], 2.3,{x:-300, ease:Power0.easeNone},{x:300, ease:Power0.easeNone}, "start")
				.to("#img_bag1", .001, {autoAlpha:0}, "start+=1")
				.from(["#img_bag2", "#img_bag2_front"], .001, {autoAlpha:0}, "start+=1")
				.to("#img_bag1", .001, {autoAlpha:1}, "start+=1.2")
				.to(["#img_bag2", "#img_bag2_front"], .001, {autoAlpha:0}, "start+=1.21")
				//.addPause("start+=1.05")
		
				.add("towel2", "+=.75")
				 
				.fromTo(["#img_towel2", "#img_towel2_front"], 2.3,{x:-300, ease:Power0.easeNone},{x:300, ease:Power0.easeNone}, "towel2")
				.to("#img_drink", .001, {autoAlpha:0}, "towel2+=1.15")
				.from(["#img_spill"], .001, {autoAlpha:0}, "towel2+=1.15")
			//	.addPause("towel2+=1.16")
			
				.add("towel3", "+=.75")
				 
				.fromTo(["#img_towel3"], 2.3,{x:-300, ease:Power0.easeNone},{x:300, ease:Power0.easeNone}, "towel3")
				.add(stopIt)			
		return bg1TL;
		function stopIt() {
			TweenMax.killTweensOf("#img_walking");
			TweenMax.killTweensOf("#img_walking_feet");
		}
	}	
	
	//Show Ad 
	ts("#container_dc", {display:"block"});
	var mainTL = new TimelineMax();
		mainTL.to(bgFade, .25, {autoAlpha:0, ease:Power1.easeInOut, overwrite:"none", onComplete:hideBGFade},"fr0")
		.add("fr1", "+=0")
		.staggerFromTo("#copy1 .text1", .01, {autoAlpha:0},{autoAlpha:1, ease:"Power3.easeOut"},1.2,"fr1+=.2")	
			
		.add("fr1_out", "+=1.4")
		.from("#anim_container", .01, {autoAlpha:0, ease:"Power3.easeOut"},"fr1_out" )
		.to("#copy1", .01, {autoAlpha:0, ease:"Power3.easeOut"},"fr1_out+=.25" )
		.add(bg1In,"fr1_out-=0")
		.add(bg2In,"fr1_out+=0")
		
		//.addPause()		
		.add("fr2", "+=2.7")
		.to("#anim_container", .01, {autoAlpha:0, ease:"Power3.easeInOut"},"fr2" )
		.staggerFromTo("#copy2 .text1", .01, {autoAlpha:0},{autoAlpha:1, ease:"Power3.easeOut"},1.2,"fr2+=.3")

		
		.add("fr3", "+=2.25")
		
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


