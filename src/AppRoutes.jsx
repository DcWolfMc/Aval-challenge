import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Favorits} from "./pages/Favorits"
import {Home} from "./pages/Home"
import {List} from "./pages/List"

export function AppRoutes(){
return(
    <Router>
      <Routes>

        <Route path="/list" element={<List/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorits" element={<Favorits/>}/>

      </Routes>
    </Router>
)
}