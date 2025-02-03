import { About } from "./Components/About"
import { CV } from "./Components/Cv"
import { Footer } from "./Components/Footer"
import { Home } from "./Components/Home"
import { Navbar } from "./Components/Navbar"
import { Projects } from "./Components/Projects"
import { References } from "./Components/References"

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <CV/>
      <Projects />
      <References />
      <Footer />
    </>
  )
}

export default App
