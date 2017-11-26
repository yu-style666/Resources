

var myScroll;
var position;

function moveFun () {
	if((this.y>>0) > this.maxScrollY){
		$("#pullUp").removeClass('flip');
	}
	if( !$("#pullUp").hasClass('flip') && ((this.y>>0) < this.maxScrollY)){
		$("#pullUp").text('上拉加载更多**********');
	}
	if((this.y>>0) < this.maxScrollY - 40){
		$("#pullUp").addClass('flip');
		$("#pullUp").text('松开立即加载');
	}
}
function endFun(){
	if($("#pullUp").hasClass('flip')){
		var len = $("#scroller").find("li").length + 1;
		for(var i = 0; i< 20; i++){
			$("#scroller").find("ul").append("<li>pretty row "+ (len + i) +"</li>");
		}
		$("#pullUp").removeClass('flip');
			this.refresh();
	}
}

function loaded () {
	position = document.getElementById('position');

	myScroll = new IScroll('#wrapper', { probeType: 3, mouseWheel: true });

	myScroll.on('scroll', moveFun);
	myScroll.on('scrollEnd', endFun);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
