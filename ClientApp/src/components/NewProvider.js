import React, { useState } from 'react';
import {
    Field,
    Input,
    Dialog,
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogBody,
    DialogActions,
    DialogContent,
    Button,
    Text,
    Select,
    Caption1
} from '@fluentui/react-components';
import {
    ErrorCircle16Filled
} from '@fluentui/react-icons';
import { postProvider, providerTemplate } from '../utils/Utils';

function NewProvider({ visibility, callback, refresh, refreshListCallback }) {

    const [razonSocial, setRazonSocial] = useState('');
    const [razonSocialError, setRazonSocialError] = useState('');
    const [nombreComercial, setNombreComercial] = useState('');
    const [nombreComercialError, setNombreComercialError] = useState('')
    const [identificacionTributaria, setIdentificacionTributaria] = useState('');
    const [identificacionTributariaError, setIdentificacionTributariaError] = useState('');
    const [numeroTelefonico, setNumeroTelefonico] = useState('');
    const [numeroTelefonicoError, setNumeroTelefonicoError] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [correoElectronicoError, setCorreoElectronicoError] = useState('');
    const [sitioWeb, setSitioWeb] = useState('');
    const [sitioWebError, setSitioWebError] = useState('');
    const [direccionFisica, setDireccionFisica] = useState('');
    const [direccionFisicaError, setDireccionFisicaError] = useState('');
    const [pais, setPais] = useState('');
    const [paisError, setPaisError] = useState('');
    const [facturacionAnual, setFacturacionAnual] = useState('');
    const [facturacionAnualError, setFacturacionAnualError] = useState('');

    const handleCancel = () => {
        document.getElementById("newProviderForm").reset()
        setRazonSocial('')
        setRazonSocialError('')
        setNombreComercial('')
        setNombreComercialError('')
        setIdentificacionTributaria('')
        setIdentificacionTributariaError('')
        setNumeroTelefonico('')
        setNumeroTelefonicoError('')
        setCorreoElectronico('')
        setCorreoElectronicoError('')
        setSitioWeb('')
        setSitioWebError('')
        setDireccionFisica('')
        setDireccionFisicaError('')
        setPais('')
        setPaisError('')
        setFacturacionAnual('')
        setFacturacionAnualError('')
        callback(!visibility)
    }

    const handleInput = e => (!/[0-9]/.test(e.key)) && e.preventDefault()

    const newProvider = (e) => {
        const name_ = e.target.name
        const v_ = e.target.value

        switch (name_) {
            case 'razonSocial':
                setRazonSocial(v_)
                if (v_ !== '') { setRazonSocialError('') } else { setRazonSocialError('Razon social requerida') }
                break
            case 'nombreComercial':
                setNombreComercial(v_)
                if (v_ !== '') { setNombreComercialError('') } else { setNombreComercialError('Razon social requerida') }
                break
            case 'identificacionTributaria':
                setIdentificacionTributaria(v_)
                if (v_ !== '') { setIdentificacionTributariaError('') } else { setIdentificacionTributariaError('Razon social requerida') }
                break
            case 'numeroTelefonico':
                setNumeroTelefonico(v_)
                if (v_ !== '') { setNumeroTelefonicoError('') } else { setNumeroTelefonicoError('Razon social requerida') }
                break
            case 'correoElectronico':
                setCorreoElectronico(v_)
                if (v_ !== '') { setCorreoElectronicoError('') } else { setCorreoElectronicoError('Razon social requerida') }
                break
            case 'sitioWeb':
                setSitioWeb(v_)
                if (v_ !== '') { setSitioWebError('') } else { setSitioWebError('Razon social requerida') }
                break
            case 'direccionFisica':
                setDireccionFisica(v_)
                if (v_ !== '') { setDireccionFisicaError('') } else { setDireccionFisicaError('Razon social requerida') }
                break
            case 'pais':
                setPais(v_)
                if (v_ !== '') { setPaisError('') } else { setPaisError('Pais requerido') }
                break
            case 'facturacionAnual':
                setFacturacionAnual(v_)
                if (v_ !== '') { setFacturacionAnualError('') } else { setFacturacionAnualError('Razon social requerida') }
                break
            default:
                break
        }

        providerTemplate[name_] = v_
    }

    const handlePostProvider = () => {
        postProvider(providerTemplate).then(res => {

            if (razonSocial === '') setRazonSocialError('Razon social requerida')
            if (nombreComercial === '') setNombreComercialError('Nombre comercial requerido')
            if (identificacionTributaria === '') setIdentificacionTributariaError('Identificacion tributaria requerida')
            if (numeroTelefonico === '') setNumeroTelefonicoError('Numero telefonico requerido')
            if (correoElectronico === '') setCorreoElectronicoError('Correo electronico requerido')
            if (sitioWeb === '') setSitioWebError('Sitio web requerido')
            if (direccionFisica === '') setDireccionFisicaError('Direccion fisica requerida')
            if (pais === '') setPaisError('Pais requerido')
            if (facturacionAnual === '') setFacturacionAnualError('Facturacion anual requerida')

            if (res.status === 201) {
                refreshListCallback(!refresh);
                callback(!visibility)
            }
        }).catch(e => console.log(e))
    }

    return (
        <Dialog open={visibility}>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>Agregar proveedor</DialogTitle>
                    <DialogContent>
                        <form id="newProviderForm">
                            <Field
                                label="Razon social"
                                required={true}
                                validationState={razonSocialError === '' ? "none" : "error"}
                                validationMessage={razonSocialError}>
                                <Input
                                    type="text"
                                    name="razonSocial"
                                    onChange={newProvider}
                                />
                            </Field>
                            <Field
                                label="Nombre comercial"
                                required={true}
                                validationState={nombreComercialError === '' ? "none" : "error"}
                                validationMessage={nombreComercialError}>
                                <Input
                                    type="text"
                                    name="nombreComercial"
                                    onChange={newProvider}
                                />
                            </Field>
                            <Field
                                label="Identificacion tributaria"
                                required={true}
                                validationState={identificacionTributariaError === '' ? "none" : "error"}
                                validationMessage={identificacionTributariaError}>
                                <Input
                                    type="text"
                                    maxLength={11}
                                    onKeyPress={handleInput}
                                    name="identificacionTributaria"
                                    onChange={newProvider}
                                />
                            </Field>
                            <Field
                                label="Numero telefonico"
                                required={true}
                                validationState={numeroTelefonicoError === '' ? "none" : "error"}
                                validationMessage={numeroTelefonicoError}>
                                <Input
                                    type="text"
                                    name="numeroTelefonico"
                                    onChange={newProvider}
                                />
                            </Field>
                            <Field
                                label="Correo electronico"
                                required={true}
                                validationState={correoElectronicoError === '' ? "none" : "error"}
                                validationMessage={correoElectronicoError}>
                                <Input
                                    type="email"
                                    name="correoElectronico"
                                    onChange={newProvider}
                                />
                            </Field>
                            <Field
                                label="Sitio web"
                                required={true}
                                validationState={sitioWebError === '' ? "none" : "error"}
                                validationMessage={sitioWebError}>
                                <Input
                                    type="text"
                                    name="sitioWeb"
                                    onChange={newProvider}
                                />
                            </Field>
                            <Field
                                label="Direccion fisica"
                                required={true}
                                validationState={direccionFisicaError === '' ? "none" : "error"}
                                validationMessage={direccionFisicaError}>
                                <Input
                                    type="text"
                                    name="direccionFisica"
                                    onChange={newProvider}
                                />
                            </Field>
                            <Field
                                label="Pais"
                                required={true}
                            >
                                <Select
                                    appearance="outline"
                                    name="pais"
                                    defaultValue={""}
                                    onChange={newProvider}
                                >
                                    <option value={""} disabled>Elija el pais... </option>
                                    <option value={"Argentina"}>Argentina</option>
                                    <option value={"Bolivia"}>Bolivia</option>
                                    <option value={"Brasil"}>Brasil</option>
                                    <option value={"Chile"}>Chile</option>
                                    <option value={"Colombia"}>Colombia</option>
                                    <option value={"Ecuador"}>Ecuador</option>
                                    <option value={"Paraguay"}>Paraguay</option>
                                    <option value={"Peru"}>Peru</option>
                                    <option value={"Uruguay"}>Uruguay</option>
                                    <option value={"Venezuela"}>Venezuela</option>
                                </Select>
                                {paisError && <div><ErrorCircle16Filled primaryFill='#bc2f32' className='error-icon' /><Caption1 className='error-message'>&nbsp;{paisError}</Caption1></div>}
                            </Field>
                            <Field
                                label="Facturacion anual"
                                required={true}
                                validationState={facturacionAnualError === '' ? "none" : "error"}
                                validationMessage={facturacionAnualError}>
                                <Input
                                    contentBefore={
                                        <Text size={400}>
                                            $
                                        </Text>
                                    }
                                    name="facturacionAnual"
                                    onChange={newProvider}
                                />
                            </Field>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button appearance="secondary" onClick={handleCancel}>Cancelar</Button>
                        </DialogTrigger>
                        <Button appearance="primary" onClick={handlePostProvider}>Registrar</Button>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    )
}

export default NewProvider;