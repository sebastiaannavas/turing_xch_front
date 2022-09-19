// routes
import { Routes, Route } from "react-router-dom";

// single components
import NoNavbar from "../../infra/components/NoNavbar/NoNavbar";
import Signin from "../../infra/components/Signin/Signin";
import Login from "../../infra/components/Login/Login";
import RecoverPsw from "../../infra/components/RecoverPsw/RecoverPsw";
// landing components
import Navbar from "../../infra/components/Navbar/Navbar";
import Landing from "../../infra/components/Landing/Landing";
// account components
import UserNavbar from "../../infra/components/UserNavbar/UserNavbar";
import Exchange from "../../infra/components/Exchange/Exchange";
import Deposits from "../../infra/components/Deposits/Deposits";
// no components
import NotFound from "../../infra/components/NotFound/NotFound";


function App() {

  return (
    <>
      	<Routes>
			<Route element={ <Navbar /> }>
				<Route path="/" element={ <Landing /> } />
			</Route>
			<Route element={ <NoNavbar /> }>
				<Route path="/signin" element={ <Signin /> } />
				<Route path="/login" element={ <Login /> } />
				<Route path="/recover" element={ <RecoverPsw /> } />
			</Route>
			<Route path="account" element={ <UserNavbar /> }>
				<Route index element={ <Exchange /> } />
				<Route path="deposits" element={ <Deposits /> } />
			</Route>
			<Route path="*" element={ <NotFound /> } />
		</Routes>
    </>
  );
}

export default App;