// src/App.jsx
import React, { useState, useEffect } from 'react';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import GridView from './components/GridView';
import TileView from './components/TileView';
import DetailView from './components/DetailView';
import styles from './components/App.module.css';

function App() {
  const [view, setView] = useState('grid'); // 'grid' or 'tile'
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [apiList, setApiList] = useState([]);

  useEffect(() => {
    // Fetching the data when the component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setApiList(json));
  }, []);

  console.log(apiList);

  return (
    <div className="App">
      <ResponsiveNavbar />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <button
          className={styles.viewToggleButton}
          onClick={() => setView('grid')}
        >
          Grid View
        </button>
        <button
          className={styles.viewToggleButton}
          onClick={() => setView('tile')}
        >
          Tile View
        </button>
      </div>
      {view === 'grid' ? (
        <GridView onTileClick={setSelectedStudent} students={apiList} />
      ) : (
        <TileView onTileClick={setSelectedStudent} students={apiList} />
      )}
      {selectedStudent && (
        <DetailView
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </div>
  );
}

export default App;
