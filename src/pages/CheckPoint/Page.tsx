import Card from "../../components/Card";
import Title from "../../components/Title";
import Template from "../../components/Template";
import Breadcrumb from "../../components/Breadcrumb";
import Clock from "../../components/Clock";
import Button from "../../components/Button";

export default () => {
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
      hours: "8:00",
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
            <strong>12:32:11</strong>
            <strong>??:??:??</strong>
          </div>
          <span className="block rounded-full bg-gray-200 dark:bg-gray-700">
            <span
              className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500"
              style={{ width: "75%" }}
            ></span>
          </span>
        </div>
        <div className="flex justify-between my-4">
          <Button>Start</Button>
          <Button>Break</Button>
          <Button>Lunch</Button>
          <Button>Achievement</Button>
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
            <strong>{item.hours} horas</strong>
          </div>
        ))}
      </Card>
    </Template>
  );
};
