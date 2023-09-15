export const providerTemplate = {
    razonSocial: "",
    nombreComercial: "",
    identificacionTributaria: "",
    numeroTelefonico: "",
    correoElectronico: "",
    sitioWeb: "",
    direccionFisica: "",
    pais: "",
    facturacionAnual: ""
}

export const highRiskEntities = {
    totalHits: 0,
    highRiskEntities: []
}

export async function getListProviders() {

    const res = await fetch('api/provider');

    if (!res.ok && res.status !== 200) {
        return [];
    }

    const result = await res.json();
    return result;

}

export async function getProvider(id) {

    const res = await fetch(`api/provider/${id}`);

    if (!res.ok && res.status !== 200) {
        return [];
    }

    const result = await res.json();
    return result;

}

export async function getHighRiskEntities(provider) {

    const res = await fetch(`apiURL`);

    if (!res.ok && res.status !== 200) {
        return highRiskEntities;
    }

    const result = await res.json();
    return result;
}

export async function postProvider(newProvider) {

    const res = await fetch('api/provider', {
        method: 'POST',
        body: JSON.stringify(newProvider),
        headers: {
            'content-type': 'application/json'
        }
    })

    return res;
}

export async function updateProvider(id, updateProvider) {
    const res = await fetch(`api/provider/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updateProvider),
        headers: {
            'content-type': 'application/json'
        }
    })

    return res;
}

export async function deleteProvider(id) {
    const res = await fetch(`api/provider/${id}`, {
        method: 'DELETE'
    })

    return res;
}