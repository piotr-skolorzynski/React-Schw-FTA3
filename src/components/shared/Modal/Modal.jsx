import { createPortal } from 'react-dom';
import Backdrop from './components/Backdrop';
import Overlay from './components/Overlay';
import './modal.css';

const Modal = ({ children, closeModal }) => {
  const portalElement = document.getElementById('overlays');
  return (
    <>
      {createPortal(<Backdrop closeModal={closeModal} />, portalElement)}
      {createPortal(<Overlay>{children}</Overlay>, portalElement)}
    </>
  );
};

export default Modal;
