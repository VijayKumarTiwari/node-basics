var grades = [100, 50];

grades.push(83);
console.log(grades);

grades.unshift(73);
console.log(grades);

var grade = grades.pop();
console.log(grade);
console.log(grades);

grade = grades.shift();
console.log(grade);
console.log(grades);

grades.forEach(function (grade1){
	console.log(grade1)
});