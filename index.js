// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function getTotalMarks(noOfStudents, noOfSubjects, arrayOfMarks) {
  const result = [];
  
  const averageMarks = [];
  for (let i = 0; i < noOfSubjects; i++) {
    let totalMark = 0;
    for (let j = 0; j < noOfStudents; j++) {
      totalMark += arrayOfMarks[j][i];
    }
    averageMarks.push(totalMark / noOfStudents);
  }
  
  const minAverage = Math.min(...averageMarks);
  const minAverageIndex = averageMarks.indexOf(minAverage);
  
  arrayOfMarks.forEach(eachStudent => {
    const total = eachStudent.reduce((acc, curr, index) => {
      if (index === minAverageIndex) return acc;
      return acc + curr;
    })
    result.push(total)
  })
  
  return result;
}

const mark = getTotalMarks(3, 5, [
  [75, 76, 65, 87, 87],
  [78, 76, 68, 56, 89],
  [67, 87, 78, 77, 65]
])

console.log(mark)
