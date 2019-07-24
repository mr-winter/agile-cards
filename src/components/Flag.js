import React from 'react';

function Flag({ label, color }) {
  return (
    <div>
      {label && <span>{label}</span>}
      {color && <span>{color}</span>}
    </div>
  );
}

export default Flag;
