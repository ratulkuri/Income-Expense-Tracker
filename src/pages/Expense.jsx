import moment from "moment";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPlus } from 'react-icons/fa';
import Empty from "../components/Empty";
import TransactionModal from "../components/TransactionModal";
import TransactionsTable from "../components/TransactionsTable";

const Expense = () => {
    const [alltransactionList, setAllTransactionList] = useState([]);
    const [expenseTransactionList, setExpenseTransactionList] = useState([]);
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
            let expenseList = alltransactionList.filter((item) => item.type === "expense");
            let sorted = expenseList.sort((a, b) => moment(b.datetime, "YYYY-MM-DD HH:mm").diff(moment(a.datetime, "YYYY-MM-DD HH:mm")))
            setExpenseTransactionList(sorted);
        }
    }, [alltransactionList]);

  return (
    <>
        <Helmet>
            <title>Expense - Income & Expense Tracker</title>
        </Helmet>

        {
            !!expenseTransactionList &&
            (
                expenseTransactionList?.length > 0
                ? <>
                    <TransactionModal type={modalType} isOpen={modalIsOpen} toggle={handleModalToggle} setList={setAllTransactionList} />
                    <button tabIndex={0} className="btn btn-circle btn-secondary btn-lg text-white m-1 fixed right-14 bottom-14" onClick={() => handleModalToggle("expense")}>
                        <FaPlus />
                    </button>
                    <TransactionsTable title="Income Transactons" transactionList={expenseTransactionList} />
                </>
                : <Empty type="expense" setList={setAllTransactionList} />
            )
        }
    </>
  )
}

export default Expense