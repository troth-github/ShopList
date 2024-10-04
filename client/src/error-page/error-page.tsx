import React from 'react'
import somethingWrong from '../assets/imgs/error-page/something-wrong.png'

interface IErrorPageProps {
    errorMessage: string;
}

function ErrorPage({errorMessage}: IErrorPageProps) {

    return (

      <div>
          <img src={somethingWrong} style={{width: '50%', height: '400px', overflow: 'hidden'}}/>
          <div>{errorMessage}</div>
      </div>
    );
}

export default (ErrorPage);