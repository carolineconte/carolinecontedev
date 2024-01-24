import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FixedIcons } from "./components/FixedIcons"
import { HomePage } from "./pages/HomePage"
import { Footer } from "./components/Footer/Footer"
import { ProjectDetail } from "./components/ProjectDetails/ProjectDetails"
import { RecoilRoot } from "recoil"

function App() {

  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <FixedIcons />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/project/:id' element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
