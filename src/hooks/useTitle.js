import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=> {
        document.title = `Figurama | ${title}`;
    }, [title])
}

export default useTitle;