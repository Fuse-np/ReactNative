const SITE_NAME = "Information Technology";
const BASE_URL  = "http://it.tni.ac.th";
const COLOR_THEME = "blue";
const ALLOW_SIGNUP = true;

console.log("Welcome to " + SITE_NAME);

let languages = ["Javascript","Python","Ruby","PHP"];
for(let i in languages){
    let url = BASE_URL + "lang/" + languages[i].toLowerCase();
    console.log(`- ${languages[i]} programing(${url})`);
}

console.log("Footer");

let footer = ["About","Pivacy"];
for(let i in footer){
    let url = BASE_URL + "lang/" + footer[i].toLowerCase();
    console.log(`- ${footer[i]} programing(${url})`);
}