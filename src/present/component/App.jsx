// routes
import { Routes, Route } from "react-router-dom";

// components
import Landing from "../../infra/components/Landing/Landing";
import Signin from "../../infra/components/Signin/Signin";
import Dashboard from "../../infra/components/Dashboard/Dashboard";
import NotFound from "../../infra/components/NotFound/NotFound";
import Login from "../../infra/components/Login/Login";
import RecoverPsw from "../../infra/components/RecoverPsw/RecoverPsw";

function App() {

  return (
    <>
      	<Routes>
			<Route path="/" element={ <Landing /> } />
			<Route path="/signin" element={ <Signin /> } />
			<Route path="/login" element={ <Login /> } />
			<Route path="/recover" element={ <RecoverPsw /> } />
			<Route path="/dashboard" element={ <Dashboard /> } />
			<Route path="*" element={ <NotFound /> } />
		</Routes>
    </>
  );
}

export default App;