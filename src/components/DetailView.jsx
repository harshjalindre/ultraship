import React from 'react';
import styles from './DetailView.module.css';

const DetailView = ({ student, onClose }) => {
  console.log(student)
  return (
    <div className={styles.detailView}>
      <div className={styles.detailContent}>
        <h2>{student.name}</h2>
        <p>Email: {student.email}</p>
        <p>Phone: {student.phone}</p>
        {/* Add more details here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DetailView;
