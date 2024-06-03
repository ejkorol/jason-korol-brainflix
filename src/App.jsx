import { BrowserRouter, Routes, Route } from "react-router-dom";

/* STYLES */
import "./App.scss";

/* ROUTES */
import HomePage from "@/pages/HomePage/HomePage";
import UploadPage from "@/pages/UploadPage/UploadPage";
import VideoPage from "@/pages/VideoPage/VideoPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

/* ROUTE CONFIG */
const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => <HomePage />
  },
  {
    name: 'Upload',
    path: 'upload',
    component: () => <UploadPage />
  },
  {
    name: 'Video',
    path: 'video/:id',
    component: () => <VideoPage />
  },
  {
    name: '404',
    path: '*',
    component: () => <NotFoundPage />
  }
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => <Route
          key={route.name}
          path={route.path}
          element={route.component()}
        />)}
      </Routes>
    </BrowserRouter>
  )
};

export default App;
