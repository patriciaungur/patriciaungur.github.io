// console.info(2);
// console.debug(2 + 3);
// console.warn(6 * 3 - 10);
// console.error("errors");

// var myName = "Patricia Ungur";
// var age = 27;
// //console.info("Numele meu este: " + myName + " si am " + age + " ani !!");
// age = 28;
// //console.info("Numele meu este: " + myName + " si am " + age + " ani !!");
// age = 29;
// //console.info("Numele meu este: " + myName + " si am " + age + " ani !!");

// var jobTitle = "<span>Web Developer</span>  @Axon";
// var mottoElement = document.getElementById("motto");

// console.info(mottoElement);

// jobTitle = mottoElement.innerHTML;
// console.info(jobTitle);

//console.info(mottoElement);
//console.warn(mottoElement.innerHTML);

//mottoElement.innerHTML = mottoElement.innerHTML + " & " + jobTitle;
//mottoElement.innerHTML += " & " + jobTitle;

// var skills = ["javaScript", "html", "css"];
// console.info(skills);

// var person = {
//   employed: true,
//   age: 30,
//   skills: ["java", "pyton"],
// };
// console.debug(person);
// console.info(person.skills);

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  hide("home");
  hide("skills");
  hide("projects");
  hide("languages");
}

function showPage(id) {
  hideAllPages();
  show(id);
}

showPage("home");
