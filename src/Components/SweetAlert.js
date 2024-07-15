import React from 'react';
import SweetAlert2 from 'react-sweetalert2';
import { Row } from 'reactstrap';

const SweetAlert = ({ show, title, text, confirmButtonColor, buttonsStyling, onConfirm, children }) => {

  return (
    <Row>
      <SweetAlert2
        show={show}
        title={title}
        text={ text }
        buttonsStyling={buttonsStyling}
        confirmButtonColor={confirmButtonColor}
       onConfirm={onConfirm}
      >
        {children}
      </SweetAlert2>
    </Row>
  );
};

export default SweetAlert;
