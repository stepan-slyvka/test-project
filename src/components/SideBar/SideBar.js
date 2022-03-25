import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faComment,
  faMap,
  faShoppingBag,
  faUser,
  faCheckSquare,
  faClipboardList,
  faCalendar,
  faStickyNote,
  faFire,
  faUserPlus,
  faBraille,
  faChartLine,
  faLeaf,
  faBolt,
  faThumbsUp,
  faBars,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import classes from "../SideBar/SideBar.module.css";

const SideBar = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [isMaps, setIsMaps] = useState(false);
  const [isFirestore, setIsFirestore] = useState(false);
  const [isCharts, setIsCharts] = useState(false);
  const [isForms, setIsForms] = useState(false);
  const [isUI, setIsUI] = useState(false);
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);
  const [isTables, setIsTables] = useState(false);

  const toggleMenu = () => {
    setIsShown(!isShown);
  };

  const toggleMaps = () => {
    setIsMaps(!isMaps);
  };

  const toggleFirestore = () => {
    setIsFirestore(!isFirestore);
  };

  const toggleCharts = () => {
    setIsCharts(!isCharts);
  };

  const toggleForms = () => {
    setIsForms(!isForms);
  };

  const toggleUI = () => {
    setIsUI(!isUI);
  };

  const toggleAdvanced = () => {
    setIsAdvanced(!isAdvanced);
  };

  const toggleFeedback = () => {
    setIsFeedback(!isFeedback);
  };

  const toggleTables = () => {
    setIsTables(!isTables);
  };

  return (
    <aside
      className={props.isShrinkedSidebar ? classes.shrinked : classes.aside}
    >
      <div>
        {!props.isShrinkedSidebar && (
          <div className={classes.logo}>
            <h3>Isomorphic</h3>
          </div>
        )}{" "}
        {props.isShrinkedSidebar && (
          <div className={classes["no-logo"]}>
            <FontAwesomeIcon icon={faBolt} />
          </div>
        )}
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <ul
              className={
                props.isShrinkedSidebar ? classes["more-margin"] : null
              }
            >
              <li
                className={
                  props.isShrinkedSidebar
                    ? classes["menu-list-shrinked"]
                    : classes["menu-list"]
                }
              >
                <Link to="/email" className={classes.container}>
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Email</p>
                  </span>
                </Link>
              </li>
              <li
                className={
                  props.isShrinkedSidebar
                    ? classes["menu-list-shrinked"]
                    : classes["menu-list"]
                }
              >
                <Link to="/chat" className={classes.container}>
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faComment} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Chat</p>
                  </span>
                </Link>
              </li>
              <li className={classes.item}>
                <Link
                  to="/ecommerce"
                  className={classes["container-item"]}
                  onClick={toggleMenu}
                >
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faShoppingBag} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Ecommerce</p>
                  </span>
                  {!props.isShrinkedSidebar && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={classes.chevron}
                    />
                  )}
                  {props.isShrinkedSidebar && null}
                </Link>
                {isShown && (
                  <ul className={classes.list}>
                    <li className={classes.items}>
                      <Link to="/ecommerce/shop">Shop</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/cart">Cart</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/checkout">Checkout</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/cards">Cards</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/maps"
                  className={classes["container-item"]}
                  onClick={toggleMaps}
                >
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faMap} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Maps</p>
                  </span>
                  {!props.isShrinkedSidebar && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={classes.chevron}
                    />
                  )}
                  {props.isShrinkedSidebar && null}
                </Link>
                {isMaps && (
                  <ul className={classes.list}>
                    <li className={classes.items}>
                      <Link to="/ecommerce/google-map">Google Map</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/leaflet-map">Leaflet Map</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={
                  props.isShrinkedSidebar
                    ? classes["menu-list-shrinked"]
                    : classes["menu-list"]
                }
              >
                <Link to="/profile" className={classes.container}>
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Profile</p>
                  </span>
                </Link>
              </li>
              <li
                className={
                  props.isShrinkedSidebar
                    ? classes["menu-list-shrinked"]
                    : classes["menu-list"]
                }
              >
                <Link to="/scrum-board" className={classes.container}>
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faCheckSquare} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Scrum Board</p>
                  </span>
                </Link>
              </li>
              <li
                className={
                  props.isShrinkedSidebar
                    ? classes["menu-list-shrinked"]
                    : classes["menu-list"]
                }
              >
                <Link to="/invoice" className={classes.container}>
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faClipboardList} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Invoice</p>
                  </span>
                </Link>
              </li>
              <li
                className={
                  props.isShrinkedSidebar
                    ? classes["menu-list-shrinked"]
                    : classes["menu-list"]
                }
              >
                <Link to="/youtube-search" className={classes.container}>
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Youtube Search</p>
                  </span>
                </Link>
              </li>
              <li
                className={
                  props.isShrinkedSidebar
                    ? classes["menu-list-shrinked"]
                    : classes["menu-list"]
                }
              >
                <Link to="/calendar" className={classes.container}>
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faCalendar} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Calendar</p>
                  </span>
                </Link>
              </li>
              <li
                className={
                  props.isShrinkedSidebar
                    ? classes["menu-list-shrinked"]
                    : classes["menu-list"]
                }
              >
                <Link to="/notes" className={classes.container}>
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faStickyNote} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Notes</p>
                  </span>
                </Link>
              </li>
              <li
                className={
                  props.isShrinkedSidebar
                    ? classes["menu-list-shrinked"]
                    : classes["menu-list"]
                }
              >
                <Link to="/todos" className={classes.container}>
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faCheckSquare} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Todos</p>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/firestore-curd"
                  className={classes["container-item"]}
                  onClick={toggleFirestore}
                >
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faFire} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Firestore CURD</p>
                  </span>
                  {!props.isShrinkedSidebar && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={classes.chevron}
                    />
                  )}
                  {props.isShrinkedSidebar && null}
                </Link>
                {isFirestore && (
                  <ul className={classes.list}>
                    <li className={classes.items}>
                      <Link to="/ecommerce/articles">Articles</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/investors">Investors</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={
                  props.isShrinkedSidebar
                    ? classes["menu-list-shrinked"]
                    : classes["menu-list"]
                }
              >
                <Link to="/contacts" className={classes.container}>
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faUserPlus} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Contacts</p>
                  </span>
                </Link>
              </li>
              <li
                className={
                  props.isShrinkedSidebar
                    ? classes["menu-list-shrinked"]
                    : classes["menu-list"]
                }
              >
                <Link to="/shuffle" className={classes.container}>
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faBraille} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Shuffle</p>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/charts"
                  className={classes["container-item"]}
                  onClick={toggleCharts}
                >
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faChartLine} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Charts</p>
                  </span>
                  {!props.isShrinkedSidebar && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={classes.chevron}
                    />
                  )}
                  {props.isShrinkedSidebar && null}
                </Link>
                {isCharts && (
                  <ul className={classes.list}>
                    <li className={classes.items}>
                      <Link to="/ecommerce/google-carts">Google Carts</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/recharts">Recharts</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/react-chart-2">React-Chart-2</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/frappe-charts">Frappe Charts</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/forms"
                  className={classes["container-item"]}
                  onClick={toggleForms}
                >
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Forms</p>
                  </span>
                  {!props.isShrinkedSidebar && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={classes.chevron}
                    />
                  )}
                  {props.isShrinkedSidebar && null}
                </Link>
                {isForms && (
                  <ul className={classes.list}>
                    <li className={classes.items}>
                      <Link to="/ecommerce/input">Input</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/editor">Editor</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/forms-with-validation">
                        Forms With Validation
                      </Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/progress">Progress</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/button">Button</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/tab">Tab</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/checkbox">Checkbox</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/radiobox">Radiobox</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/select">Select</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/transfer">Transfer</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/autocomplete">AutoComplete</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/ui-elements"
                  className={classes["container-item"]}
                  onClick={toggleUI}
                >
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faLeaf} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>UI Elements</p>
                  </span>
                  {!props.isShrinkedSidebar && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={classes.chevron}
                    />
                  )}
                  {props.isShrinkedSidebar && null}
                </Link>
                {isUI && (
                  <ul className={classes.list}>
                    <li className={classes.items}>
                      <Link to="/ecommerce/badge">Badge</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/card">Card</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/carousel">Carousal</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/collapse">Collapse</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/pop-over">Pop Over</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/tooltip">Tooltip</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/tag">Tag</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/timeline">Timeline</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/dropdown">Dropdown</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/pagination">Pagination</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/rating">Rating</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/tree">Tree</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/swiper-slider">Swiper Slider</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/advanced-elements"
                  className={classes["container-item"]}
                  onClick={toggleAdvanced}
                >
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Advanced Elements</p>
                  </span>
                  {!props.isShrinkedSidebar && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={classes.chevron}
                    />
                  )}
                  {props.isShrinkedSidebar && null}
                </Link>
                {isAdvanced && (
                  <ul className={classes.list}>
                    <li className={classes.items}>
                      <Link to="/ecommerce/react-dates">React Dates</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/code-mirror">Code Mirror</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/uppy-uploader">Uppy Uploader</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/drop-zone">Drop Zone</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/feedback"
                  className={classes["container-item"]}
                  onClick={toggleFeedback}
                >
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Feedback</p>
                  </span>
                  {!props.isShrinkedSidebar && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={classes.chevron}
                    />
                  )}
                  {props.isShrinkedSidebar && null}
                </Link>
                {isFeedback && (
                  <ul className={classes.list}>
                    <li className={classes.items}>
                      <Link to="/ecommerce/alert">Alert</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/modal">Modal</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/message">Message</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/notification">Notification</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/pop-confirm">Pop Confirm</Link>
                    </li>
                    <li className={classes.items}>
                      <Link to="/ecommerce/spin">Spin</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/tables"
                  className={classes["container-item"]}
                  onClick={toggleTables}
                >
                  <div
                    className={
                      props.isShrinkedSidebar
                        ? classes["not-straight"]
                        : classes.straight
                    }
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </div>
                  <span
                    className={
                      props.isShrinkedSidebar
                        ? classes["no-text"]
                        : classes.text
                    }
                  >
                    <p>Tables</p>
                  </span>
                  {!props.isShrinkedSidebar && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={classes.chevron}
                    />
                  )}
                  {props.isShrinkedSidebar && null}
                </Link>
                {isTables && (
                  <ul className={classes.list}>
                    <li className={classes.items}>
                      <Link to="/ecommerce/ant-tables">Ant Tables</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
