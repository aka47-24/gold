import { AuthCtxt } from "providers/auth";
import { useContext } from "react";

export const useAuth = () => useContext(AuthCtxt);
