'use client'
import React from 'react'
import tasks from '../../tasks'

const Button = (props) => {
const handleClick = () => {
    switch (props.action) {
      case "delete":
        console.log("Delete task clicked");
        break;
      case "openAddModal":
        console.log("Add task clicked");
        openAddModal();
        break;
      case "update":
        console.log("Update task clicked");
        break;
         case "closeModal":
        closeModal();
        break;
        case "saveTask":
        console.log("Task Saved");
        saveTask();
        break;

      default:
        console.log("No action matched");
    }
  };
    
    const handleDeleteTask = () => {
    console.log("Delete task clicked");
  };
  const openAddModal = () => {
    const modal = document.getElementById('my_modal_1');
   if (modal && modal instanceof HTMLDialogElement) {
    modal.showModal();
  }
  };
  const closeModal = () => {
    const modal = document.getElementById("my_modal_1");
    modal?.close();
  };
  return (
   <button className={props.class} onClick={handleClick} >{props.title}</button>
  )
}

export default Button;
