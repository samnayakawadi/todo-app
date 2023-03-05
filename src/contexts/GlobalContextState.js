import { useState } from "react"

const GlobalContextState = () => {

    const defaultGlobalState = {
        list: [],
        addNewData: {
            title: "",
            description: "",
            isCompleted: false
        }
    }

    const [globalState, setGlobalState] = useState(defaultGlobalState)

    return { defaultGlobalState, globalState, setGlobalState }

}

export default GlobalContextState