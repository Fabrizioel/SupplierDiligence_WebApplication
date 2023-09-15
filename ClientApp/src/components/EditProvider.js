import React, { useEffect, useState } from 'react';
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
    Select
} from '@fluentui/react-components';
import { updateProvider } from '../utils/Utils';

function EditProvider({ visibility, callback, refresh, refreshListCallback, providerEdit }) {

    const [updateRazonSocial, setUpdateRazonSocial] = useState(providerEdit.razonSocial);
    const [updateNombreComercial, setUpdateNombreComercial] = useState(providerEdit.nombreComercial);
    const [updateIdentificacionTributaria, setUpdateIdentificacionTributaria] = useState(providerEdit.identificacionTributaria);
    const [updateNumeroTelefonico, setUpdateNumeroTelefonico] = useState(providerEdit.numeroTelefonico);
    const [updateCorreoElectronico, setUpdateCorreoElectronico] = useState(providerEdit.correoElectronico);
    const [updateSitioWeb, setUpdateSitioWeb] = useState(providerEdit.sitioWeb);
    const [updateDireccionFisica, setUpdateDireccionFisica] = useState(providerEdit.direccionFisica);
    const [updateFacturacionAnual, setUpdateFacturacionAnual] = useState(providerEdit.facturacionAnual);

    const handleCancel = () => {
        document.getElementById("updatedProviderForm").reset()
        setUpdateRazonSocial('_')
        setUpdateNombreComercial('_')
        setUpdateIdentificacionTributaria('_')
        setUpdateNumeroTelefonico('_')
        setUpdateCorreoElectronico('_')
        setUpdateSitioWeb('_')
        setUpdateDireccionFisica('_')
        setUpdateFacturacionAnual('_')
        callback(!visibility)
    }

    const handleInput = e => (!/[0-9]/.test(e.key)) && e.preventDefault()

    const updatedProvider = (e) => {
        const name_ = e.target.name
        const v_ = e.target.value

        switch (name_) {
            case 'razonSocial':
                setUpdateRazonSocial(e.target.value)
                break
            case 'nombreComercial':
                setUpdateNombreComercial(e.target.value)
                break
            case 'identificacionTributaria':
                setUpdateIdentificacionTributaria(e.target.value)
                break
            case 'numeroTelefonico':
                setUpdateNumeroTelefonico(e.target.value)
                break
            case 'correoElectronico':
                setUpdateCorreoElectronico(e.target.value)
                break
            case 'sitioWeb':
                setUpdateSitioWeb(e.target.value)
                break
            case 'direccionFisica':
                setUpdateDireccionFisica(e.target.value)
                break
            case 'facturacionAnual':
                setUpdateFacturacionAnual(e.target.value)
                break
            default:
                break
        }

        providerEdit[name_] = v_
    }

    useEffect(() => {
        setUpdateRazonSocial(providerEdit.razonSocial);
        setUpdateNombreComercial(providerEdit.nombreComercial);
        setUpdateIdentificacionTributaria(providerEdit.identificacionTributaria);
        setUpdateNumeroTelefonico(providerEdit.numeroTelefonico);
        setUpdateCorreoElectronico(providerEdit.correoElectronico);
        setUpdateSitioWeb(providerEdit.sitioWeb);
        setUpdateDireccionFisica(providerEdit.direccionFisica);
        setUpdateFacturacionAnual(providerEdit.facturacionAnual);
    }, [visibility])

    const handleUpdateProvider = () => {
        updateProvider(providerEdit.id, providerEdit).then(res => {

            if (['_', ''].includes(updateRazonSocial)) setUpdateRazonSocial('')
            if (['_', ''].includes(updateNombreComercial)) setUpdateNombreComercial('')
            if (['_', ''].includes(updateIdentificacionTributaria)) setUpdateIdentificacionTributaria('')
            if (['_', ''].includes(updateNumeroTelefonico)) setUpdateNumeroTelefonico('')
            if (['_', ''].includes(updateCorreoElectronico)) setUpdateCorreoElectronico('')
            if (['_', ''].includes(updateSitioWeb)) setUpdateSitioWeb('')
            if (['_', ''].includes(updateDireccionFisica)) setUpdateDireccionFisica('')
            if (['_', ''].includes(updateFacturacionAnual)) setUpdateFacturacionAnual('')

            if (res.status === 200) {
                refreshListCallback(!refresh);
                callback(!visibility)
            }

        }).catch(e => console.log(e))
    }

    return (
        <Dialog open={visibility}>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>Editar proveedor</DialogTitle>
                    <DialogContent>
                        <form id="updatedProviderForm">
                            <Field
                                label="Razon social"
                                required={true}
                                validationState={updateRazonSocial !== '' ? "none" : "error"}
                                validationMessage={updateRazonSocial !== '' ? "" : "Razon social requerida"}>
                                <Input
                                    type="text"
                                    name="razonSocial"
                                    defaultValue={providerEdit.razonSocial}
                                    onChange={updatedProvider}
                                />
                            </Field>
                            <Field
                                label="Nombre comercial"
                                required={true}
                                validationState={updateNombreComercial !== '' ? "none" : "error"}
                                validationMessage={updateNombreComercial !== '' ? "" : "Nombre comercial requerido"}>
                                <Input
                                    type="text"
                                    name="nombreComercial"
                                    defaultValue={providerEdit.nombreComercial}
                                    onChange={updatedProvider}
                                />
                            </Field>
                            <Field
                                label="Identificacion tributaria"
                                required={true}
                                validationState={updateIdentificacionTributaria !== '' ? "none" : "error"}
                                validationMessage={updateIdentificacionTributaria !== '' ? "" : "Identificacion tributaria requerida"}>
                                <Input
                                    type="text"
                                    maxLength={11}
                                    onKeyPress={handleInput}
                                    name="identificacionTributaria"
                                    defaultValue={providerEdit.identificacionTributaria}
                                    onChange={updatedProvider}
                                />
                            </Field>
                            <Field
                                label="Numero telefonico"
                                required={true}
                                validationState={updateNumeroTelefonico !== '' ? "none" : "error"}
                                validationMessage={updateNumeroTelefonico !== '' ? "" : "Numero telefonico requerido"}>
                                <Input
                                    type="text"
                                    name="numeroTelefonico"
                                    defaultValue={providerEdit.numeroTelefonico}
                                    onChange={updatedProvider}
                                />
                            </Field>
                            <Field
                                label="Correo electronico"
                                required={true}
                                validationState={updateCorreoElectronico !== '' ? "none" : "error"}
                                validationMessage={updateCorreoElectronico !== '' ? "" : "Correo electronico requerido"}>
                                <Input
                                    type="email"
                                    name="correoElectronico"
                                    defaultValue={providerEdit.correoElectronico}
                                    onChange={updatedProvider}
                                />
                            </Field>
                            <Field
                                label="Sitio web"
                                required={true}
                                validationState={updateSitioWeb !== '' ? "none" : "error"}
                                validationMessage={updateSitioWeb !== '' ? "" : "Sitio web requerido"}>
                                <Input
                                    type="text"
                                    name="sitioWeb"
                                    defaultValue={providerEdit.sitioWeb}
                                    onChange={updatedProvider}
                                />
                            </Field>
                            <Field
                                label="Direccion fisica"
                                required={true}
                                validationState={updateDireccionFisica !== '' ? "none" : "error"}
                                validationMessage={updateDireccionFisica !== '' ? "" : "Direccion fisica requerida"}>
                                <Input
                                    type="text"
                                    name="direccionFisica"
                                    defaultValue={providerEdit.direccionFisica}
                                    onChange={updatedProvider}
                                />
                            </Field>
                            <Field
                                label="Pais"
                                validationState="none"
                                validationMessage={""}>
                                <Select
                                    appearance="outline"
                                    name="pais"
                                    onChange={updatedProvider}
                                    defaultValue={providerEdit.pais}
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
                            </Field>
                            <Field
                                label="Facturacion anual"
                                required={true}
                                validationState={updateFacturacionAnual !== '' ? "none" : "error"}
                                validationMessage={updateFacturacionAnual !== '' ? "" : "Direccion fisica requerida"}>
                                <Input
                                    contentBefore={
                                        <Text size={400}>
                                            $
                                        </Text>
                                    }
                                    name="facturacionAnual"
                                    defaultValue={providerEdit.facturacionAnual}
                                    onChange={updatedProvider}
                                />
                            </Field>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button appearance="secondary" onClick={handleCancel}>Cancelar</Button>
                        </DialogTrigger>
                        <Button appearance="primary" onClick={handleUpdateProvider}>Actualizar</Button>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    )
}

export default EditProvider;