import "./App.css";
import { Provider } from "react-redux";
import { Store } from "./Store/Store";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
