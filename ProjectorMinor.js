var counter = 1;
var currentPic;

p1 = document.getElementById("p1");
p2 = document.getElementById("p2");
p3 = document.getElementById("p3");
p4 = document.getElementById("p4");
p5 = document.getElementById("p5");
p6 = document.getElementById("p6");
p7 = document.getElementById("p7");
p8 = document.getElementById("p8");
p9 = document.getElementById("p9");
p10 = document.getElementById("p10");
p11 = document.getElementById("p11");
p12 = document.getElementById("p12");

var recentPicsURL = "http://54.158.251.62:4000/recentPics";
var recentPicsData;

console.log('hahadf');



var imageSrc1 = "https://s-media-cache-ak0.pinimg.com/originals/95/4e/35/954e35c3e6ae2fb779a3c0141d996023.jpg";
var imageSrc2 = "https://pbs.twimg.com/profile_images/641353910561566720/VSxsyxs7.jpg";
var imageSrc3 = "https://upload.wikimedia.org/wikipedia/commons/b/b3/Viw_from_cascade2008.jpg";
var imageSrc4 = "http://stuffpoint.com/holidays/image/272821-holidays-eiffel-tower-in-paris-viw-from-the-river.jpg";
var imageSrc5 = "http://c8.alamy.com/comp/AK1P7M/a-viw-of-salt-river-bay-national-historical-park-on-st-croix-where-AK1P7M.jpg";
var imageSrc6 = "http://www.fansofflanders.be/~/media/Images/Blogs/24_August_2014/08082014_WritingContest24/08082014_WritingContest24_BLOG.ashx";
var imageSrc7 = "http://mobilewalpaper.yolasite.com/resources/mw88.jpg";
var imageSrc8 = "http://www.fansofflanders.be/~/media/Images/Blogs/23_July_2014/11072014_Writing_Contest_5/11072014_WritingContest5_BLOG.ashx";
var imageSrc9 = "http://www.designboom.com/wp-content/uploads/2015/08/viwdesignboom03.jpg";
var imageSrc10 = "http://thumb1.shutterstock.com/display_pic_with_logo/490804/321173528/stock-photo-gift-box-with-headphones-on-wooden-table-top-viw-321173528.jpg";
var imageSrc11 = "http://previews.123rf.com/images/thecarlinco/thecarlinco0804/thecarlinco080400015/2791923-Space-shuttle-launching-side-viw-on-black-background-Stock-Photo.jpg";
var imageSrc12 = "https://media-cdn.tripadvisor.com/media/photo-s/01/54/a1/de/viw-from-rooftop-terrace.jpg";

p1.src = imageSrc1;
p2.src = imageSrc2;
p3.src = imageSrc3;
p4.src = imageSrc4;
p5.src = imageSrc5;
p6.src = imageSrc6;
p7.src = imageSrc7;
p8.src = imageSrc8;
p9.src = imageSrc9; 
p10.src = imageSrc10;
p11.src = imageSrc11;
p12.src = imageSrc12;


function getRecentPics(){
	$.ajax({
	    url: recentPicsURL,
	    type: 'Get',
	    success: function (data) {
	        recentPicsData = data;
	    },
	    error: function(error) {
	    	console.log('Error: ') ;
		  	console.log(error);
		}
	});
}

setInterval(function(){
	currentPic = 'pc' + String(counter%12+1);
	select(currentPic);
	setTimeout(function(){
	   deselect(currentPic);
	}, 2000);
	
	getRecentPics();


	currentPic2 = 'p' + String(counter%12+1);
	currentPicTitle2 = 't' + String(counter%12+1);
	console.log(currentPic);
	console.log(currentPic2);
	if(recentPicsData != null){

		document.getElementById(currentPic2).src = JSON.parse(recentPicsData).url[counter%12];
		document.getElementById(currentPicTitle2).textContent = JSON.parse(recentPicsData).title[counter%12];
	}
	//document.getElementById("t2").textContent = "haha";

	
	counter++;

}, 3000);


function select(id) {

    var changeImg = $('#'+id+' > img');
    var changeOverlay= $('#'+id+" > .overlay");
    var changeOverlay_h2= $('#'+id+" > .overlay > h2");
	var changeOverlay_a= $('#'+id+" > .overlay > a > .info");

	changeImg.css({
		"-ms-transform":"scale(1.2)",
		"-webkit-transform":"scale(1.2)",
		"transform":"scale(1.2)"
	});
	
	changeOverlay.css({
		"opacity":"1",
		"filter":"alpha(opacity=100)"
	});
	
	changeOverlay_h2.css({
		"opacity":"1",
		"filter":"alpha(opacity=100)",
		"-ms-transform":"translatey(0)",
		"-webkit-transform":"translatey(0)",
		"transform":"translatey(0)"
	});

	changeOverlay_a.css({
		"opacity":"1",
		"filter":"alpha(opacity=100)",
		"-ms-transform":"translatey(0)",
		"-webkit-transform":"translatey(0)",
		"transform":"translatey(0)",
		"-webkit-transition-delay":".2s",
		"transition-delay":".2s"
	});
}


function deselect(id) {
	//var id = 'pc1'
    var changeImg = $('#'+id+' > img');
    var changeOverlay= $('#'+id+" > .overlay");
    var changeOverlay_h2= $('#'+id+" > .overlay > h2");
	var changeOverlay_a= $('#'+id+" > .overlay > a > .info");


	changeImg.css({
		"-ms-transform":"",
		"-webkit-transform":"",
		"transform":""
	});
	
	changeOverlay.css({
		"opacity":"",
		"filter":""
	});
	
	changeOverlay_h2.css({
		"opacity":"",
		"filter":"",
		"-ms-transform":"",
		"-webkit-transform":"",
		"transform":""
	});

	changeOverlay_a.css({
		"opacity":"",
		"filter":"",
		"-ms-transform":"",
		"-webkit-transform":"",
		"transform":"",
		"-webkit-transition-delay":"",
		"transition-delay":""
	});
}




