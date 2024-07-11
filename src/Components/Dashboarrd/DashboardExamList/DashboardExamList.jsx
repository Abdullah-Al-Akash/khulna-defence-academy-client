import { useEffect, useState } from "react";
import DashboardItems from "../DashboardItems";

const DashboardExamList = () => {
    const[examList, setExamList] = useState([]);
  useEffect(() => {
    fetch("https://khulna-defence-coaching-server.onrender.com/submit-ans?email=all")
    .then(res => res.json())
    .then(data => {
        const sortedData = data.sort((a, b) => new Date(b.submittedDate) - new Date(a.submittedDate));
        const evenData = sortedData.filter((s, index) => index % 2 === 0)
        setExamList(evenData);
     
    })
  }, []);
  const convertToBDT = (dateStr) => {
    const utcDate = new Date(dateStr);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Dhaka'
    };
    return utcDate.toLocaleString('en-US', options);
  };
  return (
    <div className="md:px-[84px] px-[10px] py-[30px] grid grid-cols-5 gap-4">
      <div className="col-span-1">
        <DashboardItems></DashboardItems>
      </div>
      <div className="col-span-4">
        <h3 className="text-center text-3xl font-bold">All Exam List</h3>
        <div className="overflow-x-auto my-8">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="text-center">
                  <th className="border border-black"></th>
                  <th className="border border-black">Name</th>
                  <th className="border border-black">Question</th>
                  <th className="border border-black">Time</th>
                  <th className="border border-black">Correct Ans</th>
                  <th className="border border-black">Wrong Ans</th>
                  <th className="border border-black">Not Ans</th>
                  <th className="border border-black">Accuracy</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {examList?.map((user, index) => (
                    
                  <tr key={index}>
                    <td className="border border-black">{index + 1}</td> {/* Displaying serial number */}
                    <td className="border border-black">{user.name}</td>
                    <td className="border border-black">{user.quizSet}</td>
                    <td className="border border-black">{convertToBDT(user.submittedDate)}</td>
                    <td className="border border-black">{user.correctAns}</td>
                    <td className="border border-black">{user.wrongAns}</td>
                    <td className="border border-black">{user.notAns}</td>
                    <td className="border border-black">{((parseFloat((user?.correctAns)) /
                  (parseFloat(user?.correctAns) + parseFloat(user?.wrongAns))) *
                  100).toFixed(2)}
                %</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
};

export default DashboardExamList;
