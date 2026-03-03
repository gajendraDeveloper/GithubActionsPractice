import { createContext, useContext } from "react"
import { toast, ToastContainer } from "react-toastify";


const ToastContext = createContext(null);
const ToastNotification = ({children}) => {
    const showToast = ({type, message}) => {
        return toast[type](message);
    }
  return (
    <div>
         <ToastContext.Provider value={{showToast}}>
            {children}
            <ToastContainer position="top-right" autoClose={2000}/>
         </ToastContext.Provider>
    </div>
  )
}

export default ToastNotification
export const useToast = () => useContext(ToastContext);