import React, { useContext } from 'react';
import resumePDF from './Shubham_Resume.pdf';

import {MyContext} from "../Context/ScreenSizeProvider.jsx"

const Resume = () => {

  const {isMobile}=useContext(MyContext);


  return (
    <div>

      {isMobile? (
        <div>
          <h3>Click here to Download Resume.</h3>
          <a href={resumePDF} download="resume.pdf">
            Download Resume
          </a>
        </div>
      ) : (
        <div>
          <object
            data={resumePDF}
            type="application/pdf"
            style={{ display: 'flex', margin: 'auto', width: '80%', height: '800px' }}
          >
            <p>
              Sorry, your browser does not support PDFs. You can download the file{' '}
              <a href={resumePDF}>here</a>.
            </p>
          </object>
         
        </div>
      )}
    </div>
  );
};

export default Resume;
