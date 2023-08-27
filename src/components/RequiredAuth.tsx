import { Navigate } from "react-router-dom"
import { useAppSelector } from "../store/store"

type RequiredAuthProps ={

children:React.ReactNode,


}


function RequiredAuth({ children }: RequiredAuthProps) {
  const { isAuth } = useAppSelector((state) => state.note)
  return isAuth ? (
    children
  ) : <> <Navigate to={'/Signin'} replace></Navigate></>
}

export default RequiredAuth