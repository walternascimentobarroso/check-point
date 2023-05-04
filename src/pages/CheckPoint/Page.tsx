import Card from "../../components/Card";
import Title from "../../components/Title";
import Template from "../../components/Template";
import Accordion from "../../components/Accordion";
import Breadcrumb from "../../components/Breadcrumb";

export default () => {
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

      <Card>
        <div>Check Point</div>

        <div>
          <span id="ProgressLabel" className="sr-only">
            Loading
          </span>

          <span className="block rounded-full bg-gray-200 dark:bg-gray-700">
            <span
              className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500"
              style={{ width: "75%" }}
            ></span>
          </span>
        </div>
      </Card>
    </Template>
  );
};
