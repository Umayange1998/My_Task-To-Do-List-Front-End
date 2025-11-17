"use client";
import React, { useState } from "react";
import AddTaskModal from "../components/addTaskModal/addTaskModal";
import Card from "../components/card/Card";
import initialTasks from "../tasks";
import UpdateTaskModal from "../components/updateTaskModal/UpdateTaskModal";

const TaskSection = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    console.log("deleted");
  };
  const markDone = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: "inactive" } : task
      )
    );
    console.log("done");
  };
  const modalRef = React.useRef(null);

  const openUpdateModal = (task) => {
    setTaskToUpdate(task);
    modalRef.current?.showModal();
  };
  return (
    <div>
      <AddTaskModal tasks={tasks} setTasks={setTasks} />
      <UpdateTaskModal
        task={taskToUpdate}
        setTasks={setTasks}
        modalRef={modalRef}
      />
      <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start flex-wrap lg:justify-around">
        {tasks.map((task) => (
          <Card
            key={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            dueDate={task.dueDate}
            status={task.status}
            onDone={() => markDone(task.id)}
            onDelete={() => deleteTask(task.id)}
            handleUpdate={() => openUpdateModal(task)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskSection;
