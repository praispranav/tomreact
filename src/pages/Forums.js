import React, { useState } from "react";
import classNames from "classnames";
import { FiRefreshCw, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import breadcrumbimg from "../assets/images/bread-bg.jpg";
import gitlogo from "../assets/images/git-logo.png";

import Select from "react-select";

const state = {
  breadcrumbimg: breadcrumbimg,
};

const topics = [
  "Official Management District",
  "Japanese Architecture",
  "Ear-acupuncture",
  "Cupping",
  "Scalp Acupuncture",
  "Reflexology",
  "Tuina",
  "Reiki",
  "Tibetan Medicine",
  "Pathology",
  "Technical Issues",
];

const viewOptions = [
  {
    value: 0,
    label: "View all",
  },
  {
    value: 1,
    label: "Option 1",
  },
  {
    value: 2,
    label: "Option 2",
  },
];

function About() {
  const [selectedTopic, setSelectedTopic] = useState(
    "Official Management District"
  );
  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleTopicClick = (e) => setSelectedTopic(e.target.name);

  return (
    <main className="about-page">
      {/* Header */}
      <GeneralHeader />
      <Breadcrumb CurrentPgTitle="Forums" img={state.breadcrumbimg} />
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <h3 className="widget-title pb-0" style={{ color: "#f40400" }}>
            Our Forums
          </h3>
          <div className="title-shape margin-top-10px"></div>
          <h6 className="mt-5">Feel free to start a new topic </h6>
        </div>
        <div className="d-flex justify-content-center flex-wrap mt-5">
          {" "}
          {topics.map((topic, index) => (
            <button
              key={index}
              type="button"
              className={classNames({
                "topics-button": true,
                "topics-button-selected": topic === selectedTopic,
              })}
              onClick={handleTopicClick}
              name={topic}
            >
              {topic}
            </button>
          ))}
        </div>
        <div class="table-responsive">
          <table className="table title-table">
            <thead>
              <tr>
                <td className="bg-header">
                  <input
                    type="checkbox"
                    checked={isAllChecked}
                    onClick={() => setIsAllChecked(!isAllChecked)}
                    style={{
                      height: "1rem",
                      width: "1rem",
                      verticalAlign: "middle",
                    }}
                  />
                </td>
                <th colSpan="6">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <Select
                        className="view-selector"
                        placeholder="View all"
                        options={viewOptions}
                        menuPortalTarget={document.body}
                      />
                      <button role="button" className="refresh-button ml-2">
                        <span>
                          <FiRefreshCw />
                        </span>
                      </button>
                    </div>
                    <div>
                      <button role="button" className="page-nav-btn">
                        <span>
                          <FiChevronLeft />
                        </span>
                      </button>
                      <button role="button" className="page-nav-btn">
                        <span>
                          <FiChevronRight />
                        </span>
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {["", "", "", "", "", "", "", "", "", ""].map((el, index) => (
                <tr key={index}>
                  <td className="center-checkbox">
                    <input
                      type="checkbox"
                      checked={isAllChecked}
                      style={{
                        height: "1rem",
                        width: "1rem",
                        verticalAlign: "middle",
                      }}
                    />
                  </td>
                  <td style={{ width: 50 }}>
                    <img width="45" height="45" src={gitlogo} />
                  </td>
                  <td>Facebook Blueprint</td>
                  <td>Newly released courses, holiday marketing tips</td>
                  <td style={{ width: 10 }}>*</td>
                  <td>Sed scelerisque dui lacus</td>
                  <td align="right">Today</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {
        // <Footer />
      }
    </main>
  );
}

export default About;
