import { Dialog } from "@headlessui/react";
import React from "react";
import { BtnSearch } from "./styles";
import { StyledDialog } from "./styles";

const ModalDelete = ({ isOpen, setIsOpen, handleDelete}) => {
  
  return (
    <StyledDialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="divModal">
        <Dialog.Panel className="panel">
          <Dialog.Title>Tem certeza que deseja excluir?</Dialog.Title>
          <div className="buttons">
            <BtnSearch onClick={handleDelete}>Delete</BtnSearch>
            <BtnSearch onClick={() => setIsOpen(false)}>Cancel</BtnSearch>
          </div>
        </Dialog.Panel>
        <div className="blackBox"></div>
      </div>
    </StyledDialog>
  );
};

export default ModalDelete;
