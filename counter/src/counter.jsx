import { useState } from "react";

const students = [
  { id: 1, name: "Aman", marks: 85, course: "BCA", attendance: 92 },
  { id: 2, name: "Riya", marks: 45, course: "BCA", attendance: 78 },
  { id: 3, name: "Karan", marks: 72, course: "BBA", attendance: 55 },
  { id: 4, name: "Neha", marks: 30, course: "BCA", attendance: 95 },
  { id: 5, name: "Arjun", marks: 92, course: "BBA", attendance: 40 },
  { id: 6, name: "Sonia", marks: 55, course: "BCA", attendance: 65 }
];

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const increaseByFive = () => {
    setCount(count + 5);
  };

  const getStatus = (marks, attendance) => {
    if (marks < 50) {
      return "Fail";
    }

    if (marks > 50 && attendance > 60) {
      return "Pass";
    }

    if (marks > 50 && attendance < 60) {
      return "Attendance Shortage";
    }

    return "Fail";
  };

  return (
    <div>
      <h1>React Assignment</h1>

      <h2>Counter</h2>

      <h3>Count: {count}</h3>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={increaseByFive}>Increase by 5</button>

      <hr />

      <h2>Student Result Table</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Marks</th>
            <th>Attendance</th>
            <th>Final Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.marks}</td>
              <td>{student.attendance}%</td>
              <td>{getStatus(student.marks, student.attendance)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Counter;