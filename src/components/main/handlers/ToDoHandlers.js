import { useContext } from "react"
import { useNavigate } from "react-router"
import { GlobalContext } from "../../../contexts/GlobalContext"

const ToDoHandlers = () => {

    const { globalState, setGlobalState } = useContext(GlobalContext)

    const navigate = useNavigate()

    const updateTodoStateHandler = (e) => {

        const { name, value } = e.target

        if (name === "title" || name === "description") {
            setGlobalState(prevState => { return { ...prevState, addNewData: { ...prevState.addNewData, [name]: value } } })
        }
        else if (name === "isCompleted") {
            setGlobalState(prevState => { return { ...prevState, addNewData: { ...prevState.addNewData, [name]: !prevState.addNewData.isCompleted } } })
        }
    }

    const addNewTodoHandler = () => {
        const updatedData = globalState.addNewData
        const latestList = globalState.list

        latestList.push(updatedData)

        setGlobalState(prevState => { return { ...prevState, list: latestList, addNewData: { ...prevState.addNewData, title: "", description: "", isCompleted: false } } })

        navigate("/lists")
    }

    const updateToDoHandler = (index) => {
        const updatedData = globalState.addNewData

        const latestList = globalState.list.map((singleItem, itemIndex) => {
            if (itemIndex === parseInt(index)) {
                return updatedData
            }

            return singleItem
        })
        setGlobalState(prevState => { return { ...prevState, list: latestList, addNewData: { ...prevState.addNewData, title: "", description: "", isCompleted: false } } })
        navigate("/lists")
    }

    const loadToDoDataHandler = (index) => {
        const updatedData = globalState.list[index]

        setGlobalState(prevState => { return { ...prevState, addNewData: updatedData } })

        navigate("/update/" + index)
    }

    const resetGlobalAddNewData = () => {
        setGlobalState(prevState => { return { ...prevState, addNewData: { ...prevState.addNewData, title: "", description: "", isCompleted: false } } })
    }

    const deleteToDoHandler = (index) => {
        const updatedList = []

        globalState.list.forEach((singleItem, itemIndex) => {
            if (parseInt(index) !== itemIndex) {
                updatedList.push(singleItem)
            }
        })

        setGlobalState(prevState => { return { ...prevState, list: updatedList, addNewData: { ...prevState.addNewData, title: "", description: "", isCompleted: false } } })
        navigate("/lists")
    }

    const toDoHandlers = {
        addNewTodoHandler,
        updateTodoStateHandler,
        updateToDoHandler,
        loadToDoDataHandler,
        resetGlobalAddNewData,
        deleteToDoHandler
    }

    return { toDoHandlers }

}

export default ToDoHandlers