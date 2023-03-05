import HomeNavbar from "./components/navbars/HomeNavbar"
import HomeFooter from "./components/footers/HomeFooter"
import GlobalContextState from "./contexts/GlobalContextState";
import { GlobalContext } from "./contexts/GlobalContext";
import DashboardLayouter from "./layouter/DashboardLayouter";

function App() {

  const { defaultGlobalState, globalState, setGlobalState } = GlobalContextState()
  return (
    <div>
      <GlobalContext.Provider value={{ defaultGlobalState, globalState, setGlobalState }}>
        <HomeNavbar />
        <DashboardLayouter />
        <HomeFooter />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
