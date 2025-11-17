"use client";
import React, { useState } from "react";


const UpdateTaskModal = ({ task, setTasks, modalRef }) => {
    if (!task) return null;

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const closeModal = () => {
    document.getElementById("update_modal").close();
  };

  const saveUpdate = () => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id
          ? { ...t, title, description, priority, dueDate }
          : t
      )
    );

    closeModal();
  };
  return (
    <dialog ref={modalRef}  id="update_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Update Task</h3>

        <div className="space-y-4">
          <input
            className="input input-bordered w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="textarea textarea-bordered w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <select
            className="select select-bordered w-full"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <input
            type="date"
            className="input input-bordered w-full"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <div className="modal-action">
          <button className="btn" onClick={closeModal}>Cancel</button>
          <button className="btn btn-primary" onClick={saveUpdate}>
            Save
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default UpdateTaskModal;
