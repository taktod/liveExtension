/**
 * 
 */
var so = new SWFObject("../swf/livePlayer.swf", "live", "340", "260", "10.1", "#FFFFFF");
$(function(){
	$("#enter").click(addComment());
	$("#input").keypress(function(ev) {
		if((ev.which && ev.which === 13) || (ev.keyCode && ev.keyCode === 13)) {
			addComment();
			return false;
		}
		return true;
	});
	$("#header-comment").click(function() {
		$("#header-comment").removeClass("unselect");
		$("#header-userList").addClass("unselect");
	});
	$("#header-userList").click(function() {
		$("#header-comment").addClass("unselect");
		$("#header-userList").removeClass("unselect");
	});
	$("#header-userList").addClass("unselect");
	so.write("playerBody");
	chrome.extension.onRequest.addListener(
		function(request, sender, sendResponse){
			if(request.command == "reload") {
				setData();
			}
			sendResponse({});
	});
	setData();
});
function setData() {
	$("#head-top").text("Live Ext. - [" + localStorage.myroom_title + "]")
//	$("#head-body").text(localStorage.myroom_detail);
	$("#userName").text(localStorage.profile_name);
	if(localStorage.profile_name == undefined || localStorage.profile_name == "") {
		$("#userName").text("名前を入力してください。");
	}
}
function addComment() {
	var child = document.createElement("option");
	if($("#input").val() != "") {
		child.text = localStorage.profile_name + " > " + $("#input").val();
		var data = $("#commentList option").length;
		$("#commentList").get(0)[$("#commentList option").length] = child;
		child.selected = true;
		$("#input").val("");
	}
}
