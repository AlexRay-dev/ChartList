import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from "./pages/layout";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      </Route>
    </Routes>
  );
}

export default App;
