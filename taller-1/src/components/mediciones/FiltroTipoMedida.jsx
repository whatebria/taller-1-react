import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
        


function FiltroTipoMedida({ tipo, onChangeTipo, onFiltrar }) {
    const opcionesTipos = [
        { label: "Todos", value: " " }, 
        { label: "Kilowatts", value: "kilowatts" },
        { label: "Watts", value: "watts" },
        { label: "Temperatura", value: "temperatura" },

    ]
    return (
        <div>
            <Dropdown
                value={tipo}
                options={opcionesTipos}
                onChange={(e) => onChangeTipo(e.value)}
                placeholder="Filtrar por tipo"
            />
            <Button label="Filtrar" onClick={onFiltrar} />
        </div>
    )
}

export default FiltroTipoMedida
