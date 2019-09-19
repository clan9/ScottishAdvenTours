import { Component } from "react";
import { createPortal } from "react-dom";

const navRoot = document.getElementById("nav");

export default class NavPortal extends Component {
  constructor(props) {
    super(props);
    // Create a parent div for nav
    this.el = document.createElement("div");
  }

  // Append the created div to the navRoot
  componentDidMount() {
    navRoot.appendChild(this.el);
  }

  // Remove the created div for nav
  componentWillUnmount() {
    navRoot.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}
