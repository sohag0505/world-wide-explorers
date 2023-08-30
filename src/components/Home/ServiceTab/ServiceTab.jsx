import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ServiceTab = () => {
  return (
    <div data-aos="flip-left" className="mt-12 mb-12">
      <h2 className="font-bold  mt-24 mb-4 text-4xl">Hot Deals</h2>
      <Tabs>
        <TabList>
          <Tab>Wild</Tab>
          <Tab>Fish</Tab>
          <Tab>Bird</Tab>
        </TabList>

        {/* Wild */}
        <TabPanel></TabPanel>
        {/* Fish */}
        <TabPanel></TabPanel>
        {/* Bird */}
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default ServiceTab;
