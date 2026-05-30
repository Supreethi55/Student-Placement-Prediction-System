function predict(){

let cgpa =
Number(document.getElementById("cgpa").value);

let internships =
Number(document.getElementById("internships").value);

let communication =
Number(document.getElementById("communication").value);

let projects =
Number(document.getElementById("projects").value);

let score =
cgpa*10 +
internships*5 +
communication*5 +
projects*5;

let percentage =
Math.min(Math.round(score/1.5),100);

let result="";

if(percentage>=80){
result="High Placement Chance ✅";
}
else if(percentage>=60){
result="Medium Placement Chance ⚡";
}
else{
result="Low Placement Chance ❌";
}

document.getElementById("result").innerHTML=
result + "<br><br>Placement Probability: " +
percentage + "%";
}