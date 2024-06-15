
import { createContext } from "react";
import User from "../types/index";

interface Context {
  user?: User;
  setUser?: React.Dispatch<React.SetStateAction<User | undefined>>;
  
}
const LoginContext = createContext<Context>({});

export default LoginContext;
