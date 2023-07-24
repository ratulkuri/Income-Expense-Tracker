import { useEffect, useState } from 'react';
import { ReactComponent as IncomeIcon } from '../assets/icons/income.svg';
import { ReactComponent as ExpenseIcon } from '../assets/icons/expense.svg';
import FloatingAddButton from '../components/FloatingAddButton';
import StatItem from '../components/StatItem';
import TransactionsTable from '../components/TransactionsTable';
import moment from 'moment';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [transactionList, setTransactionList] = useState([]);

    useEffect(() => {
        const list = localStorage.getItem("transactions");
        if(!!list) {
            let allTransactionList = JSON.parse(list);
            let sorted = allTransactionList.sort((a, b) => moment(b.datetime, "YYYY-MM-DD HH:mm").diff(moment(a.datetime, "YYYY-MM-DD HH:mm")))
            setTransactionList(sorted);
        }
    }, []);

    useEffect(() => {
        const TotalIncomeValue = transactionList.reduce((accumualtor, transaction) => {
            if(transaction.type === "income") {
                accumualtor = accumualtor + transaction.ammount
            }
            return accumualtor
        }, 0)
        setTotalIncome(TotalIncomeValue);

        const TotalExpenseValue = transactionList.reduce((accumualtor, transaction) => {
            if(transaction.type === "expense") {
                accumualtor = accumualtor + transaction.ammount
            }
            return accumualtor
        }, 0)
        setTotalExpense(TotalExpenseValue);

    }, [transactionList]);

    // console.log("transactionList =>", transactionList);

    return (
        <>
            <Helmet>
                <title>Dashboard - Income & Expense Tracker</title>
            </Helmet>

            <FloatingAddButton setList={setTransactionList} />

            <div className="flex justify-center mb-10">
                <div className="stats stats-vertical lg:stats-horizontal shadow-lg border w-full max-w-6xl">
                    <StatItem
                        icon={<IncomeIcon className="w-20 h-20" />}
                        title="Total Income"
                        value={totalIncome}
                        type="income"
                    />
                    <StatItem
                        icon={<ExpenseIcon className="w-20 h-20" />}
                        title="Total Expense"
                        value={totalExpense}
                        type="expense"
                    />
                </div>
            </div>

            {
                !!transactionList && transactionList?.length > 0 &&
                <TransactionsTable title="Transactons" transactionList={transactionList} />
            }
        </>
    )
}

export default Dashboard