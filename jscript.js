let about = document.getElementById('About');
let body = document.getElementsByTagName('BODY')[0];
let headings = document.getElementById("About","Projects","Experiences")[0];
let x = 0;
document.addEventListener("click", whenClicked);
body.addEventListener("mouseout", whenDoneHovering);
body.addEventListener("mouseover", whenHovering);
headings.addEventListener("mouseover",whenHovering1)
headings.addEventListener("mouseout",whenDoneHovering1)

function whenClicked() {
	let newHeading = document.createElement('h1');
	newHeading.innerHTML = "NEW HEADING";
	newHeading.style.fontSize = "30px";
	about.appendChild(newHeading);
}

function whenHovering() {

}

function whenDoneHovering() {

}

function whenHovering1() {
	headings.style.color = "pink";
}

function whenDoneHovering1() {
	headings.style.color = "black";
}