import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'

import Welcome from './pages/Welcome'
import Challenges from './pages/Challenges'
const LoadingUi = ({ children }) => <Suspense fallback={<h1>Loading....</h1>}>{children}</Suspense>

function App() {
  const Active = lazy(() => import("./pages/ActiveChalanges.jsx"));
  const Completed = lazy(() => import("./pages/CompletedChallenges.jsx"));
  const Failed = lazy(() => import("./pages/FailedChallenges.jsx"));

  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/challenges' element={<LoadingUi><Challenges /></LoadingUi>}>
        <Route index={true} element={<LoadingUi><Active /></LoadingUi>} />
        <Route path='completed' element={<LoadingUi><Completed /></LoadingUi>} />
        <Route path='failed' element={<LoadingUi><Failed /></LoadingUi>} />
      </Route>
    </Routes>
  )
}

export default App
