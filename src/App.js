import Home from './component/Home';
import Blog from './component/Blog';
import Contactus from './component/Contactus';
import Aboutus from './component/About';
import Navbar from './component/Navbar';
import Furniture from './component/Furniture';
import {Routes,Route} from 'react-router-dom';
import ItemProvider from './component/context/ItemProvider';
import BlogState from './component/context/BlogState';
import './App.css';





function App() {

 return (
    
    <div className="hero_area">
        
      <Navbar/>
      <BlogState>
      <ItemProvider >
      <Routes>
        <Route element={ <Home/>} path={'/'}/>
        <Route element={ <Furniture />} path={'/Furniture'}/>
        <Route element={ <Blog/>} path={'/Blog'}/>
        <Route element={ <Contactus/>} path= {'/Contactus'}/>
        <Route element={ <Aboutus/>} path={'/Aboutus'}/>
     </Routes>
     </ItemProvider>
     </BlogState>
      

    </div>
  );
}

export default App;
