import { useRef } from 'react';
import AvatarImg from '../assets/avatar.jpg';
import { Link } from 'react-router-dom';
import useClickAwayListener from '../hooks/useClickAwayListener';
import { TfiClose } from 'react-icons/tfi';
// import { ImGithub } from 'react-icons/im';
import { useState } from 'react';

const Header = ({toggleSideBar, open = false}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const accountDropdown = useRef(null);
    const avatarBtn = useRef(null);

    const toggleAccountDropdown = () => {
        setDropdownOpen((open) => !open)
    }

    useClickAwayListener(avatarBtn, () => setDropdownOpen(false));

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button onClick={toggleSideBar} aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                {
                                    !!open ?
                                    <TfiClose className='w-6 h-6' />
                                    : <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                    </svg>
                                }
                            </button>
                            <Link href="/" className="flex items-center ml-2 md:mr-24 gap-3">
                                <span className="self-center text-xl font-bold sm:text-2xl whitespace-nowrap dark:text-white">Income & Expense Tracker</span>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            {/* <a href='https://github.com/ratulkuri/ostad-practice' target="_blank" rel='noreferrer' className='flex items-center font-bold border px-4 py-1.5 lg:mr-4 rounded-md'><ImGithub className='text-xl lg:mr-2' /> <span className='hidden lg:inline'>GitHub</span></a> */}
                            <div className="flex items-center ml-3 md:mr-10 relative flex-shrink-0">
                                <div>
                                    <button ref={avatarBtn} onClick={toggleAccountDropdown} type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src={AvatarImg} alt="user photo" />
                                    </button>
                                </div>
                                <div ref={accountDropdown} className={`absolute ${!dropdownOpen ? "hidden" : ""} right-0 top-0 translate-y-10 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`} id="dropdown-user">
                                    <div className="px-4 py-3" role="none">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white" role="none">
                                            Kowshik Kuri
                                        </p>
                                        <p className="text-sm text-gray-400 truncate dark:text-gray-300" role="none">
                                            Web Developer
                                        </p>
                                    </div>
                                    {/* <ul className="py-1" role="none">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header