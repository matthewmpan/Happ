import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import Feed from './components/Feed.jsx';
import NoPage from './components/NoPage.jsx';
import Footer from './components/Footer.jsx';



function App(props) {

  // const adminUser = {
  //   email: 'admin@admin.com',
  //   password: 'admin123'
  // };

  // const [user, setUser] = useState({ name: '', email: '' });
  // const [error, setError] = useState('');

  // const Login = details => {
  //   console.log(details);

  //   if (details.email === adminUser.email && details.password === adminUser.password) {
  //     console.log("Logged in");
  //     setUser({
  //       name: details.name,
  //       email: details.email
  //     });
  //   } else {
  //     console.log("Details do not match!");
  //     setError("Details do not match!");
  //   }
  // };

  // const Logout = details => {
  //   console.log('Logout');
  //   setUser({ name: '', email: '' });
  // };


  return (

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="/create" element={<Feed />} />
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>

    // <div className="App">
    //   {(user.email !== "") ? (
    //     <div className="welcome">
    //       <h2>Welcome, <span>{user.name}</span></h2>
    //       <button onClick={Logout}>Logout</button>
    //     </div>
    //   ) : (
    //     <LoginForm Login={Login} error={error} />
    //   )}
    // </div>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="feed" element={<Feed />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    // <div>
    //   <h1>Hello world!</h1>
    //   <button 
    //   id='signinButton' 
    //   onClick={this.props.changeButtonVal} >
    //   {this.props.buttonVal}
    //   </button>
    // </div>
  );
}


export default App;