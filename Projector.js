function set_body_height()
{
    var wh = $(window).height();
    $('body').attr('style', 'height:' + wh + 'px;');
}
$(document).ready(function() {
    set_body_height();
    $(window).bind('resize', function() { set_body_height(); });
});




var clickPicsURL = "http://54.158.251.62:4000/currentSelect";

var clickPicsData;
var URL = "http://www.queensjewishlink.com/wp-content/uploads/2016/02/Snowman.jpgs";
setInterval(function(){
	getClickPics();
	if(clickPicsData != "haha"){
		URL = JSON.parse(clickPicsData).imgLink;
		document.getElementById("mainImg").src = URL;
	}
	
}, 3000);

function getClickPics(){
	$.ajax({
	    url: clickPicsURL,
	    type: 'Get',
	    success: function (data) {
	    	console.log(data);
	        clickPicsData = data;
	    },
	    error: function(error) {
	    	console.log('Error: ') ;
		}
	});
}
