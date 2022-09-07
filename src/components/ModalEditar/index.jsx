import { Dialog } from "@headlessui/react";
import React from "react";
import FormEdit from "../FormEdit";
import { BtnSearch } from "./styles";
import { StyledDialog } from "./styles";


const ModalEditar = ({ isOpenEdit, setIsOpenEdit, handleEditar, handleChange, selectReserva, atualiza}) => {


    return (
        <StyledDialog open={isOpenEdit} onClose={() => setIsOpenEdit(false)}>
            <div className="divModal">
                <Dialog.Panel className="panel">
                    <Dialog.Title>Edita?</Dialog.Title>
                    <FormEdit value={selectReserva} handleChange={handleChange}/>
                    <div className="buttons">
                        <BtnSearch onClick={atualiza}>Ok</BtnSearch>
                        <BtnSearch onClick={() => setIsOpenEdit(false)}>Cancel</BtnSearch>
                    </div>
                </Dialog.Panel>
                <div className="blackBox"></div>
            </div>
        </StyledDialog>
    );


};

export default ModalEditar;
