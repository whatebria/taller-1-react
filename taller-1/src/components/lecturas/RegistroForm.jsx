import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { Editor } from 'primereact/editor';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';
import { Panel } from 'primereact/panel';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
        


function RegistroForm({ onSubmit }) {
    const [datetime12h, setDateTime12h] = useState(null);
    const [medidor, setMedidor] = useState(1);
    const [ciudad, setCiudad] = useState('');
    const [valor, setValor] = useState(0);
    const [tipoMedida, setTipoMedida] = useState("");

    const medidorOptions = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]

    const handleSubmit = () => {
        onSubmit?.({
            datetime12h,
            medidor,
            ciudad,
            valor,
            tipoMedida,
        });
    };

    const footerTemplate = () => {
        return (
            <Button label="Registrar"  onClick={handleSubmit}/>
        );
    };

    return (
        <div>
            <Panel header="Registrar lectura" footerTemplate={footerTemplate}>
                <div className="mb-5">
                    <FloatLabel>
                        <Calendar value={datetime12h} onChange={(e) => setDateTime12h(e.value)} showTime hourFormat="12" />
                        <label>Fecha y hora</label>
                    </FloatLabel>
                </div>
                <div className="mb-4">
                    <FloatLabel>
                        <Dropdown value={medidor} onChange={(e) => setMedidor(e.value)} options={medidorOptions} optionLabel="name"
                            placeholder="Selecciona un medidor" className="w-full md:w-14rem" />
                        <label>Medidor</label>
                    </FloatLabel>
                </div>
                <div className="mb-5 card">
                    <Editor value={ciudad} onTextChange={(e) => setCiudad(e.htmlValue)} style={{ height: '80px' }} />
                </div>
                <div className="mb-4">
                    <FloatLabel>
                        <InputNumber id="number-input" value={valor} onValueChange={(e) => setValor(e.value)} min={1}
                            max={500}
                            mode="decimal" />
                        <label htmlFor="number-input">Valor</label>
                    </FloatLabel>
                </div>
                <div className="mb-4">
                    <label htmlFor="number-input">Tipo de medida</label>
                    <div className="card flex justify-content-center mt-2">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex align-items-center mb-1">
                                <RadioButton inputId="kilowatts" name="kilowatts" value="kilowatts" onChange={(e) => setTipoMedida(e.value)} checked={tipoMedida === 'kilowatts'} />
                                <label htmlFor="kilowatts" className="ml-2">Kilowatts</label>
                            </div>
                            <div className="flex align-items-center mb-1">
                                <RadioButton inputId="watts" name="watts" value="watts" onChange={(e) => setTipoMedida(e.value)} checked={tipoMedida === 'watts'} />
                                <label htmlFor="watts" className="ml-2">Watts</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="temperatura" name="temperatura" value="temperatura" onChange={(e) => setTipoMedida(e.value)} checked={tipoMedida === 'temperatura'} />
                                <label htmlFor="temperatura" className="ml-2">Temperatura</label>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Panel>
        </div>
    )
}

export default RegistroForm
