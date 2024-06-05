/* ROUTES */
import HomePage from "@/pages/HomePage/HomePage";
import UploadPage from "@/pages/UploadPage/UploadPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

/* ROUTE CONFIG */
const routes = [
  {
    name: 'Home',
    path: '/',
    component: HomePage
  },
  {
    name: 'Upload',
    path: '/upload',
    component: UploadPage
  },
  {
    name: 'Video',
    path: '/video/:id',
    component: HomePage
  },
  {
    name: '404',
    path: '*',
    component: NotFoundPage
  }
];

export default routes;
