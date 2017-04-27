function Banner(obj,indicator,left,right){
			// var oBanner=document.getElementById(obj);
			this.timer=null;
			this.i=0;
			this.oBanner=document.getElementById(obj);
			this.oLi=this.oBanner.getElementsByTagName("li");
			this.oIndicator=document.getElementById(indicator);
			this.oSpan=this.oIndicator.getElementsByTagName('span');
			this.oLeft=document.getElementById(left);
			this.oRight=document.getElementById(right);
			this.len=this.oLi.length;
			clearInterval(this.timer);
			this.autoPlay();
			this.oBanner.onmouseover=function(){
				this.stops();
			}.bind(this); //bind(this)让悬停事件里面的this指向实例对象	
			this.oBanner.onmouseout=function(){
				this.autoPlay();
			}.bind(this);
			// this.oRight.onclick=function(){
			// 	this.next();
			// }.bind(this);
			// this.oLeft.onclick=function(){
			// 	this.prev();
			// }.bind(this);
			var that=this;
			for(var n=0;n<this.oSpan.length;n++)
			{
				this.oSpan[n].index=n;
				this.oSpan[n].onclick=function(){
					//that.control();
					for(var j=0;j<that.len;j++)
					{
						that.oSpan[j].className='';
						that.oLi[j].style.display='none';
						var img=that.oLi[j].getElementsByTagName('img')[0];
						img.className="";
					}
					this.className='on';
					that.oLi[this.index].style.display='block';
					that.i=this.index; //that是实例对象 this是当前被点击的点
					var img=that.oLi[this.index].getElementsByTagName('img')[0];
					img.className="active";
					switch (that.i) {
						case 0:
							that.oBanner.style.background = '#333';
							break;
						case 1:
							that.oBanner.style.background = '#FFE1E0';
							break;
						case 2:
							that.oBanner.style.background = '#eee';
							break;
						case 3:
							that.oBanner.style.background = '#FCE3C8';
							break;
						default:
							that.oBanner.style.background = '#333';
							break;
					}
				}		
			}		
		}
		Banner.prototype.autoPlay=function(){
			this.timer=setInterval(function(){
				// console.log(this)
				this.i++;
				if(this.i>=this.len){
					this.i=0;
				}
				switch (this.i) {
					case 0:
						this.oBanner.style.background = '#333';
						break;
					case 1:
						this.oBanner.style.background = '#FFE1E0';
						break;
					case 2:
						this.oBanner.style.background = '#eee';
						break;
					case 3:
						this.oBanner.style.background = '#FCE3C8';
						break;
					default:
						this.oBanner.style.background = '#333';
						break;
				}
				for(var j=0;j<this.len;j++)
				{
					this.oLi[j].style.display='none';
					this.oSpan[j].className='';
					var img=this.oLi[j].getElementsByTagName('img')[0];
					img.className="";
				}
				this.oLi[this.i].style.display='block';
				this.oSpan[this.i].className='on';
				var img=this.oLi[this.i].getElementsByTagName('img')[0];
				img.className="active";
			}.bind(this),3000);
		}
		Banner.prototype.stops=function(){
			clearInterval(this.timer);	
		}
		Banner.prototype.gotoPlay=function(){	
			this.autoPlay();
		}
		Banner.prototype.next=function(){
			this.i++;
			if(this.i>=this.len){
				this.i=0;
			}
			for(var j=0;j<this.len;j++)
			{
				this.oLi[j].style.display='none';
				this.oSpan[j].className='';
			}
			this.oLi[this.i].style.display='block';
			this.oSpan[this.i].className='on';
		}
		Banner.prototype.prev=function(){
			if(this.i<=0){
				this.i=this.len;
			}
			this.i--;
			for(var j=0;j<this.len;j++)
			{
				this.oLi[j].style.display='none';
				this.oSpan[j].className='';
			}
			this.oLi[this.i].style.display='block';
			this.oSpan[this.i].className='on';
		}
