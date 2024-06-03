/*
	Student Name: Christopher DeLeon
	File Name: script.js
	Date: November 1, 2021
*/

//Cache DOM elements
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");
var menu = document.getElementById("menu-links");
var logo = document.getElementById("ffc-logo");
var modal = document.getElementById("myModal");
var btn = document.querySelector("a[href='#']");
var span = document.getElementsByClassName("close")[0];

//Hamburger menu function
function toggleMenu() {
	menu.style.display = menu.style.display === "block" ? "none" : "block";
	logo.style.display = menu.style.display === "block" ? "none" : "block";
}

//Function to display the video with its corresponding description
function displayVideo(videoSrc, descriptionSrc) {
	videoSource.src = videoSrc;
	descriptionSource.src = descriptionSrc;
	video.style.display = "block";
	video.load();
}

//Function to display the burpees example video
function burpees() {
	displayVideo("media/burpees.mp4", "media/burpees-descriptions.vtt");
}

//Function to display the plank example video
function plank() {
	displayVideo("media/plank.mp4", "media/plank-descriptions.vtt");
}

//Function to display the mountain climbers example video
function mountain() {
	displayVideo("media/mc.mp4", "media/mountain-descriptions.vtt");
}

//Function to display a promo code
function discount() {
	var promo = document.getElementById("special");
	promo.textContent = "Promo Code: D25START";
	promo.style.cssText = "color: #ff0000; font-size: 2em;";
}

//Modal function
function showModal() {
	var modalOverlay = document.getElementById("modal");
	modalOverlay.style.display = "block";
	modalOverlay.addEventListener("click", function () {
		modalOverlay.style.display = "hidden";
		modalOverlay.style.display = "none";
	});
}


