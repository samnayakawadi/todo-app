import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GlobalContext } from "../../../contexts/GlobalContext"

const Lists = ({ toDoHandlers }) => {

    const { globalState } = useContext(GlobalContext)

    const navigate = useNavigate()

    return (
        <div>
            <div className="m-5 p-2 has-text-centered">
                {globalState.list.map((singleItem, index) => {
                    return <div className="column">
                        <div class="card">
                            <div class="card-content">
                                <div class="content p-2">
                                    <div className="columns is-centered is-vcentered notification p-0 mb-0 mb-4">
                                        <div className="column is-6">
                                            To Do Name
                                        </div>
                                        <div className="column is-6">
                                            {singleItem.title}
                                        </div>
                                    </div>

                                    <div className="columns is-centered is-vcentered notification p-0 mb-0 mb-4">
                                        <div className="column is-6">
                                            To Do Description
                                        </div>
                                        <div className="column is-6">
                                            {singleItem.description}
                                        </div>
                                    </div>

                                    <div className="columns is-centered is-vcentered notification p-0">
                                        <div className="column is-6">
                                            To Do Completed
                                        </div>
                                        <div className="column is-6">
                                            {singleItem.isCompleted === true ? "Completed" : "Not Completed"}
                                        </div>
                                    </div>

                                    <div className="columns is-centered is-vcentered notification p-0">
                                        <div className="column is-6">
                                            <button className="button is-info is-fullwidth" onClick={() => { toDoHandlers.loadToDoDataHandler(index) }}>Update This To Do</button>
                                        </div>
                                        <div className="column is-6">
                                            {/* <Link to={`/delete/${index}`}> */}
                                            <button className="button is-danger is-fullwidth" onClick={() => { navigate(`/delete/${index}`) }}>Delete This ToDo</button>
                                            {/* </Link> */}
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                })}
            </div>
            <div className="mt-5 has-text-centered mb-5">
                <Link to="/add">
                    <button className="button is-success" onClick={toDoHandlers.resetGlobalAddNewData}>Add New Todo</button>
                </Link>
            </div>
        </div>
    )
}

export default Lists