import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { ReactComponent as IncomeIcon } from '../assets/icons/income.svg';
import { ReactComponent as ExpenseIcon } from '../assets/icons/expense.svg';
import TransactionModal from './TransactionModal';


const FloatingAddButton = ({setList}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalType, setModalType] = useState("");

    const handleModalToggle = (type = "") => {
        setModalType(type);
        setModalIsOpen((prevState) => !prevState);
    }

    return (
        <>
            <TransactionModal type={modalType} isOpen={modalIsOpen} toggle={handleModalToggle} setList={setList} />
            <div className="dropdown dropdown-top dropdown-end fixed right-14 bottom-14">
                <label tabIndex={0} className="btn btn-circle btn-success btn-lg text-white m-1">
                    <FaPlus />
                </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><button onClick={() => handleModalToggle("income")}><IncomeIcon className="text-2xl h-6 w-6" /> Add Income</button></li>
                    <li><button onClick={() => handleModalToggle("expense")}><ExpenseIcon className="text-2xl h-6 w-6" /> Add Expense</button></li>
                </ul>
            </div>
        </>
    )
}

export default FloatingAddButton