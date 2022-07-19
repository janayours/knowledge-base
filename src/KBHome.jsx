import React from "react";

import "./KBHome.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function CarsX() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Knowledge base</Tab>
          <Tab>Articles</Tab>
        </TabList>

        <TabPanel>
          <div className="cars-container flex flex-wrap justify-evenly">
            <div className="card">
              {/* <p>Knowledge base</p> */}
              <img src="https://ps.w.org/echo-knowledge-base/assets/screenshot-14.jpg" />
            </div>
            
          </div>
        </TabPanel>
        <TabPanel>
          <div className="cars-container flex flex-wrap justify-evenly">
            <div className="card">
              {/* <p>Articles</p> */}
              <img src="https://www.designwall.com/wp-content/uploads/2016/06/dw-knowledge-base1.png" />
            </div>
            
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default CarsX;
