// // SimpleComponent.js
// import React from 'react';
// import '../Styles/cssComponent.css'; // Import the external CSS file

// const SimpleComponent = () => {
//   return (
//     <div>
//       <header>
//         <h1>Simple React Component</h1>
//       </header>

//       <main>
//         <p>Welcome to my simple React component!</p>
//         <p>This is an example of a React component with external CSS.</p>
//       </main>

//       <footer>
//         <p>&copy; {new Date().getFullYear()} Your Name</p>
//       </footer>
//     </div>
//   );
// };

// export default SimpleComponent;


// ---------------------

// SimpleComponent.js
import React from 'react';

const SimpleComponent = () => {
  return (
    <div style={styles.container}>
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px' }}>
        <h1 style={styles.heading}>Simple React Component</h1>
      </header>

      <main style={styles.content}>
        <p>Welcome to my simple React component!</p>
        <p>This is an example of a React component with inline CSS.</p>
      </main>

      <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px' }}>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
};

export default SimpleComponent;

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    marginTop: '0',
  },
  content: {
    marginBottom: '20px',
  },
};
