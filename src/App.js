// src/App.js
import React, { useState } from 'react';
import './App.css';
import QuizGame from './QuizGame';
import AboutReport from './AboutReport';

function App() {
  const [view, setView] = useState('home'); // 'home', 'quiz', 'about'

  const renderView = () => {
    switch (view) {
      case 'quiz':
        return <QuizGame backToHome={() => setView('home')} />;
      case 'about':
        return <AboutReport backToHome={() => setView('home')} />;
      default:
        return (
          <div className="home-container">
            <h1>🛡️ 資訊安全與倫理期末報告</h1>
            <p className="subtitle">整合本學期 13 個核心單元的互動式學習平台</p>
            <div className="button-group">
              <button className="btn-primary" onClick={() => setView('quiz')}>
                🚀 開始資安大挑戰
              </button>
              <button className="btn-secondary" onClick={() => setView('about')}>
                📄 查看各種資安防禦優缺點分析
              </button>
            </div>
            <footer className="footer">
              <p>學生：錢暄貿 | 學號：111213201</p>
            </footer>
          </div>
        );
    }
  };

  return (
    <div className="App">
      {renderView()}
    </div>
  );
}

export default App;
