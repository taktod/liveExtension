/**
 * 
 */
var so = new SWFObject("../swf/livePlayer.swf", "live", "340", "260", "10.1", "#FFFFFF");
var counter = 0;
$(function(){
	$("#enter").click(function() {
		var child = document.createElement("option");
		child.text = "aiueo" + counter;
//		var data = $("#commentList option").length;
//		$("#hoge").html("aiueoaiueoaiueo");
//		$("#hoge").html(data);
		$("#commentList").get(0)[$("#commentList option").length] = child;
		child.selected = true;
//		data.unshift(child);
//		for(i = 0;i < data.length;i ++) {
//			$("#commentList").get(0)[i] = data[i];
//		}
		counter ++;
	});
	so.write("playerBody");
});
