import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

function MedicionesTable({ mediciones, onDescartar }) {

    const fechaTemplate = (rowData) => {
        if (!rowData.fechaHora) return "";
        const data = new Date(rowData.fechaHora);
        return data.toLocaleDateString();
    };

    const horaTemplate = (rowData) => {
        if (!rowData.fechaHora) return "";
        const data = new Date(rowData.fechaHora);
        return data.toLocaleTimeString();
    };

    const valorTemplate = (rowData) => {
        let unidad = "";

        if (rowData.tipoMedida === "kilowatts") unidad = "kW";
        else if (rowData.tipoMedida === "watts") unidad = "W";
        else if (rowData.tipoMedida === "temperatura") unidad = "C";

        return `${rowData.valor} ${unidad}`;
    };

    const accionesTemplate = (rowData) => (
        <Button
            label="Descartar Lectura"
            icon="pi pi-times"
            severity="danger"
            onClick={() => onDescartar(rowData.id)}
        />
    );


    return (
        <DataTable value={mediciones}
            sortField="fechaHora"
            sortOrder={-1} // más recientes primero
            emptyMessage="No hay mediciones registradas"
            tableStyle={{ minWidth: '50rem' }}>

            <Column header="Fecha" body={fechaTemplate} sortable />
            <Column header="Hora" body={horaTemplate} />
            <Column field="medidor" header="Medidor" sortable />
            <Column header="Valor" body={valorTemplate} />
            <Column header="Acciones" body={accionesTemplate} />
        </DataTable>
    )
}

export default MedicionesTable
