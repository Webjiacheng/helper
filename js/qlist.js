function getHotList() {
	console.log("1");
	$.ajax({
		url:"../mock-data/hot.json",
		dataType:"json",
		success:function(data){
			console.log(data);
		},
		error:function(error){
			console.log(error);
		}
	})
}
getHotList();