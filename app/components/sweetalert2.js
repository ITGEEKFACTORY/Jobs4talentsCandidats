// components/SweetAlert.js
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const SweetAlert = ({ title, content }) => {
  React.useEffect(() => {
    MySwal.fire({
      title: <p>{title}</p>,
      html: <p>{content}</p>,
      didOpen: () => {
        MySwal.showLoading();
      },
    }).then(() => {
      return MySwal.fire(<p>Shorthand works too</p>);
    });
  }, [title, content]);

  return null; // Ce composant ne rend rien dans le DOM
};

export default SweetAlert;
