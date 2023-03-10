import Header from "./components/common/heading/header/Header"
import { BrowserRouter as Router, Switch,Route } from "react-router-dom"
import "./App.css"
import Home from "./components/home/Home"
import Why from "./components/home/Why"
import Process from "./components/home/Process"
import Counter from "./components/home/Counter"
function App() {
  return (
    <>
    <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/' component={Why} />
          <Route exact path='/' component={Process} />
          <Route exact path='/' component={Counter} />
          {/*// <Route exact path='/team' component={Team} />
          // <Route exact path='/pricing' component={Pricing} />
          // <Route exact path='/journal' component={Blog} />
          // <Route exact path='/contact' component={Contact} />  */} 
        </Switch>
      </Router>
    </>
  )
}

export default App