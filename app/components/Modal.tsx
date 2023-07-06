interface IModal {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<IModal> = ({ openModal, setOpenModal, children }) => {
  return (
    <dialog
      id="my_modal_3"
      className={`modal ${openModal ? "modal-open" : ""}`}
    >
      <div className="modal-box">
        <button
          onClick={() => setOpenModal(false)}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
