import { useState } from "react"
import { ToastContainer } from "react-toastify"
import WebRoutes from "../routes/WebRoutes"
import Header from "./Header"
import Sidebar from "./Sidebar"

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSideBar = () => {
    setSidebarOpen((open) => !open);
  }

  return (
    <>
      <div className="app-container">
        <ToastContainer position="top-center" theme="colored" closeButton={false} />
        <Header toggleSideBar={toggleSideBar} open={sidebarOpen} />
        <Sidebar toggleSideBar={toggleSideBar} open={sidebarOpen} />
        <main className="main p-4 sm:ml-64 mt-14">
          <WebRoutes />
        </main>
      </div>
    </>
  )
}

export default DefaultLayout