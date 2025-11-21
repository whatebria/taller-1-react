import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";

import RegistroForm from "../components/lecturas/RegistroForm";
import { saveMediciones } from "../services/medidasService";

function RegistrarLecturaContainer() {
    const toastRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = (formData) => {
        const { datetime12h, medidor, ciudad, valor, tipoMedida } = formData;
        const errores = [];

        if (!datetime12h) errores.push("Debe seleccionar fecha y hora.");
        if (!medidor) errores.push("Debe seleccionar un medidor.");
        if (!ciudad || ciudad.trim() === "") errores.push("Debe ingresar la dirección.");
        if (valor == null || valor <= 0 || valor > 500) errores.push("El valor debe ser > 0 y <= 500.");
        if (!tipoMedida) errores.push("Debe seleccionar un tipo de medida.");

        if (errores.length > 0) {
            toastRef.current?.show({
                severity: "warn",
                summary: "Datos inválidos",
                detail: errores.join(""),
                life: 4000,
            });
            return;
        }

        const medicion = {
            fechaHora: datetime12h,
            medidor,
            direccion: ciudad,
            valor,
            tipoMedida, 
        };

        saveMediciones(medicion);
        navigate("/mediciones");
    };

    return (
        <>
            <Toast ref={toastRef} />
            <RegistroForm onSubmit={handleSubmit} />
        </>
    );
}

export default RegistrarLecturaContainer;
