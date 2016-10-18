import $ from 'jquery';

var processData = function (object) {
	var i;
	var count;
	for(i=0;i<object.length;i++){
		var reqdField = object[i];
		var labelName =reqdField.label;
		var typeName  = reqdField.type;
		var iconName =reqdField.icon;
		var idName = reqdField.id;
		$(".input-blocks").append(`<div class ="big-box"><input class="box" type="${typeName}" id="${idName}" placeholder="${labelName}">
									<i id="image" class="fa ${iconName}"  aria-hidden="true"></i></div>`);
		}
		
	}

var getData = function(event){
	var reqdData = $.ajax({
		url: "http://json-data.herokuapp.com/forms",
		success: processData
	});
	console.log(reqdData);
};

getData();