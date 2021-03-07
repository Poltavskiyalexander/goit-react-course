import React, { Component } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { closeModal, children } = this.props;
    const overleyClickHandler = event => {
      const { target, currentTarget } = event;
      if (target === currentTarget) {
        closeModal();
      }
    };

    return createPortal(
      <div className="Overlay" onClick={overleyClickHandler}>
        <div className="Modal">{children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
