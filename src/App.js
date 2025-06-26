import React from "react";
import { Route,Routes,Link ,useParams} from "react-router";

const App = () => { 
  
    const Home = () =>{
        return <div>i am home</div>
    }

     const About = () =>{
        return <div>i am about</div>
    }


    const Contact = () =>{
        return <div>i am Contact us</div>
    }
    const Profile = () =>{
        const {userName}=useParams()
        return <div>{userName}</div>
    }
    






   return<>
   <Link to="/">Home</Link>
    <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
     <Link to="/profile/jscafe">Profile</Link>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile/:userName" element={<Profile/>}/>
    </Routes>
   </>
}
export default App;