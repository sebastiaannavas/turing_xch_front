// routes
import { Routes, Route } from "react-router-dom";

// components
import Landing from "../../infra/components/Landing/Landing";
import Signin from "../../infra/components/Signin/Signin";
import NotFound from "../../infra/components/NotFound/NotFound";
import Login from "../../infra/components/Login/Login";
import RecoverPsw from "../../infra/components/RecoverPsw/RecoverPsw";
// modificado a partir de aqui
import TeamCards from "../../infra/components/TeamCards/TeamCards";
import Dashboard from "../../infra/components/Dashboard/Dashboard";
import MiPerfil from "../../infra/components/Dashboard/MiPerfil";
import Seguridad from "../../infra/components/Dashboard/Seguridad";
import BalanceDeActivos from "../../infra/components/Dashboard/BalanceDeActivos/BalanceDeActivos";
import Soporte from "../../infra/components/Dashboard/Soporte";
import FirstPanel from "../../infra/components/Dashboard/FirstPanel";


function App() {

  return (
    <>
      	<Routes>
			<Route path="/" element={ <Landing /> } />
			<Route path="/signin" element={ <Signin /> } />
			<Route path="/login" element={ <Login /> } />
			<Route path="/recover" element={ <RecoverPsw /> } />
			<Route path="*" element={ <NotFound /> } />
			<Route path="/firstpanel" element={<FirstPanel />} />

			{/* modificado a partir de aqui */}
			
			<Route path="/TeamCards" element={<TeamCards />} />
			<Route path="/dashboard" element={ <Dashboard /> }>
				<Route path="MiPerfil" element={<MiPerfil />}/>
				<Route path="Seguridad" element={<Seguridad />}/>
				<Route path="BalanceDeActivos" element={<BalanceDeActivos />}/>
				<Route path="Soporte" element={<Soporte />}/>
			</Route>
			
		</Routes>
    </>
  );
}

export default App;