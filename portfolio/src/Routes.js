import {Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Error404 from './components/ErrorPages/Error404';
import Layout from './components/Layout/Layout';

const AllRoutes = ()=>{
    return(
        <Routes>
            <Route 
                path='/'
                element={<Layout/>}>
            </Route>
            <Route 
                path='/home'
                element={<Home/>}>
            </Route>
            <Route 
                path='*'
                element={<Error404/>}>
            </Route>
        </Routes>
    );
}

export default AllRoutes;