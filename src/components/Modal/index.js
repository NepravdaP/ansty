import React from 'react';
import ReactDOM from 'react-dom';
import { ModalPic, ModalText, ModalWrapper } from './styled';

const ModalGrats = ({ showGrats, setShowGrats }) => {
  return ReactDOM.createPortal(
    <ModalWrapper onClick={() => setShowGrats(null)}>
      <ModalPic
        src={showGrats.img}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
      <ModalText
        onClick={() => {
          setShowGrats(null);
        }}
      >
        <h2 className="mod-text">{showGrats.text}</h2>
      </ModalText>
    </ModalWrapper>,
    document.getElementById('modal-root')
  );
};

export default ModalGrats;
