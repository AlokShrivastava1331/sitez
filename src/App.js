import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/common/Layout"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Courses } from "./pages/Courses"
import { Reviews } from "./pages/Reviews"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path='/about'
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path='/services'
            element={
              <Layout>
                <Courses />
              </Layout>
            }
          />
          <Route
            path='/reviews'
            element={
              <Layout>
                <Reviews />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
