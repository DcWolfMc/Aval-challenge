import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Favorits} from "./pages/Favorits"
import {Home} from "./pages/Home"
import {List} from "./pages/List"
import {User, NoUser} from "./pages/User"
export function AppRoutes(){
return(
    <Router>
      <Routes>
        
        <Route path="/list" element={<List/>}>
          <Route path=":user" element={<User/>} />
          <Route index element={<NoUser/>}/>
        </Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorits" element={<Favorits/>}/>

      </Routes>
    </Router>
)
}

/*
 arquivo list
<Router>
  <ListHeader/>
</Router>
*/
// <Route path="/list" element={list} => arquivo jxs com 

// dentro de list:

//<tag1> = header
//  <tag2> = 
//  <tag3> = 