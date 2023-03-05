import { Route, Routes } from "react-router"
import Add from "../components/main/addToDo/Add"
import Delete from "../components/main/deleteToDo/Delete"
import ToDoHandlers from "../components/main/handlers/ToDoHandlers"
import Home from "../components/main/home/Home"
import Lists from "../components/main/listToDos/Lists"
import Update from "../components/main/updateToDo/Update"

const DashboardLayouter = () => {

    const { toDoHandlers } = ToDoHandlers()

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lists" element={<Lists toDoHandlers={toDoHandlers} />} />
            <Route path="/add" element={<Add toDoHandlers={toDoHandlers} />} />
            <Route path="/update/:index" element={<Update toDoHandlers={toDoHandlers} />} />
            <Route path="/delete/:index" element={<Delete toDoHandlers={toDoHandlers} />} />
        </Routes>
    )
}

export default DashboardLayouter