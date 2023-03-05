import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <section className="hero is-success is-halfheight">
                <div className="hero-body">
                    <div className>
                        <p className="title">
                            To Do Application
                        </p>
                        <p className="subtitle">
                            Made Using React JS
                        </p>
                    </div>
                </div>
                <div className="columns is-centered is-vcentered">
                    <Link to="/lists">
                        <button className="button is-primary">See All ToDos</button>
                    </Link>
                </div>
            </section>

        </div>
    )
}

export default Home