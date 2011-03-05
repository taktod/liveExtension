/**
 * 
 */
var so = new SWFObject("../swf/livePlayer.swf", "live", "600", "400", "10.0", "#FFFFFF");
var mode = "server";
var c18 = chrome.i18n;
$(function() {
	language();
	$("#server").click(function() {
		change("server");
		server();
	});
	$("#lobby").click(function() {
		change("lobby");
		lobby();
	});
	$("#myroom").click(function() {
		change("myroom");
		myroom();
	});
	$("#profile").click(function() {
		change("profile");
		profile();
	});
	change("server");
//	server();
});
function language() {
	$("#head-top").text(c18.getMessage("menu_header"));
	$("#server").text(c18.getMessage("menu_servers"));
	$("#profile").text(c18.getMessage("menu_profile"));
	$("#myroom").text(c18.getMessage("menu_myroom"));
	$("#lobby").text(c18.getMessage("menu_lobby"));
}
function change(page) {
	mode = page;
	$("#server").removeClass("now");
	$("#profile").removeClass("now");
	$("#myroom").removeClass("now");
	$("#lobby").removeClass("now");
	$("#" + page).addClass("now");
}
function server() {
	$("#body").html(
		"<dl>" +
			"<dt>" +
				c18.getMessage("servers_selected") +
			"</dt>" +
			"<dd>" +
				"<input type='text' value='6a58c0282-2457b4389592' readonly='readonly'/>" +
			"</dd>" +
			"<dt>" +
				c18.getMessage("servers_list") +
			"</dt>" +
			"<dd>" +
				"<form>" +
					"<select size='2'>" +
						"<option>6a58c0282-2457b4389592</option>" +
						"<option>rtmp://163.224.148.53/ttProject/</option>" +
					"</select>" +
					"<br />" +
					"<input type='button' value='connect'/>" +
				"</form>" +
			"</dd>" +
			"<dt>" +
				c18.getMessage("servers_add") +
			"</dt>" +
			"<dd>" +
				"<form>" +
					"<input type='text' />" +
					"<br />" +
					"<input type='button' value='add'/>" +
				"</form>" +
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
function myroom() {
	$("#body").html(
			"<dl>" +
			"<dt>" +
				"hello" +
			"</dt>" +
			"<dd>" +
			"</dd>" +
		"</dl>"
	);	
}
function profile() {
	$("#body").html(
			"<dl>" +
			"<dt>" +
				"hogehoge" +
			"</dt>" +
			"<dd>" +
			"</dd>" +
		"</dl>"
	);	
}
