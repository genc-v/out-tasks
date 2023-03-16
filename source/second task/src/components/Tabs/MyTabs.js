import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CardInfoDomains from "./CardData/CardInfoDomains";
import CardInfoWebHosting from "./CardData/CardInfoWebHosting";

import classes from "./MyTabs.module.css";

function MyTabs() {
  return (
    <div className={classes.BoxWrap}>
      <Tabs>
        <TabList classneme={classes.TabList}>
          <Tab>Domains</Tab>
          <Tab>Web Hosting</Tab>
        </TabList>
        <TabPanel className={classes.TabPannel}>
          {CardInfoDomains.map((i) => (
            <div>
              <h3>{i.title}</h3>
              <h4>${i.price}/yr</h4>
              <button>Buy Now</button>
            </div>
          ))}
        </TabPanel>
        <TabPanel className={classes.TabPannel}>
          {CardInfoWebHosting.map((i) => (
            <div>
              <h3>{i.title}</h3>
              <h4>${i.price}/yr</h4>
              <button>Buy Now</button>
            </div>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default MyTabs;
