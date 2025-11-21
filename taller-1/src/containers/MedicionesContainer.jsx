import { useEffect, useRef, useState } from "react";
import { Toast } from "primereact/toast";

import MedicionesTable from "../components/mediciones/MedicionesTable";
import FiltroTipoMedida from "../components/mediciones/FiltroTipoMedida";

import { getMediciones, deleteMedicion, filterByTipo } from "../services/medidasService";

function MedicionesContainer() {
    const toastRef = useRef(null);

    const [mediciones, setMediciones] = useState([]);
    const [tipoFiltro, setTipoFiltro] = useState("");
    const [medicionesMostradas, setMedicionesMostradas] = useState([]);

    useEffect(() => {
        const lista = getMediciones();
        setMediciones(lista);
        setMedicionesMostradas(lista);
    }, []);

    const handleFiltrar = () => {
        const filtradas = filterByTipo(tipoFiltro);
        setMedicionesMostradas(filtradas);
    };

    const handleDescartar = (id) => {
        deleteMedicion(id);

        const listaActualizada = getMediciones();
        setMediciones(listaActualizada);

        const filtradas = filterByTipo(tipoFiltro);
        setMedicionesMostradas(filtradas);

        toastRef.current?.show({
            severity: "info",
            summary: "Lectura descartada",
            detail: "La medición fue eliminada correctamente.",
            life: 3000,
        });
    };

    return (
        <>
            <Toast ref={toastRef} />
            <div className="mb-3">
                <FiltroTipoMedida
                    tipo={tipoFiltro}
                    onChangeTipo={setTipoFiltro}
                    onFiltrar={handleFiltrar}
                />
            </div>

            <MedicionesTable
                mediciones={medicionesMostradas}
                onDescartar={handleDescartar}
            />
        </>
    );
}

export default MedicionesContainer;
