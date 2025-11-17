import Image from "next/image";
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Button from "./components/button/Button"
import Card from './components/card/Card'
import tasks from './tasks'
import TaskSection from "./tasks/Tasks";

export default function Home() {
  return (
     <div>
        <div className='navigation'>
            <Navbar/>
        </div>
        <TaskSection />
        
     
    </div>
  );
}
