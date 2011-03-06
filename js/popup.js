/**
 * 
 */
var mode = "server";
var c18 = chrome.i18n;
$(function() {
	language();
	$("#server").click(function() {
		change("server");
		server();
//		webkitNotifications.createHTMLNotification("../html/notification.html").show();
//		chrome.tabs.create({url: "../html/room.html", selected: true});
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
function serverInit() {
	var servers = "";
	for(var i=0;i < 5;i ++) {
		var serverid = "server" + i;
		var server = localStorage[serverid];
		if(server != "") {
			servers += "<option>" + server + "</option>";
		}
	}
	return servers;
}
function addServer() {
	var server = $("#addServer").val();
	if(server != "") {
		for(var i=0;i < 4;i ++) {
			var serverid = "server" + (i+1);
			var localServer = localStorage[serverid];
			if(localServer != "") {
				serverid = "server" + (i);
				localStorage[serverid] = localServer;
			}
		}
		localStorage["server4"] = server;
	}
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
					"<select id='serverList' size='5'>" +
						serverInit() +
					"</select>" +
					"<br />" +
					"<input type='button' value='" + c18.getMessage("action_connect") + "'/>" +
				"</form>" +
			"</dd>" +
			"<dt>" +
				c18.getMessage("servers_add") +
			"</dt>" +
			"<dd>" +
				"<form>" +
					"<input type='text' id='addServer'/>" +
					"<br />" +
					"<input type='button' id='action_add' value='" + c18.getMessage("action_add") + "'/>" +
					"<input type='button' id='action_reset' value='" + c18.getMessage("action_reset") + "'/>" +
				"</form>" +
			"</dd>" +
		"</dl>"
	);
	$("#action_reset").click(function() {
		$("#addServer").val("");
	});
	$("#action_add").click(function() {
		addServer();
		server();
	});
	$("#addServer").keypress(function(ev) {
		if((ev.which && ev.which === 13)
			|| (ev.keyCode && ev.keyCode === 13)) {
			addServer();
			server();
			$("#addServer").focus();
			return false;
		}
	});
}
function lobby() {
	$("#body").html(
		"<dl>" +
			"<dt>" +
				"<span id='lobby-room'>" + c18.getMessage("lobby_room") + "</span> | <span id='lobby-people' class='unselect'>" + c18.getMessage("lobby_people") + "</span>" +
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
				"<input type='button' value='" + c18.getMessage("action_enter") + "' />" +
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
function saveMyRoom() {
	localStorage.myroom_title = $("#myroom_title").val();
	localStorage.myroom_detail = $("#myroom_detail").val();
	localStorage.myroom_passphase = $("#myroom_passphase").val();
}
function loadMyRoom() {
	$("#myroom_title").val(localStorage.myroom_title);
	$("#myroom_detail").text(localStorage.myroom_detail);
	$("#myroom_passphase").val(localStorage.myroom_passphase);
}
function myroom() {
	$("#body").html(
		"<form id='form'>" +
			"<dl>" +
				"<dt>" +
					c18.getMessage("myroom_title") +
				"</dt>" +
				"<dd>" +
					"<input type='text' id='myroom_title'/>" +
				"</dd>" +
				"<dt>" +
					c18.getMessage("myroom_detail") +
				"</dt>" +
				"<dd>" +
					"<textarea id='myroom_detail'></textarea>" +
				"</dd>" +
				"<dt>" +
					c18.getMessage("myroom_passphase") +
				"</dt>" +
				"<dd>" +
					"<input type='text'  id='myroom_passphase'/>" +
				"</dd>" +
				"<dd>" +
					"<input type='button' id='action_create' value='" + c18.getMessage("action_create") + "'/>" +
					"<input type='button' id='action_register' value='" + c18.getMessage("action_register") + "'/>" +
					"<input type='button' id='action_reset' value='" + c18.getMessage("action_reset") + "'/>" +
				"</dd>" +
			"</dl>" +
		"</form>"
	);
	loadMyRoom();
	$("#action_create").click(function(){
		saveMyRoom();
		chrome.tabs.create({url: "../html/room.html", selected: true});
	});
	$("#action_register").click(function(){
		saveMyRoom();
	});
	$("#action_reset").click(function(){
		loadMyRoom();
	});
}
function saveProfile() {
	localStorage.profile_name = $("#profile_name").val();
	localStorage.profile_profile = $("#profile_profile").val();
}
function loadProfile(){
	$("#profile_name").val(localStorage.profile_name);
	$("#profile_profile").text(localStorage.profile_profile);
}
function profile() {
	$("#body").html(
		"<dl>" +
			"<dt>" +
				c18.getMessage("profile_name") +
			"</dt>" +
			"<dd>" +
				"<input type='text' id='profile_name'/>" +
			"</dd>" +
			"<dt>" +
				c18.getMessage("profile_profile") +
			"</dt>" +
			"<dd>" +
				"<textarea id='profile_profile'></textarea>" +
			"</dd>" +
			"<dd>" +
				"<input type='button' id='action_register' value='" + c18.getMessage("action_register") + "'/>" +
				"<input type='button' id='action_reset' value='" + c18.getMessage("action_reset") + "'/>" +
			"</dd>" +
		"</dl>"
	);
	loadProfile();
	$("#action_register").click(function(){
		saveProfile();
	});
	$("#action_reset").click(function(){
		loadProfile();
	});
}
