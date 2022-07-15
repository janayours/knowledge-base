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
              <p>Knowledge base</p>
              <img src="https://blog.invgate.com/hubfs/Why-is-a-Knowledge-Base-Important-blog-post.jpg" />
            </div>
            
          </div>
        </TabPanel>
        <TabPanel>
          <div className="cars-container flex flex-wrap justify-evenly">
            <div className="card">
              <p>Articles</p>
              <img src="https://agentestudio.com/uploads/post/image/95/main_beautiful_blog_design.png" />
            </div>
            
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default CarsX;
