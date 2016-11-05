window.onload=function(){
	//侧导航
	var oSide=document.getElementById('side_bar');
	var aLi=oSide.getElementsByTagName('li');
	for(var i=0; i<aLi.length;i++){
		aLi[i].onmouseover=function(){		
			for(var i=0; i<aLi.length;i++){
				aLi[i].className='';
				aLi[i].getElementsByTagName('div')[0].style.display='none';
			}
			this.className='active';			
			this.getElementsByTagName('div')[0].style.display='block';
		}
		aLi[i].onmouseout=function(){
			this.className='';
			this.getElementsByTagName('div')[0].style.display='none';		
		}		
	}
	//轮播图
	var bannerBtnBox=document.getElementById('banner_btn');
	var bannerBtn=bannerBtnBox.getElementsByTagName('li');
	var bannerShowBox=document.getElementById('banner_box');
	var bannerShow=bannerShowBox.getElementsByTagName('li');

	var iNow=0;
	var iNow2=0;
	for(var i=0; i<bannerBtn.length;i++){
		bannerShowBox.style.width=bannerBtn.length*bannerShow[0].offsetWidth+'px';
		bannerBtn[i].index=i;
		bannerBtn[i].onclick=function(){
			
			for(var i=0; i<bannerBtn.length;i++){
				bannerBtn[i].className='';
			}
			this.className='active';
			startMove(bannerShowBox,{left:-this.index*bannerShow[0].offsetWidth})
		}
	}
	setInterval(playBnaner,3000);
	function playBnaner(){
		if(iNow==bannerShow.length-1){
			bannerShow[0].style.position='relative';
			bannerShow[0].style.left=bannerShow.length*bannerShow[0].offsetWidth+'px'
			iNow=0;
		}else{
			iNow++;
		}
		iNow2++;
		
		for(var i=0; i<bannerBtn.length;i++){
				bannerBtn[i].className='';
		}
		bannerBtn[iNow].className='active';
		startMove(bannerShowBox,{left:-iNow2*bannerShow[0].offsetWidth},function(){
			if(iNow==0){
				bannerShow[0].style.position='static';
				bannerShowBox.style.left=0;
				iNow2=0;
			}
		})
		
	}
	//小轮播
	var cheapBox=document.getElementById('cheap-show');
	var cheapShow=cheapBox.getElementsByTagName('li');
	var cheapBtnBox=document.getElementById('cheap-btn');
	var cheapBtn=cheapBtnBox.getElementsByTagName('li');
	var n=0;
	var n2=0;
	cheapBox.style.width=cheapShow[0].offsetWidth*cheapShow.length+'px';
	for(var i=0; i<cheapBtn.length;i++){
		cheapBtn[i].index=i;
		cheapBtn[i].onclick=function(){
			for(var i=0; i<cheapBtn.length;i++){
				cheapBtn[i].className='';
			}
			this.className='active';
			startMove(cheapBox,{left:-this.index*cheapShow[0].offsetWidth});
		}
	}
	setInterval(toRun,1000)
	
	function toRun(){
		if(n==cheapBtn.length-1){		
			cheapShow[0].style.position='relative';
			cheapShow[0].style.left=cheapShow[0].offsetWidth*cheapShow.length+'px';		
			n=0;
		}else{
			n++;
		}
		n2++;
		
		for(var i=0; i<cheapBtn.length;i++){
				cheapBtn[i].className='';
		}
		cheapBtn[n].className='active'
		startMove(cheapBox,{left:-n2*cheapShow[0].offsetWidth},function(){
			if(n==0){
				
				cheapShow[0].style.position='static';
				cheapBox.style.left=0;
				n2=0;
			}
		})
		
	}
	
}
