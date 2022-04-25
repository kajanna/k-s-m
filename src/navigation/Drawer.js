import React from "react";
import { createPortal } from "react-dom";

import Menu from "./Menu";
import Backdrop from "../shared/Backdrop";

import "./Drawer.css";

const Drawer = (props) => {
  return createPortal(
    <>
      <div
        className={props.showDrawer ? "drawer" : "drawer drawer--close"}
        onClick={props.onClose}
      >
        <div className="drawer__menu">
          <Menu />
        </div>
      </div>
      <Backdrop closeBackdrop={props.onClose} showBackdrop={props.showDrawer} />
    </>,
    document.getElementById("drawer")
  );
};

export default Drawer;
