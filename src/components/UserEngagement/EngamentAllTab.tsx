import { useState } from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

interface CallLog {
  agent: string;
  date: string;
  contact: string;
  number: string;
  duration?: string;
  time?: string;
  status: string;
}

const CallLogs = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const callLogs: CallLog[] = [
    {
      agent: "John Doe",
      date: "Mar 04, 2021",
      contact: "Nolan",
      number: "+421 918 333 333",
      duration: "00:00:10",
      time: "01:30-01:40",
      status: "Recording",
    },
    {
      agent: "Jhon Doe",
      date: "Mar 04, 2021",
      contact: "Krishna",
      number: "+421 918 333 333",
      status: "Call not Connected",
    },
    {
      agent: "Jhon Doe",
      date: "Mar 03, 2021",
      contact: "Arjun",
      number: "+421 918 333 333",
      duration: "00:00:30",
      time: "05:00-05:30",
      status: "Recording",
    },
    {
      agent: "Jhon Doe",
      date: "Mar 02, 2021",
      contact: "Krishna",
      number: "+421 918 333 333",
      status: "Call not Connected",
    },
  ];

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container mx-auto px-2 lg:px-3">
      <div className="bg-white shadow-md rounded-md mt-8">
        <div className="p-2 lg:p-4">
          <h1 className="text-lg lg:text-xl font-bold">Call Logs</h1>
        </div>
        <div className="border-t border-gray-200">
          {callLogs.map((callLog, index) => (
            <div
              key={index}
              className={`p-2 lg:p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between hover:bg-gray-100 cursor-pointer ${index !== 0 && 'border-t border-gray-200'}`}
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-start lg:items-center">
                <div className="mr-2 lg:mr-4">
                  <LocalPhoneIcon color={callLog.status === "Recording" ? "success" : "warning"} />
                </div>
                <div>
                  <p className="text-sm lg:text-lg">From Agent <strong>{callLog.agent}</strong> on {callLog.date}</p>
                  <p className="text-sm lg:text-lg">to Contact: {callLog.contact}</p>
                  <div className="flex flex-col lg:flex-row items-start lg:items-center text-xs lg:text-sm text-gray-600">
                    <div>{callLog.number}</div>
                    {callLog.duration && (
                      <>
                        <div className="mx-1 lg:mx-2">|</div>
                        <div>{callLog.duration}</div>
                      </>
                    )}
                    {callLog.time && (
                      <>
                        <div className="mx-1 lg:mx-2">|</div>
                        <div>{callLog.time}</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4 lg:mt-0 p-2 text-sm lg:text-lg">{callLog.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallLogs;
