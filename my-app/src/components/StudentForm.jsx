// import React, {useState} from "react";
// import {v4 as a} from "uuid"
// import
// import StudentDetails from "./StudentDetails";
// const StudentForm = () => {
//     const [fullName, setFullName] = useState("")
//     const [mathScore, setMath] = useState("")
//     const [chemistryScore, setChemistry] = useState("")
//     const [physicScore, setPhysic] = useState("")
//     const [studentsInfo, setInfo] = useState([])    
//     const renderStudent = (event) => {
//         event.preventDefault();
//         const studentInfo = 
//         {
//             id: a(),
//             fullName,
//             mathScore : Number,
//             chemistryScore : Number,
//             physicScore: Number
//         }
        // let copyArray = [...studentsInfo]
        // copyArray.push(studentInfo)
        // setInfo(copyArray);
//         setInfo([studentInfo,... studentsInfo] )
//     }
// console.log(studentsInfo)
//     return(
//         <div>
//         <form>
//             <div>
//                 <label>Họ và tên:</label>
//                 <input 
//                 type="text"
//                 onChange={(event) => {setFullName(event.target.value)}}
//                  />
//             </div>
//             <div>
//                 <label>Điểm Toán:</label>
//                 <input 
//                 type="text"
//                 onChange={(event) => {setMath(event.target.value)}}
//                  />
//             </div>
//             <div>
//                 <label>Điểm Hóa:</label>
//                 <input 
//                 type="text"
//                 onChange={(event) => {setChemistry(event.target.value)}}
//                  />
//             </div>
//             <div>
//                 <label>Điểm Lý:</label>
//                 <input 
//                 type="text"
//                 onChange={(event) => {setPhysic(event.target.value)}}
//                  />
//             </div>
//             <button onClick = {renderStudent}>Submit</button>
//         </form>
//         <div>
//             <p>Danh sách học sinh</p>
//             {studentsInfo.map((student, idx) => {
//                 return(
//                 <StudentDetails key={idx} student= {student}/>
//                 )
//             })}
//         </div>
//     </div>
//     )
// }
// export default StudentForm
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import StudentInfo from "./StudenInfo";

const StudentForm = () => {
  const [student, setStudent] = useState({
    fullName: "",
    diemToan: 0,
    diemHoa: 0,
    diemLy: 0,
  });
  const [studentsInfo, setStudentsInfo] = useState([]);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const onClickHandler = (event) => {
    event.preventDefault();
    if (student.fullName !== "") {
      const newStudent = {
        ...student,
        id: uuidv4(),
        diemToan: Number(student.diemToan),
        diemHoa: Number(student.diemHoa),
        diemLy: Number(student.diemLy),
      };
      setStudentsInfo([newStudent, ...studentsInfo]);
      setStudent({
        fullName: "",
        diemToan: 0,
        diemHoa: 0,
        diemLy: 0,
      });
    }
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label>Họ và tên:</label>
          <input
            type="text"
            value={student.fullName}
            name="fullName"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Điểm Toán:</label>
          <input
            type="number"
            value={student.diemToan}
            name="diemToan"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Điểm Hoá:</label>
          <input
            type="number"
            value={student.diemHoa}
            name="diemHoa"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Điểm Lý:</label>
          <input
            type="number"
            value={student.diemLy}
            name="diemLy"
            onChange={onChangeHandler}
          />
        </div>
        <button onClick={onClickHandler}>Submit</button>
      </form>
      <StudentInfo studentsInfo={studentsInfo} />
    </div>
  );
};

export default StudentForm;