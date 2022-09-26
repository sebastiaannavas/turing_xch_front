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
// dashboard components
import Dashboard from "../../infra/components/Dashboard/Dashboard";
import MiPerfil from "../../infra/components/Dashboard/MiPerfil";
import Seguridad from "../../infra/components/Dashboard/Seguridad";
import BalanceDeActivos from "../../infra/components/Dashboard/BalanceDeActivos/BalanceDeActivos";
import Soporte from "../../infra/components/Dashboard/Soporte";
// Guides components
import Guides from "../../infra/components/Guides/atom/Guides";
import GTrade from "../../infra/components/Guides/atom/GTrade";
import GDeposito from "../../infra/components/Guides/atom/GDeposito";
import GWallet from "../../infra/components/Guides/atom/GWallet";
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
				<Route path="dashboard" element={ <Dashboard /> }>
					<Route index element={<MiPerfil />}/>
					<Route path="security" element={<Seguridad />}/>
					<Route path="balance" element={<BalanceDeActivos />}/>
					<Route path="support" element={<Soporte />}/>
				</Route>
			</Route>
			<Route path="/Guides" element={<Guides />}>
				<Route path="gtrade" element={<GTrade />}/>
				<Route path="gdeposito" element={<GDeposito />}/>
				<Route path="gwallet" element={<GWallet />}/>
			</Route>
			<Route path="*" element={ <NotFound /> } />
		</Routes>
    </>
  );
}

export default App;