import { useContext } from "react";
import { ContextHistory } from "../context/HisotryCarrier";

const useAppState = () => {
    const { value } = useContext(ContextHistory);

    if (!value) {
        throw new Error("useAppState must be used within the AppProvider");
    }
    return value;
};

export default useAppState;