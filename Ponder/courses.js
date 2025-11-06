const enrollButton = document.querySelector("#enrollStudent");
const dropButton = document.querySelector("#dropStudent");
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {sectionNum:1, 
    roomNum:"STC 353", 
    enrolled: 26, 
    days:"TTH", 
    instructor:"Bro. T"},
    {sectionNum: 2, 
    roomNum: "STC 347", 
    enrolled: 28, 
    days: "TTh", 
    instructor: "Sis A"}
  ],
  modifyStudent: function(sectionNum, buttonType) {
    let theSection = this.sections.find(
    (section) => sectionNum == section.sectionNum);
    if (theSection){
      if (buttonType === "enroll")
        theSection.enrolled++;
      else if (buttonType === "drop")
        theSection.enrolled--;
      SetSections(aCourse);
      }
  }
};

function SetCourses(course)
{
    let courseName = document.querySelector("#courseName");
    let courseCode = document.querySelector("#courseCode");

    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function SetSections(course)
{
    const html = course.sections.map(
        (section) => `<tr>
                      <td>${section.sectionNum}</td> 
                      <td>${section.roomNum}</td>
                      <td>${section.enrolled}</td> 
                      <td>${section.days}</td>
                      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}

SetCourses(aCourse);
SetSections(aCourse);

enrollButton.addEventListener("click", ()=>{
  let userInput = document.querySelector("#sectionNumber");
  aCourse.modifyStudent(userInput.value, "enroll");
});
dropButton.addEventListener("click", ()=>{
  let userInput = document.querySelector("#sectionNumber");
  aCourse.modifyStudent(userInput.value, "drop");
});