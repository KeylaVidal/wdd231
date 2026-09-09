const courses = [
  {code:"WDD 130",completed:false,credits:3,type:"WDD"},
  {code:"WDD 131",completed:false,credits:3,type:"WDD"},
  {code:"WDD 231",completed:false,credits:3,type:"WDD"}
];
function displayCourses(list){
  const div = document.getElementById("courses");
  div.innerHTML = "";
  let total = 0;
  list.forEach(c=>{
    const el = document.createElement("div");
    el.className = c.completed ? "course completed" : "course";
    el.textContent = c.code;
    div.appendChild(el);
    total += c.credits;
  });
  document.getElementById("totalCredits").textContent = total;
}
displayCourses(courses);
document.getElementById("all").addEventListener("click",()=>displayCourses(courses));
document.getElementById("cse").addEventListener("click",()=>displayCourses(courses.filter(c=>c.type==="CSE")));
document.getElementById("wdd").addEventListener("click",()=>displayCourses(courses.filter(c=>c.type==="WDD")));