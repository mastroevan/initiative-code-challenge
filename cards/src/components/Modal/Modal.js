import React, {useContext} from 'react'
import AppContext from '../hooks/appContext';
import './Modal.css';

const Modal = () => {
  const {showModal, setShowModal, image} = useContext(AppContext);

  const handleCloseClick = () => {
    setShowModal(!showModal)
  }
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-body'>
          <button className='close-button' onClick={handleCloseClick}>X</button>
          <img src={image} alt="fullsize" style={{width: '50%', height: 'auto'}}/>
        </div>
      </div>
    </div>
  );
}

export default Modal;