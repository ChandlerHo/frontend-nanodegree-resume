var bio = {
	"name" : "Chandler Ho",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "415-254-7239",
		"email": "chandler.c.ho@gmail.com",
		"github": "ChandlerHo",
		"twitter": "@chandlerho",
		"location": "Daly City"
	},
	"welcomeMessage" : "Hello!",
	"skills" : [
	"awesomeness", "programming", "teaching", "JS"
	],
	"bioPic" : "https://buildahead.com/wp-content/uploads/2015/01/Sun-Glasses.png"
}

var work = {
	"jobs": [
		{
			"employer" : "Stanford Healthcare",
			"title": "Clinical Laboratory Scientist",
			"location": "Palo Alto",
			"dates": "2013-2015",
			"description": "Clinical work"
		},
		{
			"employer" : "Stanford Healthcare",
			"title": "EPIC Credentialed Trainer",
			"location": "Palo Alto",
			"dates": "2015-2015",
			"description": "Education work"
		}
	]
}

var education = {
	"schools": [
		{
			"name": "University of California, San Diego",
			"city": "San Diego, CA, US",
			"degree": "BS",
			"major": ["Human Biology"],
			"dates": 2008,
			"url": "http://example.com"
		},
		{
			"name": "Johns Hopkins University",
			"city": "Baltimore, MD, US",
			"degree": "MS",
			"major": ["Bioinformatics"],
			"dates": 2016,
			"url": "http://example.com"
		}
	],
	"onlineCourses" : [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2015,
			"url": "http:/www.udacity.com/course/ud804"
		}
	]
}

var projects = {
	"project": [
		{
			"title": "Project 1",
			"dates": 2015,
			"description" : "fun",
			"images": "http://example.com"
		}
	]
}

if(bio.skills.length > 0 ) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}



