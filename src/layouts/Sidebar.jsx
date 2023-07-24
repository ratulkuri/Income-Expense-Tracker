import useIsMobile from "../hooks/useIsMobile";
import { NavLink } from "react-router-dom";
import { ReactComponent as Dashboard } from '../assets/icons/dashboard.svg';
import { ReactComponent as IncomeIcon } from '../assets/icons/income.svg';
import { ReactComponent as ExpenseIcon } from '../assets/icons/expense.svg';

const Sidebar = ({open, toggleSideBar}) => {
    const { isMobile } = useIsMobile();

    const links = [
        {
            label: "Dashboard",
            icon: <Dashboard className="text-2xl h-6 w-6" />,
            href: "/",
        },
        {
            label: "Income",
            icon: <IncomeIcon className="text-2xl h-6 w-6" />,
            href: "/income",
        },
        {
            label: "Expense",
            icon: <ExpenseIcon className="text-2xl h-6 w-6" />,
            href: "/expense",
        },
    ]

    return (
        <>
            <div onClick={toggleSideBar} className={`${(!open || !isMobile) ? "invisible" : "visible"} overlay z-40 fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 transition-all`}></div>
            <aside id="sidebar" className={`${(open && isMobile) ? "open" : ""} fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="sidebar-menu space-y-2 font-medium">
                        {
                            (links?.length > 0) && links.map((link, index) => {
                                return (
                                    <li key={`menu-${index+1}`}>
                                        {
                                            !!link.href ?
                                            <NavLink to={link?.href} onClick={toggleSideBar} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                                {link?.icon}
                                                <span className="ml-3">{link?.label}</span>
                                            </NavLink>
                                            : <span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                {link?.icon}
                                                <span className="ml-3">{link?.label}</span>
                                            </span>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar