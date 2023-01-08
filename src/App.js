import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Categories,
  Landing,
  PageNotFound,
  Recipe,
  Search,
  SharedLayout,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Landing />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/search/:title" element={<Recipe />} />
          <Route path="/categories" element={<Recipe />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
