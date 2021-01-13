import App from './App';
import Home from './Home';
import Products from './Products';
import About from './About';
// import NotFound from './NotFound';

import loadData from './helpers/loadData';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/products',
    exact: true,
    component: Products,
    loadData: () => loadData('products')
  },
  {
    path: '/about',
    exact: true,
    component: About,
    loadData: () => loadData('about')
  },
//   {
//     component: NotFound
//   }
];

export default Routes;