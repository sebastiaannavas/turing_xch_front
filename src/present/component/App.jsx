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

// modificado a partir de aqui
import TeamCards from "../../infra/components/TeamCards/TeamCards";
import Dashboard from "../../infra/components/Dashboard/Dashboard";
import MiPerfil from "../../infra/components/Dashboard/MiPerfil";
import Seguridad from "../../infra/components/Dashboard/Seguridad";
import BalanceDeActivos from "../../infra/components/Dashboard/BalanceDeActivos/BalanceDeActivos";
import Soporte from "../../infra/components/Dashboard/Soporte";
import FirstPanel from "../../infra/components/Dashboard/FirstPanel";
import ContactUs from "../../infra/components/ContactUs/ContactUs";
import Guides from "../../infra/components/Guides/Guides";


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
					<Route path="MiPerfil" element={<MiPerfil />}/>
					<Route path="Seguridad" element={<Seguridad />}/>
					<Route path="BalanceDeActivos" element={<BalanceDeActivos />}/>
					<Route path="Soporte" element={<Soporte />}/>
				</Route>
			</Route>
			<Route path="*" element={ <NotFound /> } />
			<Route path="/firstpanel" element={<FirstPanel />} />

			{/* modificado a partir de aqui */}
			
			<Route path="/TeamCards" element={<TeamCards />} />
			<Route path="/ContactUs" element={<ContactUs />} />
			<Route path="/Guides" element={<Guides />} />
		</Routes>
    </>
  );
}

export default App;