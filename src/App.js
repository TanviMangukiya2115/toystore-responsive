import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import CatalogOne from "./CatalogOne";
import DeliveryOne from "./DeliveryOne";
import ContactsOne from "./ContactsOne";
import AboutOne from "./AboutOne";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}/>
          <Route path="/CatalogOne" element={<CatalogOne/>} />
          <Route path="/DeliveryOne" element={<DeliveryOne/>} />
          <Route path="/AboutOne" element={<AboutOne/>} />
          <Route path="/ContactsOne" element={<ContactsOne/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;