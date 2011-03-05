/**
 * 
 */
var so = new SWFObject("../swf/livePlayer.swf", "live", "600", "400", "10.0", "#FFFFFF");
var mode = "server";
$(function() {
	$("#server").click(function() {
		change("server");
		server();
	});
	$("#profile").click(function() {
		change("profile");
		profile();
	});
	$("#lobby").click(function() {
		change("lobby");
		lobby();
	});
	change("server");
//	server();
});
function change(page) {
	mode = page;
	$("#server").removeClass("now");
	$("#profile").removeClass("now");
	$("#lobby").removeClass("now");
	$("#" + page).addClass("now");
}
function server() {
	$("#body").html(
		"<dl>" +
			"<dt>" +
				"Select your server..." +
			"</dt>" +
			"<dd>" +
				"<form>" +
				"<select size='2'>" +
					"<option>5eac5a6934f97ff6a58c0282-2457b4389592</option>" +
					"<option>rtmp://163.224.148.53/ttProject/</option>" +
				"</select>" +
				"<br />" +
					"<input type='button' value='connect'/>" +
				"</form>" +
			"</dd>" +
		"</dl>"
	);
}
function profile() {
	$("#body").html(
			"<dl>" +
			"<dt>" +
				"あいうえお" +
			"</dt>" +
			"<dd>" +
			"</dd>" +
		"</dl>"
	);	
}
function lobby() {
	$("#body").html(
			"<dl>" +
			"<dt>" +
				"あいうえお" +
			"</dt>" +
			"<dd>" +
			"</dd>" +
		"</dl>"
	);	
}
