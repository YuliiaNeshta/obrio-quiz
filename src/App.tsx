import { useState } from 'react';
import Button from './components/Button';
import logo from './assets/logo_black.png';
import styles from './App.module.scss';
import { ReactComponent as ArrowBack } from './assets/previous-arrow.svg';
import DateScreen from './pages/DateScreen/DateScreen';
import FirstScreen from './pages/FirstScreen';
import LoadingScreen from './pages/LoadingScreen';
import StatusScreen from './pages/StatusScreen';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleNextQuestion = () => {
    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  let question;

  switch (currentQuestion) {
    case 1:
      question = <FirstScreen />;
      break;
    case 2:
      question = <DateScreen />;
      break;
    case 3:
      question = <LoadingScreen />;
      break;
    case 4:
      question = <StatusScreen />;
      break;
    default:
      question = null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {currentQuestion > 1 && (
          <button className={styles.buttonBack} onClick={handlePreviousQuestion}>
            <ArrowBack />
          </button>
        )}

        <img className={styles.logo} src={logo} alt="Nebula" />
      </div>
      {question}
      <Button type="gradient" onClick={handleNextQuestion}>
        Next
      </Button>
    </div>
  );
}

export default App;
