import { useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";

const NewTransactionForm = ({type, toggle, setList}) => {
    const [desc, setDesc] = useState("");
    const [ammount, setAmmount] = useState(0);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleDescChange = (e) => {
        let value = e.target.value;
        setDesc(value);
    }

    const handleAmmountChange = (e) => {
        let value = Number(e.target.value) ?? 0;
        if(!!value) {
            setAmmount(value);
        }
    }

    const resetForm = () => {
        setDesc("");
        setAmmount(0);
        setDate("");
        setTime("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!!desc && !!ammount && ammount > 0 && !!date && !!time) {
            const transaction = {
                id: crypto.randomUUID(),
                desc,
                ammount,
                type,
                datetime: `${date} ${time}`
            };
            console.log(transaction);
            const list = !!localStorage.getItem("transactions") ? JSON.parse(localStorage.getItem("transactions")) : [];
            if(!!list) {
                const newList = [...list, transaction];
                const sorted = newList.sort((a, b) => moment(b.datetime, "YYYY-MM-DD HH:mm").diff(moment(a.datetime, "YYYY-MM-DD HH:mm")))
                localStorage.setItem("transactions", JSON.stringify(sorted))
                setList(newList);
                resetForm();
                toggle();
            }
        } else {
            toast.error("Please fillup the required field!");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} method="dialog" className="modal-box">
                <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => toggle()}>✕</button>
                <h3 className="font-bold text-lg uppercase">Add {type}</h3>
                <p className="py-4">Add your {type} transaction</p>
                <div className="space-y-6">
                    <input onChange={handleDescChange} type="text" placeholder="Description..." className="input input-bordered w-full" value={desc} />
                    <input onChange={handleAmmountChange} type="text" placeholder="Ammount..." className="input input-bordered w-full" value={ammount} />
                    <div className="join w-full">
                        <input onChange={(e) => setDate(e.target.value)} type="date" className="join-item input input-bordered w-full" value={date} />
                        <input onChange={(e) => setTime(e.target.value)} type="time" className="join-item input input-bordered w-full" value={time} />
                    </div>
                    <button type="submit" className={`block btn ${type === "income" ? "btn-primary" : "btn-secondary text-white"} uppercase ml-auto`}>Add {type}</button>
                </div>
                {/* <div className="modal-action">
                </div> */}
            </form>
        </>
    )
}

export default NewTransactionForm