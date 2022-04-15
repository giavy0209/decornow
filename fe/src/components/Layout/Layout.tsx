import { FunctionComponent } from "react";
import {Header,Footer} from "..";
import { ToastContainer } from 'react-toastify';
const Layout : FunctionComponent<{[k : string] : any}> = ({children}) => {
    return ( 
        <>
            <Header/>
                {children}
            <Footer/>
            <ToastContainer />
        </>
        
    )
}

export default Layout