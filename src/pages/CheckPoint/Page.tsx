import { useState } from "react";
import Card from "../../components/Card";
import Clock from "../../components/Clock";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Template from "../../components/Template";
import Breadcrumb from "../../components/Breadcrumb";

export default () => {
  const [startTime, setStartTime]: any = useState("00:00:00");
  const [endTime, setEndTime]: any = useState("??:??:??");
  const [endTimeDate, setEndTimeDate]: any = useState();

  const [blockButtons, setBlockButtons] = useState(false);
  const [breakButtons, setBreakButtons] = useState(true);
  const [breakTime, setBreakTime]: any = useState();

  const initTime = () => {
    setBlockButtons(true);

    const time = new Date();

    setStartTime(time.toLocaleTimeString());
    time.setHours(time.getHours() + 8);
    setEndTime(time.toLocaleTimeString());
    setEndTimeDate(time);
  };

  const initBreak = () => {
    setBreakButtons(false);
    setEndTime("??:??:??");
    setBreakTime(new Date());
  };

  const handleBack = () => {
    setBreakButtons(true);
    const time = new Date();

    const diff = time.getTime() - breakTime.getTime();
    endTimeDate.setTime(endTimeDate.getTime() + diff);
    setEndTime(endTimeDate.toLocaleTimeString());
    setEndTimeDate(endTimeDate);
  };

  const history = [
    {
      date: "01/05/2023",
      percentage: "75",
      hours: "12:23",
    },
    {
      date: "02/05/2023",
      percentage: "100",
      hours: "8:00",
    },
    {
      date: "03/05/2023",
      percentage: "60",
      hours: "14:52",
    },
    {
      date: "04/05/2023",
      percentage: "100",
      hours: "0:05",
    },
  ];
  return (
    <Template>
      <Breadcrumb
        links={[
          {
            label: "Home",
            href: "/home",
          },
          {
            label: "Check Point",
            href: "",
          },
        ]}
      />

      <Title>Check Point</Title>

      <Card className="my-4">
        <Clock />
        <div>
          <div className="flex justify-between">
            <strong>{startTime}</strong>
            <strong>{endTime}</strong>
          </div>
          <span className="block rounded-full bg-gray-200 dark:bg-gray-700">
            <span
              className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500"
              style={{ width: "75%" }}
            ></span>
          </span>
        </div>
        <div className="flex justify-between my-4">
          <Button disabled={blockButtons} onClick={initTime}>
            Start
          </Button>
          {breakButtons ? (
            <>
              <Button onClick={initBreak}>Break</Button>
              <Button onClick={initBreak}>Lunch</Button>
            </>
          ) : (
            <Button onClick={handleBack}>Back</Button>
          )}
          <Button disabled={!blockButtons}>Achievement</Button>
        </div>
      </Card>

      <Title className="my-4">History</Title>

      <Card>
        {history.map((item: any, index: any) => (
          <div className="flex justify-between items-center my-4" key={index}>
            <strong>{item.date}</strong>
            <div className="w-9/12">
              <span className="block rounded-full bg-red-500 dark:bg-red-800">
                <span
                  className="block h-3 rounded-full bg-indigo-600"
                  style={{ width: `${item.percentage}%` }}
                />
              </span>
            </div>
            <strong>{("00:00" + item.hours).slice(-5)} horas</strong>
          </div>
        ))}
      </Card>
    </Template>
  );
};
