var data = "%data%";
var $header = $('#header');
var $topContact =  $('#topContacts');
var $footerContact = $('#footerContacts');

var bio = {
    "name": "Chandler Ho",
    "role": "Web Developer",
    "contacts": {
        "mobile": "415-254-7239",
        "email": "chandler.c.ho@gmail.com",
        "github": "ChandlerHo",
        "twitter": "@chandlerho",
        "location": "Daly City"
    },
    "welcomeMessage": "Hello!",
    "skills": [
        "awesomeness", "python", "Perl", "JavaScript"
    ],
    "biopic": "https://upload.wikimedia.org/wikipedia/commons/9/97/Emoji_u1f483.svg",
    "display": function() {
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        $header.prepend(formattedRole);
        var formattedName = HTMLheaderName.replace(data, bio.name);
        $header.prepend(formattedName);
        var formattedmobile = HTMLmobile.replace(data, bio.contacts.mobile);
        $topContact.append(formattedmobile);
        var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        $topContact.append(formattedEmail);
        var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
        $topContact.append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
        $topContact.append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        $topContact.append(formattedLocation);
        var formattedmobile = HTMLmobile.replace(data, bio.contacts.mobile);
        $footerContact.append(formattedmobile);
        var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        $footerContact.append(formattedEmail);
        var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
        $footerContact.append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
        $footerContact.append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        $footerContact.append(formattedLocation);
        var formattedPicture = HTMLbioPic.replace(data, bio.biopic);
        $header.append(formattedPicture);
        var formattedwelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        $header.append(formattedwelcomeMessage);
        if (bio.skills.length > 0) {
            $header.append(HTMLskillsStart);
            for (skill in bio.skills) {
                var formattedSkill = HTMLskills.replace(data, bio.skills[skill]);
                $header.append(formattedSkill);
            }

        }

    }
};
bio.display();

var work = {
    "jobs": [{
        "employer": "Stanford Healthcare",
        "title": "Clinical Laboratory Scientist",
        "location": "Palo Alto",
        "dates": "Apr 2013 - Current",
        "description": "Clinical work"
    }, {
        "employer": "Stanford Healthcare",
        "title": "EPIC Credentialed Trainer",
        "location": "Palo Alto",
        "dates": "Oct 2015 - Mar 2015",
        "description": "Education work"
    }],
    "display": function() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};
work.display();

var education = {
    "schools": [{
        "name": "University of California, San Diego",
        "location": "San Diego, CA, US",
        "degree": "BS",
        "major": ["Human Biology"],
        "dates": 2008,
        "url": "http://ucsd.edu/"
    }, {
        "name": "Johns Hopkins University",
        "location": "Baltimore, MD, US",
        "degree": "MS",
        "major": ["Bioinformatics"],
        "dates": 2016,
        "url": "https://www.jhu.edu/"
    }],
    "onlineCourses": [{
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": 2015,
        "url": "http:/www.udacity.com/course/ud804"
    }],
    display: function() {
        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);
            for (school in education.schools) {
                var formattedschoolName = HTMLschoolName.replace(data, education.schools[school].name);
                var formattedschoolDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
                $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
                var formattedLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
                $(".education-entry:last").append(formattedLocation);
                var formattedDate = HTMLschoolDates.replace(data, education.schools[school].dates);
                $(".education-entry:last").append(formattedDate);
                var formattedMajor = HTMLschoolMajor.replace(data, education.schools[school].major);
                $(".education-entry:last").append(formattedMajor);
                var formattedURL = HTMLonlineURL.replace(data,education.schools[school].url);
                $(".education-entry:last").append(formattedURL);
            }
        }
        if (education.onlineCourses.length > 0) {
            $(".education-entry:last").append(HTMLonlineClasses);
            for (online in education.onlineCourses) {
                var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[online].title);
                var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[online].school);
                $(".education-entry:last").append(formattedTitle + formattedSchool);
                var formattedDates = HTMLonlineDates.replace(data, education.onlineCourses[online].dates);
                $(".education-entry:last").append(formattedDates);
                var formattedURL = HTMLonlineURL.replace(data, education.onlineCourses[online].url);
                $(".education-entry:last").append(formattedURL);
            }
        }
    }
};
education.display();
var projects = {
    "projects": [{
        "title": "Project 1",
        "dates": "2015",
        "description": "fun",
        "images": "http://example.com"
    }],
    "display": function() {
        for (key in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedprojectTitle = HTMLprojectTitle.replace(data, projects.projects[key].title);
            $(".project-entry").append(formattedprojectTitle);
            var formattedprojectDates = HTMLprojectDates.replace(data, projects.projects[key].dates);
            $(".project-entry").append(formattedprojectDates);
            var formattedprojectDescription = HTMLprojectDescription.replace(data, projects.projects[key].description);
            $(".project-entry").append(formattedprojectDescription);
            var formattedprojectImage = HTMLprojectImage.replace(data, projects.projects[key].images);
            $(".project-entry").append(formattedprojectImage);
        }

    }
};
projects.display();


$("#mapDiv").append(googleMap);