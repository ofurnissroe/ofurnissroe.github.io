



function askQuestions() {

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

var fullName = firstName + ' ' + lastName;
console.log('User\'s name is: ' + fullName);
$('h2').text('Hello ' + fullName);

var age= prompt('How old are you?');
age = parseInt(age);
//now decide what to do depending on their age-condition logic

if (age >= 18) {
	console.log('User is an adult');
	alert('Welcome Adult Humanoid');

} else if ( age >= 13) {

	console.log('User is a teenager');
	alert('come back in a few years, minor humanoid!')
 
	} else {
		console.log('User is a child')
		alert('This is not for you, small child')

	} if (firstName === 'General' && lastName != 'Assembly')
		{
		console.log('User is the general')
		alert('Welcome General')
	}
var faveColour = prompt('What is your favourite colour?').toLowerCase();
if (faveColour == 'red' ||
	faveColour == 'green' ||
	faveColour == 'blue' ||
	faveColour == 'yellow') {
	$('h1').css('color', faveColour);

}
}







/* comments*/
//When the page has loaded// 
$(function() {

	$('img').on('click', askQuestions);

	$('h3').not('first-of-type').next().hide();	

	//When the user clicks on h3
	$('h3').on('click', function() {

		//hide the next element-- this is used in this context to mean whatever of those specific element is clicked on 


		//close all the sections
		$('h3').not(this).next().slideUp(100);

			//toggle next element
		$(this).next().slideToggle(100);


		
	});

});