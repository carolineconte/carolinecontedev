import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FixedIcons } from "./components/FixedIcons"
import { HomePage } from "./pages/HomePage"
import { Footer } from "./components/Footer/Footer"
import { ProjectDetail } from "./components/ProjectDetails/ProjectDetails"

function App() {

  return (
    <>
        <BrowserRouter>
          <FixedIcons />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/project/:id' element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
