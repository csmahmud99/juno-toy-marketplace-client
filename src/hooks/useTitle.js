import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Juno - Toys & Games`;
    }, [title]);
};

export default useTitle;