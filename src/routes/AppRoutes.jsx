import{Route, Routes} from "react-router-dom"
import { Inicio } from "../components/Inicio"
import { Tierra } from "../components/Tierra"
import { Agua } from "../components/Agua"
import { Fuego } from "../components/Fuego"
import { Aire } from "../components/Aire"
import SignInSide from "../components/SignInSide"

export const AppRoutes = () => {
    return (
        <Routes>
           <Route path="login" element={<SignInSide/>}></Route>
           <Route path="/inicio" element={<Inicio/>}></Route> 
           <Route path="/tierra" element={<Tierra/>}></Route> 
           <Route path="/agua" element={<Agua/>}></Route> 
           <Route path="/fuego" element={<Fuego/>}></Route> 
           <Route path="/aire" element={<Aire/>}></Route> 

        </Routes>
    )
}