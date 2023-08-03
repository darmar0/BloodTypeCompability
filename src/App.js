import { Container } from "./App.jsx";
import { Route, Routes } from "react-router";
import MainRoute from "./routes/Main.route.jsx";
import FinalRoute from "./routes/Final.route.jsx";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<MainRoute />}></Route>
        <Route path="/blood-type/:type" element={<FinalRoute />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
