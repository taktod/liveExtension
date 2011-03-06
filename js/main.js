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
	server();
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
				"<span id='lobby-room'>rooms</span> | <span id='lobby-people' class='unselect'>people</span>" +
			"</dt>" +
			"<dd>" +
				"<input type='text' class='search'/>" +
				"<select size=8>" +
					"<option>myroomA</option>" +
					"<option>myroomB</option>" +
					"<option>myroomC</option>" +
					"<option>myroomD</option>" +
					"<option>myroomE</option>" +
					"<option>myroomF</option>" +
					"<option>myroomG</option>" +
					"<option>myroomH</option>" +
					"<option>myroomI</option>" +
					"<option>myroomJ</option>" +
					"<option>myroomK</option>" +
					"<option>myroomL</option>" +
					"<option>myroomM</option>" +
					"<option>myroomN</option>" +
				"</select>" +
				"<br />" +
				"<input type='button' value='enter' />" +
			"</dd>" +
		"</dl>"
	);	
	$("#lobby-room").click(function() {
		$("#lobby-people").addClass("unselect");
		$("#lobby-room").removeClass("unselect");
	});
	$("#lobby-people").click(function() {
		$("#lobby-people").removeClass("unselect");
		$("#lobby-room").addClass("unselect");
	});
}
function myroom() {
	$("#body").html(
		"<dl>" +
			"<dt>" +
				"title" +
			"</dt>" +
			"<dd>" +
				"<input type='text' />" +
			"</dd>" +
			"<dt>" +
				"detail" +
			"</dt>" +
			"<dd>" +
				"<textarea></textarea>" +
			"</dd>" +
			"<dt>" +
				"pass phase" +
			"</dt>" +
			"<dd>" +
				"<input type='text' />" +
			"</dd>" +
			"<dd>" +
				"<input type='button' value='register'/>" +
				"<input type='button' value='create'/>" +
			"</dd>" +
		"</dl>"
	);	
}
function profile() {
	$("#body").html(
		"<dl>" +
			"<dt>" +
				"name" +
			"</dt>" +
			"<dd>" +
				"<input type='text' />" +
			"</dd>" +
			"<dt>" +
				"profile" +
			"</dt>" +
			"<dd>" +
				"<textarea></textarea>" +
			"</dd>" +
			"<dd>" +
				"<input type='button' value='register'/>" +
			"</dd>" +
		"</dl>"
	);	
}
