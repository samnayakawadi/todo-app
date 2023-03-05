import { useContext } from "react"
import { useParams } from "react-router";
import { GlobalContext } from "../../../contexts/GlobalContext"

const Update = ({ toDoHandlers }) => {

    const { globalState } = useContext(GlobalContext)

    const { index } = useParams();

    return (
        <div className="card m-5 p-5 mb-2">
            <div className="columns is-centered is-vcentered">
                <div className="column is-6">
                    To Do Title
                </div>
                <div className="column is-6">
                    <input className="input is-primary" type="text" value={globalState.addNewData.title} onChange={toDoHandlers.updateTodoStateHandler} name="title" placeholder="To Do Title" />
                </div>
            </div>
            <div className="columns is-centered is-vcentered">
                <div className="column is-6">
                    To Do Description
                </div>
                <div className="column is-6">
                    <input className="input is-primary" type="text" value={globalState.addNewData.description} onChange={toDoHandlers.updateTodoStateHandler} name="description" placeholder="To Do Description" />
                </div>
            </div>

            <div className="columns is-centered is-vcentered">
                <div className="column is-6">
                    To Do Completed?
                </div>
                <div className="column is-6">
                    <label className="checkbox">
                        <input type="checkbox" readOnly checked={globalState.addNewData.isCompleted} name="isCompleted" onClick={toDoHandlers.updateTodoStateHandler} />
                        {/* Completed */}
                    </label>
                </div>
            </div>

            <hr />

            <div className="mt-5 has-text-centered mb-5">
                <button className="button is-success is-fullwidth" onClick={() => { toDoHandlers.updateToDoHandler(index) }}>Update Todo</button>
            </div>
        </div>
    )
}

export default Update