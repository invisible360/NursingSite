import { useContext } from "react";
import { ContextHistory } from "../context/HisotryCarrier";

const useHistoryState = () => {
    const { history } = useContext(ContextHistory);

    if (!history) {
        throw new Error("useAppState must be used within the AppProvider");
    }
    return history;
};

export default useHistoryState;