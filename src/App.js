import Header from "./components/common/heading/Header"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import "./App.css"
function App() {
  return (
    <>
    <Router>
        <Header />
        <Switch>
          {/* <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} /> */}
        </Switch>
      </Router>
    </>
  )
}

export default App