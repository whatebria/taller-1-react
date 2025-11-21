import { useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';


function Navbar() {
    const navigate = useNavigate();
    const items = [
        {
            label: "Home",
            command: () => navigate("/"),
        },
        {
            label: "Registrar lectura",
            command: () => navigate("/registrar"),
        },
        {
            label: "Mediciones",
            command: () => navigate("/mediciones"),
        }
    ]

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}

export default Navbar
