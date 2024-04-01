


import { Provider } from 'react-redux';
import { store } from './redux/store';
import GeUserData from "./component/GetUserData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayData from "./component/DisplayData";
import Header from './component/Header';





export default function App() {

  return (
    <main>
      <Header/>
      <Provider store={store}>
      <BrowserRouter>
       <Routes>
           <Route path="/" element={<GeUserData />} />
           <Route path="redirect" element={<DisplayData />} />
           <Route path="*" element={<DisplayData />} />
       </Routes>
     </BrowserRouter>
      </Provider>
    </main>
  );
}
