import { useState } from "react";
import TransactionModal from "./TransactionModal"

const Empty = ({setList, type}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalType, setModalType] = useState("");

    const handleModalToggle = (type = "") => {
        setModalType(type);
        setModalIsOpen((prevState) => !prevState);
    }

    return (
        <>
            <section className="py-4 bg-neutral-50 overflow-hidden">
                <div className="card bg-base-100 border w-full max-w-6xl mx-auto">
                    <div className="card-body text-center">
                        <h2 className="font-heading mb-3 text-2xl font-semibold">It&rsquo;s a bit empty here</h2>
                        <p className="mb-7 text-neutral-500">Start tracking your income and expenses by adding new transactions.</p>
                        <div className="flex gap-3 justify-center">
                            {
                                (!type || type === "income") &&
                                <button onClick={() => handleModalToggle("income")} className="btn btn-primary">Add Income</button>
                            }
                            {
                                (!type || type === "expense") &&
                                <button onClick={() => handleModalToggle("expense")} className="btn btn-secondary text-white">Add Expense</button>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <TransactionModal type={modalType} isOpen={modalIsOpen} toggle={handleModalToggle} setList={setList} />
        </>
    )
}

export default Empty