import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

class Modal extends Component {
  constructor(props) {
    super(props);

    // Create a parent div for the modal
    this.el = document.createElement("div");
  }

  // Append the created div to the div#modal in index.html
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  // Remove the appended div when Modal is unmounted
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
