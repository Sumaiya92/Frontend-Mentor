import { useState } from "react";
import "./App.css";
import ProfileImg from "./assets/images/avatar-jessica.jpeg";

function App() {
  const [selectedLink,setIsSelected]=useState('');

  const handleSelectedLink=(event,u)=>{
    setIsSelected();
    console.log(u);
  }


  const socialLinks = [
    {
      id: 1,
      name: "Github",
      url: "https://github.com/",
    },
    {
      id: 2,
      name: "Front-end Mentor",
      logo: "Front-end Mentor",
      url: "https://www.frontendmentor.io/",
    },
    {
      id: 3,
      name: "Linked In",
      logo: "Linked In",
      url: "https://linkedin/",
    },
    {
      id: 4,
      name: " Twitter",
      logo: "Twitter",
      url: "https://twitter.com/",
    },
    {
      id: 5,
      name: "Instagram",
      logo: "Instagram",
      url: "https://www.instagram.com/",
    },
  ];
  return (
    <div className="min-h-screen bg-black md:flex md:justify-center md:items-center " >
     
    <div className="App py-8 md:top-10 rounded-xl mx-8 md:w-1/4  space-y-8 relative top-40 bg-[#1F1F1F] ">
      <img className="rounded-full w-20 md:ms-36 ms-32 " src={ProfileImg}></img>
      <div className="profile-details text-center  space-y-6  ">
        <h1 className="text-3xl text-white">Jessica Randall</h1>

        <span className="text-lime-300 text-1xl"> London,United Kingdom</span>
 
        <p className="text-white">Front-end developer and avid reader"</p>

        <div className="flex flex-col space-y-4 justify-center items-center">
          {
          socialLinks.map(({url, id ,name}) => (
            <a className="md:w-72 w-80 h-12 font-bold text-lg text-white bg-g rounded-md bg-[#333333]" href={url} target="_blank" key={id}> {name} </a>
          ))
        }
        </div>
      </div>
    </div>
    </div>

    

      
      
  );
}

export default App;
