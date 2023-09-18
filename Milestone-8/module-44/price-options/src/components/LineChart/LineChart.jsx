import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentMarks = [
    {
      name: "Student 1",
      math_marks: 85,
      physics_marks: 78,
      chemistry_marks: 92,
    },
    {
      name: "Student 2",
      math_marks: 78,
      physics_marks: 72,
      chemistry_marks: 85,
    },
    {
      name: "Student 3",
      math_marks: 92,
      physics_marks: 88,
      chemistry_marks: 94,
    },
    {
      name: "Student 4",
      math_marks: 88,
      physics_marks: 81,
      chemistry_marks: 90,
    },
    {
      name: "Student 5",
      math_marks: 75,
      physics_marks: 68,
      chemistry_marks: 79,
    },
    {
      name: "Student 6",
      math_marks: 95,
      physics_marks: 90,
      chemistry_marks: 96,
    },
    {
      name: "Student 7",
      math_marks: 70,
      physics_marks: 65,
      chemistry_marks: 72,
    },
    {
      name: "Student 8",
      math_marks: 89,
      physics_marks: 84,
      chemistry_marks: 88,
    },
    {
      name: "Student 9",
      math_marks: 91,
      physics_marks: 87,
      chemistry_marks: 93,
    },
    {
      name: "Student 10",
      math_marks: 82,
      physics_marks: 75,
      chemistry_marks: 80,
    },
  ];

  console.log(studentMarks);

  return (
    <div>
      <LChart width={600} height={300} data={studentMarks}>
        <Line type="monotone" dataKey="math_marks" stroke="#8884d8" />
        <Line type="monotone" dataKey="physics_marks" stroke="red" />
        <XAxis dataKey="name" />
        <YAxis />
      </LChart>
    </div>
  );
};

export default LineChart;
