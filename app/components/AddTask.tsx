"use client";

import React, { FormEventHandler, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const router = useRouter();

  const handleSubmitNewData: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue("");
    setOpenModal(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="btn btn-primary w-full mb-4 text-white shadow-xl"
      >
        Add A New Task{" "}
        <AiOutlinePlus className="animate-pulse text-white" size={22} />
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <form onSubmit={handleSubmitNewData}>
          <h1 className="font-bold text-2xl">Add New Task</h1>
          <div className="modal-action">
            <input
              onChange={(e) => setNewTaskValue(e.target.value)}
              value={newTaskValue}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs mr-4"
            />
            <button type="submit" className="btn btn-primary rounded-full">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
