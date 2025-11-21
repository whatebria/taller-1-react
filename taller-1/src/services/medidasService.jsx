const localKey = "mediciones_list_data"

const saveMediciones = (medicion)=>{
    let lista = []
    const data = localStorage.getItem(localKey)

    if(data != null){
        lista = JSON.parse(data)
    }

    const nueva = {
        id: Date.now(),
        ...medicion
    }

    lista = [...lista, nueva]
    localStorage.setItem(localKey, JSON.stringify(lista))
}

const filterByTipo = (tipo)=>{
    const lista = getMediciones()
    if(!tipo || tipo == " "){
        return lista
    }
    return lista.filter(m => m.tipoMedida === tipo)
}

const getMediciones = ()=>{
    const data = localStorage.getItem(localKey)
    if(data != null){
        return JSON.parse(data)
    }
    return []
}

const deleteMedicion = (id)=>{
    const lista = getMediciones()
    const filtradas = lista.filter(m =>m.id !== id)
    localStorage.removeItem(localKey, JSON.stringify(filtradas))
}



export {deleteMedicion, getMediciones, saveMediciones, filterByTipo}