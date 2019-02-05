import React, { Component } from "react";
import "./Modal.scss";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Modal extends Component {
  render() {
    const {isHidden, cancelClickModal} = this.props;
    let hidden = '';
    (isHidden)
      ? hidden = 'modal__hidden'
      : hidden = '';
    return (
      <div className={`modal__container ${hidden}`}>
        <ul className="modal__list">
          <li className="modal__item-title">¿Qué quieres hacer?</li>
          <li className="modal__item modal__item-sesion">
            <Link className="style_link" to="/">
            Cerrar Sesión
            </Link>
          </li>
          <li className="modal__item modal__item-cancel" onClick={cancelClickModal}>Cancelar</li>
        </ul>
      </div>
    );
  }
}

Modal.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  cancelClickModal: PropTypes.func.isRequired,
}


export default Modal;