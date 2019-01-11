const projectList = 
{
	"projects": [
		{
			"name": "Personal Website",
			"year": 2019,
			"link": "https://github.com/jonm8116/jonm8116.github.io"
		},
		{
			"name": "YouTube Trending Videos Classifier",
			"year": 2018,
			"link": "https://github.com/jonm8116/YouTube-Trending-Project"
		},
		{
			"name": "Stony Script",
			"year": 2018,
			"link": "none"
		},
		{
			"name": "Dynamic Memory Allocator",
			"year": 2017,
			"link": "none"
		},
		{
			"name": "Unix Shell",
			"year": 2017,
			"link": "none"
		},
		{
			"name": "Course Site Generator",
			"year": 2017,
			"link": "https://github.com/jonm8116/Course-Site-Generator"
		}
	]
}

const blogposts = 
{
	"posts": [
		{
			"title": "test-post",
			"subtitle": "first post on this blog",
			"date": "1/11/2019",
			"link": "/blogposts/testpost.txt"
		}
	
	]
}

function loadProjects(){
	//Get table element
	var projectTable = document.getElementById('project-table');
	for (i=0; i<projectList.projects.length; i++){
		var trTag = document.createElement('tr');
		var tdYear = document.createElement('td');
		tdYear.appendChild(document.createTextNode(projectList.projects[i].year));
		var tdProject = document.createElement('td');
		if(projectList.projects[i].link != "none"){
			var aTag = document.createElement("a");
			aTag.setAttribute('href', projectList.projects[i].link);
			aTag.innerHTML = projectList.projects[i].name;
			tdProject.appendChild(aTag);
		} else{
			tdProject.appendChild(document.createTextNode(projectList.projects[i].name));
		}
		trTag.appendChild(tdYear);
		trTag.appendChild(tdProject);
		projectTable.appendChild(trTag);
	}
}

/*function loadBlogPosts(){
	var blogTable = document.getElementById('blog-table');
	for (i=0; i<blogposts.posts.length; i++){
		var trTag = document.createElement('tr');
		var td 
	}
}*/

loadProjects()