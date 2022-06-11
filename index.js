

let div = document.getElementById("videodiv");

async function display(){

   
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=popular%20videos&key=AIzaSyAHhQQnbSWN4vuAb2SZe8UJMKW3nc5FH-M&maxResults=10`);

    let data = await res.json();
    
    for({id:{videoId}}of data.items)
    {
    let videodiv= document.createElement("iframe")
    videodiv.setAttribute("class","mons")
    videodiv.src = `https://www.youtube.com/embed/${videoId}`;
    videodiv.allow = 'fullscreen'
    div.append(videodiv)
    }

}

display();


async function searchVideos(){
    document.getElementById("videodiv").innerHTML=""; 

    let query = document.getElementById("video").value;

let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyAHhQQnbSWN4vuAb2SZe8UJMKW3nc5FH-M&maxResults=25`);
let data = await res.json();

for({id:{videoId}}of data.items)
{
let videodiv= document.createElement("iframe")
videodiv.setAttribute("class","mons")
videodiv.src = `https://www.youtube.com/embed/${videoId}`;
videodiv.allow = 'fullscreen'
div.append(videodiv)
}

}