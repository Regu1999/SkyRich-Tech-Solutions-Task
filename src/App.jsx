import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'

import Welcome from './pages/Welcome'
const LoadingUi = ({ children }) => <Suspense fallback={<h1>Loading....</h1>}>{children}</Suspense>

function App() {

  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      {/* <Route path='/challenges' element={<LoadingUi><Challenges /></LoadingUi>}>
        <Route index={true} element={<LoadingUi><Active /></LoadingUi>} />
        <Route path='completed' element={<LoadingUi><Completed /></LoadingUi>} />
        <Route path='failed' element={<LoadingUi><Failed /></LoadingUi>} />
      </Route> */}
    </Routes>
  )
}

export default App
