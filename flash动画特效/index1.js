(function(){
	var oLeft=id("left");
	var oRight=id("right");
	var oBigImg=id("big-img");
	var aImgs=tag("img",oBigImg);
	var oInfo=id("info");
	var oSmallImg=id("small-img");
	var smallAimgs=tag("img",oSmallImg);
	var oChangeNum=id("change-num");
	var nowIndex=0;
	var oContiner=id("continer");
	var zIndex=9;
	var timer;

	oLeft.onmouseover=oRight.onmouseover=function(){

		animate(this,{opacity:100})
	}
	oLeft.onmouseout=oRight.onmouseout=function(){

		animate(this,{opacity:0});
	}
    oLeft.onclick=oRight.onclick=function(){
    		if(this==oLeft){
    			nowIndex--;
    			if(nowIndex==-1){
    				nowIndex=aImgs.length-1
    			}
    			change(nowIndex);
    		}
    		else if(this==oRight){
    			nowIndex++;
    			if(nowIndex==aImgs.length){
    				nowIndex=0;
    			}
    			change(nowIndex);
    		}

    }
     
    timer=setInterval(function(){
    	oRight.onclick();
    },1000);
    oContiner.onmouseover=function(){
    	clearInterval(timer);
    }

     oContiner.onmouseout=function(){
    	timer=setInterval(function(){
    	oRight.onclick();
    },1000);
    }

	for(var i=0;i<smallAimgs.length;i++){
		smallAimgs[i].index=i;
		smallAimgs[i].style.opacity = 0.3;
		smallAimgs[i].onmouseover=function(){
		
			animate(this,{opacity:100});

		}
		smallAimgs[i].onmouseout=function(){
			
			
			if(this.index==nowIndex){
				this.style.opacity=100;
			}else{
				animate(this,{opacity:30});
			}

		}

		smallAimgs[i].onclick=function(){
			
			change(this.index);


		}
	}







	function change(idx){
		nowIndex=idx;
console.log(nowIndex);
 			nowIndex=idx;
 		aImgs[nowIndex].style.opacity=0;
		aImgs[nowIndex].style.filter="alpha(opacity=0)";
 		aImgs[nowIndex].style.zIndex=zIndex++;
 		animate(aImgs[nowIndex],{opacity:100});
 		 oLeft.style.zIndex=zIndex++;
 		  oRight.style.zIndex=zIndex++;
 		  oInfo.style.zIndex=zIndex++;
 		  oChangeNum.innerHTML=nowIndex+1;









		
		// for(var i=0;i<aImgs.length;i++){
		// 	aImgs[i].style.opacity=0;
		// 	smallAimgs[i].style.opacity=0.3;
		// }
		// animate(aImgs[idx],{opacity:100});
		//  var aleft=0;
	 // 		if(nowIndex==0||nowIndex==1){
	 // 		  	aleft=0;
	 // 		 } else if(nowIndex==6||nowIndex==7){
	 // 		  		aleft=smallAimgs.length/2;
	 // 		  }
	 	
	 // 	else{
	 // 		aleft=nowIndex-1;
	 // 	}
		// animate(oSmallImg, {left: -aleft * smallAimgs[0].offsetWidth});
		// smallAimgs[idx].style.opacity=100;
		// oChangeNum.innerHTML=idx+1;















	}
})();