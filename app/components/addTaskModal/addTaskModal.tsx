"use client";
import React, { useState } from "react";
import Button from "../button/Button";
import tasks from "../../tasks";

const AddTaskModal = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  const closeModal = () => {
    const modal = document.getElementById("my_modal_1");
    setTitle("");
      setDescription("");
      setPriority("");
      setDueDate("");
    if (modal && modal instanceof HTMLDialogElement) modal.close();
  };

  const saveTask = () => {
    if (!title || !description || !priority || !dueDate) {
      alert("Please fill all fields");
      return;
    }

    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      description,
      priority,
      dueDate,
      status: "active" ,
    };

    setTasks([...tasks, newTask]); // update state to trigger re-render
    console.log("Task saved:", newTask);

    // reset fields
    setTitle("");
    setDescription("");
    setPriority("");
    setDueDate("");

    closeModal();
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add New Task</h3>

        <form method="dialog" className="space-y-4">
          {/* Task Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Task Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter task title"
              className="input input-bordered w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Enter task description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Priority */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Priority</span>
            </label>
            <select
              className="select select-bordered w-full"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option disabled selected>
                Choose priority
              </option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Due Date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Due Date</span>
            </label>
            <input
              type="date"
              className="input input-bordered w-full"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="modal-action">
            <button
              type="button"
              className="btn btn-outline"
              onClick={closeModal}
            >
              Close
            </button>
            {/* FIXED BUTTON */}

            <button
              type="button"
              className="btn btn-primary"
              onClick={saveTask}
            >
              Save Task
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddTaskModal;
