import Home from "./routes/home/home.component.jsx";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";

const Shop = () => {
  return <h1>Shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route >
    </Routes>
  );
};

export default App;
