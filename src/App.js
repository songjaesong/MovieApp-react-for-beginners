import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App(){
    return (
        <Router>
            <Routes>
                <Route exact path= "/movie/:id" element={<Detail />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}
export default App;