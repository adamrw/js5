$(document).on('ready', function() {
 
$('p').click(function() {
	
	$(this).hide();
	var textArea=('<textarea></textarea>');
	var original=(this);
	
	$(this).after(textArea);



});
colsole.log();
$textArea.on('blur', function() {
	original.text(textArea.val());
	original.show();
	textArea.remove();


});



});