import React from 'react';
import somethingWrong from '../assets/imgs/error-page/something-wrong.png';
import './error-page.scss';

interface IErrorPageProps {
    errorMessage: string;
}

function ErrorPage({errorMessage}: IErrorPageProps) {

    return (

      <div>
          <img src={somethingWrong} className='something-wrong-image' alt="Somthing went wrong!"/>
          <div>{errorMessage}</div>
      </div>
    );
}

export default (ErrorPage);