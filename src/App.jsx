import React, { useState, useEffect } from 'react';

// ==========================================
//  STUDENT PROFILE CARD COMPONENTS
// ==========================================
const StudentCard = ({ name, course, semester, email, phone, city }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{
      border: '1px solid #00bcd4',
      borderRadius: '8px',
      padding: '16px',
      margin: '15px auto',
      maxWidth: '350px',
      backgroundColor: '#1e1e1e',
      color: '#ffffff',
      textAlign: 'left'
    }}>
      <h3>{name}</h3>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Semester:</strong> {semester}</p>

      <button 
        onClick={() => setShowDetails(!showDetails)}
        style={{
          backgroundColor: '#00bcd4',
          color: '#fff',
          border: 'none',
          padding: '8px 14px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {showDetails && (
        <div style={{ marginTop: '12px', borderTop: '1px solid #444', paddingTop: '8px' }}>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>City:</strong> {city}</p>
        </div>
      )}
    </div>
  );
};

// ==========================================
//  TEXT ANALYZER COMPONENTS
// ==========================================
const TextStats = ({ charCount, wordCount }) => {
  return (
    <div style={{ marginTop: '12px', color: '#00bcd4', textAlign: 'left' }}>
      <p><strong>Number of Characters:</strong> {charCount}</p>
      <p><strong>Number of Words:</strong> {wordCount}</p>
    </div>
  );
};

const TextAnalyzer = () => {
  const [text, setText] = useState('');

  const charCount = text.length;
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  useEffect(() => {
    document.title = `Characters: ${charCount}`;
  }, [charCount]);

  return (
    <div style={{
      border: '1px solid #00bcd4',
      borderRadius: '8px',
      padding: '16px',
      margin: '15px auto',
      maxWidth: '350px',
      backgroundColor: '#1e1e1e',
      color: '#ffffff'
    }}>
      <h2>Text Analyzer</h2>
      <textarea
        rows="4"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
        style={{
          width: '90%',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #444',
          backgroundColor: '#2b2b2b',
          color: '#fff'
        }}
      />
      
      <div style={{ textAlign: 'left', marginTop: '10px' }}>
        <h4>Entered Text:</h4>
        <p style={{
          backgroundColor: '#2b2b2b',
          padding: '8px',
          borderRadius: '4px',
          minHeight: '30px',
          wordBreak: 'break-word'
        }}>
          {text || <em style={{ color: '#888' }}>Nothing entered yet.</em>}
        </p>
      </div>

      <TextStats charCount={charCount} wordCount={wordCount} />
    </div>
  );
};

// ==========================================
// MAIN APP COMPONENT
// ==========================================
export default function App() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#121212',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#00bcd4' }}>React Assignment Solutions</h1>
      
      {/* Question 1 Output */}
      <h2 style={{ color: '#fff', marginTop: '20px' }}> Student Profile Card</h2>
      <StudentCard
        name="Sahani Urmila"
        course="BCA"
        semester="5th Semester"
        email="sahani.urmila@1565.com"
        phone="8460996163"
        city="Navsari"
      />

      <hr style={{ borderColor: '#333', margin: '30px auto', maxWidth: '400px' }} />

      {/* Question 2 Output */}
      <h2 style={{ color: '#fff' }}> Text Analyzer Component</h2>
      <TextAnalyzer />
    </div>
  );
}