import moment from 'moment';
import {ImArrowUp, ImArrowDown} from 'react-icons/im';

const TransactionsTable = ({title, transactionList}) => {
  return (
    <>
        <div className="card bg-base-100 shadow-xl border w-full max-w-6xl mx-auto">
            <div className="card-body">
                <div className="card-title">
                    <h1 className='text-center uppercase font-bold w-full'>{title}</h1>
                </div>
                <div className="divider"></div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Description</th>
                                <th className='text-center'>Date</th>
                                <th className='text-center'>Time</th>
                                <th className='text-center'>Type</th>
                                <th className='text-center'>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                transactionList?.map((item, index) => {
                                    return (
                                        <tr key={item?.id} title={`${item?.type === "expense" ? "Expense" : "Income"}`}>
                                            <th>{index + 1}</th>
                                            <td>{item.desc}</td>
                                            <td className='text-center whitespace-nowrap'>{moment(item?.datetime, "YYYY-MM-DD HH:mm").format("DD MMM, YYYY")}</td>
                                            <td className='text-center whitespace-nowrap'>{moment(item?.datetime, "YYYY-MM-DD HH:mm").format("hh:mm a")}</td>
                                            <td className='text-center'>
                                                {
                                                    item?.type === "expense" ?
                                                    <ImArrowDown className='text-red-400 mx-auto' title='Expense' />
                                                    : (item?.type === "income" && <ImArrowUp className='text-green-500 mx-auto' title='Income' />)
                                                }
                                            </td>
                                            <td className={`text-center font-bold ${item?.type === "income" ? "text-green-500" : "text-red-500"} `}>{item?.ammount}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default TransactionsTable