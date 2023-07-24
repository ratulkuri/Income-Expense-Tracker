import NewTransactionForm from "./NewTransactionForm";

const TransactionModal = ({isOpen, type, toggle, setList}) => {
    // const toggoleModal = (e) => {
    //     e.preventDefault();
    //     toggle();
    // }
    return (
        <>
            <dialog id="transaction_modal" className={`modal ${isOpen ? "modal-open" : ""} modal-bottom sm:modal-middle`}>
                <NewTransactionForm type={type} toggle={toggle} setList={setList} />
            </dialog>
        </>
    )
}

export default TransactionModal