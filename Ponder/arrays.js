const steps = ["one", "two", "three"];
function listTemplate(step) {   
    return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// activity 2

const grades = ["A", "B", "A"];

function getGPA(grade){
    if (grade === "A")
        return 4;
    else if (grade === "B")
        return 3;
}

const GPAarray = grades.map(getGPA);
console.log(GPAarray); // So I can check if the array is converted correctly

// activity 3 (using the created GPA array)
function GradeReduction(total, item) {
    return total + item
}

const calculatedGPA = GPAarray.reduce(GradeReduction);
const gpa = calculatedGPA / GPAarray.length;
console.log(gpa); //display results of the calcuation

//activity 4
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];

const filteredFruits = fruits.filter((fruit) => fruit.length < 6);
console.log(filteredFruits);//display results of filter

//activity 5

const luckyNumbers = [12, 34, 21, 54];
const luckyNumer = 21;

const chosenNumber = luckyNumbers.indexOf(luckyNumer);
console.log(chosenNumber);//display the index number of the lucky number