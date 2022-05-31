import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import People from "./pages/people";
import PeopleDetail from "./pages/peopledetail";
import Planets from "./pages/planets";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="details/:id" element={<PeopleDetail />} />
        <Route path="planets" element={<Planets />} />
      </Routes>
    </div>

  );
}

export default App;
