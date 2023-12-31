import React from 'react';

import { images } from '../../constraints';

const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom: '1rem'}}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className='spoon__image'/>
    </div>
  )
}

export default SubHeading