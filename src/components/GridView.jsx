import React from 'react';
import styles from './GridView.module.css';

const GridView = ({ onTileClick, students }) => {
  

  return (
    <div className={styles.grid}>
      {students.map(student => (
        <div key={student.id} className={styles.gridItem} onClick={() => onTileClick(student)}>
          <div>{student.name}</div>
          <div>{student.age}</div>
          <div>{student.class}</div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
