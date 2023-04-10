import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ReactComponent as Brain } from './assets/brain.svg';
import DateScreen from './pages/DateScreen/DateScreen';
import DecisionScreen from './pages/DecisionScreen';
import Email from './pages/Email';
import FirstScreen from './pages/FirstScreen';
import LoadingScreen from './pages/LoadingScreen';
import ParentScreen from './pages/ParentScreen';
import RelationshipProblem from './pages/RelationshipProblem';
import SingleParentScreen from './pages/SingleParentScreen';
import SingleProblem from './pages/SingleProblem';
import StatusScreen from './pages/StatusScreen';
import VisualDecision from './pages/VisualDecision/VisualDecision';
import {
  FIRST_SCREEN,
  PARENT,
  EMAIL,
  DECISION,
  DATE,
  STATUS,
  DECISION_VISUAL,
  DATA_LOADING,
  SINGLE_PROBLEM,
  PARTNER_PROBLEM,
  SINGLE_PARENT,
} from './constants/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={FIRST_SCREEN} element={<FirstScreen />} />
        <Route path={DATE} element={<DateScreen />} />
        <Route path={DATA_LOADING} element={<LoadingScreen />} />
        <Route path={STATUS} element={<StatusScreen />} />
        <Route path={SINGLE_PROBLEM} element={<SingleProblem />} />
        <Route path={PARTNER_PROBLEM} element={<RelationshipProblem />} />
        <Route path={PARENT} element={<ParentScreen />} />
        <Route path={SINGLE_PARENT} element={<SingleParentScreen />} />
        <Route path={DECISION} element={<DecisionScreen />} />
        <Route path={DECISION_VISUAL} element={<VisualDecision imageSrc={<Brain />} />} />
        <Route path={EMAIL} element={<Email />} />
        <Route path="*" element={<Navigate to={FIRST_SCREEN} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
