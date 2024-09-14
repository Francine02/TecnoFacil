import { BrowserRouter as Router } from "react-router-dom"
import { Header } from "./components/Header"
import { MenuProvider } from "./contexts/MenuProvider"
import { AppRoutes } from "./routes/AppRoutes"

function App() {
  return (
    <Router>
      <MenuProvider>
        <Header/>
        <AppRoutes/>
      </MenuProvider>
    </Router>
  )
}

export default App
