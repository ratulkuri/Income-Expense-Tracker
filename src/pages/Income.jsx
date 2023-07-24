import moment from "moment";
import { useEffect, useState } from "react";
import { FaPlus } from 'react-icons/fa';
import TransactionModal from "../components/TransactionModal";
import TransactionsTable from "../components/TransactionsTable";

const Income = () => {
    const [alltransactionList, setAllTransactionList] = useState([]);
    const [incomeTransactionList, setIncomeTransactionList] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalType, setModalType] = useState("");

    const handleModalToggle = (type = "") => {
        setModalType(type);
        setModalIsOpen((prevState) => !prevState);
    }

    useEffect(() => {
        const list = localStorage.getItem("transactions");
        if(!!list) {
            setAllTransactionList(JSON.parse(list));
        }
    }, []);

    useEffect(() => {
        if(!!alltransactionList && alltransactionList?.length > 0) {
            let incomeList = alltransactionList.filter((item) => item.type === "income");
            let sorted = incomeList.sort((a, b) => moment(b.datetime, "YYYY-MM-DD HH:mm").diff(moment(a.datetime, "YYYY-MM-DD HH:mm")))
            setIncomeTransactionList(sorted);
        }
    }, [alltransactionList]);

  return (
    <>
        <TransactionModal type={modalType} isOpen={modalIsOpen} toggle={handleModalToggle} setList={setAllTransactionList} />
        <button tabIndex={0} className="btn btn-circle btn-success btn-lg text-white m-1 fixed right-14 bottom-14" onClick={() => handleModalToggle("income")}>
            <FaPlus />
        </button>
        {
            !!incomeTransactionList && incomeTransactionList?.length > 0 &&
            <TransactionsTable title="Income Transactons" transactionList={incomeTransactionList} />
        }
    </>
  )
}

export default Income