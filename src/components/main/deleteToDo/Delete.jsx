import { useContext } from "react";
import { useParams } from "react-router";
import { GlobalContext } from "../../../contexts/GlobalContext";

const Delete = ({ toDoHandlers }) => {

    const { globalState } = useContext(GlobalContext)

    const { index } = useParams();

    return (
        <div className="card m-5 p-5 mb-2">
            <div className="columns is-centered is-vcentered">
                <div className="column is-6">
                    To Do Title
                </div>
                <div className="column is-6">
                    {/* <input className="input is-primary" type="text" value={globalState.addNewData.title} onChange={toDoHandlers.updateTodoStateHandler} name="title" placeholder="To Do Title" /> */}
                    {globalState.list[index].title}
                </div>
            </div>
            <div className="columns is-centered is-vcentered">
                <div className="column is-6">
                    To Do Description
                </div>
                <div className="column is-6">
                    {/* <input className="input is-primary" type="text" value={globalState.addNewData.description} onChange={toDoHandlers.updateTodoStateHandler} name="description" placeholder="To Do Description" /> */}
                    {globalState.list[index].description}
                </div>
            </div>

            <div className="columns is-centered is-vcentered">
                <div className="column is-6">
                    To Do Completed?
                </div>
                <div className="column is-6">
                    <label className="checkbox">
                        {/* <input type="checkbox" readOnly checked={globalState.addNewData.isCompleted} name="isCompleted" onClick={toDoHandlers.updateTodoStateHandler} /> */}
                        {globalState.list[index].isCompleted ? "Completed" : "Not Completed"}
                        {/* Completed */}
                    </label>
                </div>
            </div>

            <hr />

            <div className="mt-5 has-text-centered mb-5">
                <button className="button is-danger is-fullwidth" onClick={() => { toDoHandlers.deleteToDoHandler(index) }}>Delete Todo</button>
            </div>
        </div>
    )
}

export default Delete