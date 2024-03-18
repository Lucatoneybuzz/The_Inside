import React, { useState } from 'react';
import './InteriorImages.css';
import img1 from '../Assests/img1.jpg';
import img2 from '../Assests/img2.jpg';
import img3 from '../Assests/img3.jpg';
import img4 from '../Assests/img4.jpg';
import img5 from '../Assests/img5.jpg';
import img6 from '../Assests/img6.jpg';

function InteriorImages() {
  const imgs = [
    { id: 0, value: img1 },
    { id: 1, value: img2 },
    { id: 2, value: img3 },
    { id: 3, value: img4 },
    { id: 4, value: img5 },
    { id: 5, value: img6 },
  ];

  const [val, setVal] = useState(0);

  const handleNext = () => {
    setVal((val + 1) % imgs.length);
  };

  const handlePrevious = () => {
    setVal((val - 1 + imgs.length) % imgs.length);
  };

  return (
    <div className="main">
      <button className='btns' onClick={handlePrevious}>Previous</button>
      <img src={imgs[val].value} alt="slide" height="300" width="500" />
      <button className='btns' onClick={handleNext}>Next</button>
      <div className='flex_row'>
        {imgs.map((data, i) =>
          <div className="thumbnail" key={i}>
            <img
              className={val === i ? "clicked" : ""}
              src={data.value}
              onClick={() => setVal(i)}
              alt="thumbnail"
              height="70"
              width="100"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default InteriorImages;
