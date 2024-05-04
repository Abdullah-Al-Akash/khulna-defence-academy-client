import React, { useEffect, useState } from "react";
import DashboardItems from "../DashboardItems";
import toast, { Toaster } from "react-hot-toast";

const DashboardNotice = () => {
  const [notices, setNotices] = useState([]);
  const [handleLoad, setHandleLoad] = useState(false);
  const [noticeId, setNoticeId] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/notices")
      .then((res) => res.json())
      .then((data) => {
        setNotices(data);
      });
  }, []);

  // Update Notice:
  const handleNoticeUpdate = (event) => {
    event.preventDefault();

    // Access input values using querySelector
    const cursor = event.target;
    const notice = cursor.notice.value;
    const noticeLink = cursor.noticeLink.value;
    const lastDate = cursor.lastDate.value;

    const updatedNotice = {
      notice: notice,
      noticeLink: noticeLink,
      lastDate: lastDate,
    };

    console.log(noticeId);
    heatNotices(updatedNotice);
  };
  const heatNotices = (updatedNotice) => {
    fetch(`http://localhost:5000/updateNotice?id=${noticeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedNotice),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          toast.success("Successfully Updated Notice");
          setHandleLoad(!handleLoad);
        }
      })
      .catch((error) => {
        console.error("There was a problem with the PUT operation:", error);
      });
  };

  return (
    <div className="md:px-[84px] px-[10px] py-[30px] grid grid-cols-5 gap-4">
      <div class="col-span-1">
        <DashboardItems></DashboardItems>
      </div>
      <div className="col-span-4">
        <div>
          <h3 className="text-center text-3xl font-bold">Update Your Notice</h3>
          {notices?.map((notice) => (
            <form
              onSubmit={handleNoticeUpdate}
              className="form bg-yellow-50 py-4 m-4 px-4"
            >
              <label className="input input-bordered flex items-center w-2/4 mx-auto mb-2 gap-4">
                <h3 className="text-gray-300 font-semibold">
                  Defense Category
                </h3>
                <input
                  defaultValue={notice?.notice}
                  type="text"
                  className="grow"
                  placeholder=""
                  name="notice"
                />
              </label>
              <label className="input input-bordered flex items-center w-2/4 mx-auto mb-2 gap-4">
                <h3 className="text-gray-300 font-semibold">Notice Link</h3>
                <input
                  defaultValue={notice?.noticeLink}
                  type="text"
                  className="grow"
                  placeholder=""
                  name="noticeLink"
                />
              </label>
              <label className="input input-bordered flex items-center w-2/4 mx-auto mb-2 gap-4">
                <h3 className="text-gray-300 font-semibold">
                  NApply Last Date
                </h3>
                <input
                  defaultValue={notice?.lastDate}
                  type="text"
                  className="grow"
                  placeholder=""
                  name="lastDate"
                />
              </label>
              <div className="flex justify-end">
                <button
                  onClick={() => setNoticeId(notice?._id)} // Fix added here
                  type="submit"
                  className="btn btn-warning"
                >
                  Update Notice
                </button>
              </div>
            </form>
          ))}
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default DashboardNotice;
