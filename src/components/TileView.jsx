import React, { useState } from 'react';
import styles from './TileView.module.css';


const TileView = ({ onTileClick, students }) => {
  

  return (
    <div className={styles.tileView}>
      {students.map(student => (
        <div key={student.id} className={styles.tile} onClick={() => onTileClick(student)}>
          <div>{student.name}</div>
          <div>{student.class}</div>
          <button>Edit</button>
          <button>Flag</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TileView;
