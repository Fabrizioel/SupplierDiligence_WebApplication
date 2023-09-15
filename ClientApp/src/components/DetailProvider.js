import React from 'react';
import {
    Dialog,
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogBody,
    DialogActions,
    DialogContent,
    Button,
    Text,
    Body1Stronger,
    Link,
    Divider
} from '@fluentui/react-components';
import './NavMenu.css'

function DetailProvider({ visibility, callback, provider }) {
    const handleVisibility = () => {
        callback(!visibility)
    }
    return (
        <Dialog open={visibility}>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>Detalles del proveedor</DialogTitle>
                    <DialogContent>
                        <div className="detail-container">
                            <div className='detail-content'>
                                <Body1Stronger>Razon social:</Body1Stronger>
                                <Text>{provider.razonSocial}</Text>
                            </div>
                            <Divider></Divider>
                            <div className='detail-content'>
                                <Body1Stronger>Nombre comercial:</Body1Stronger>
                                <Text>{provider.nombreComercial}</Text>
                            </div>
                            <Divider></Divider>
                            <div className='detail-content'>
                                <Body1Stronger>Identificacion tributaria:</Body1Stronger>
                                <Text>{provider.identificacionTributaria}</Text>
                            </div>
                            <Divider></Divider>
                            <div className='detail-content'>
                                <Body1Stronger>Numero telefonico:</Body1Stronger>
                                <Text>{provider.numeroTelefonico}</Text>
                            </div>
                            <Divider></Divider>
                            <div className='detail-content'>
                                <Body1Stronger>Correo electronico:</Body1Stronger>
                                <Text>{provider.correoElectronico}</Text>
                            </div>
                            <Divider></Divider>
                            <div className='detail-content'>
                                <Body1Stronger>Sitio web:</Body1Stronger>
                                <Link href={`//${provider.sitioWeb}`}>{provider.sitioWeb}</Link>
                            </div>
                            <Divider></Divider>
                            <div className='detail-content'>
                                <Body1Stronger>Direccion fisica:</Body1Stronger>
                                <Text>{provider.direccionFisica}</Text>
                            </div>
                            <Divider></Divider>
                            <div className='detail-content'>
                                <Body1Stronger>Pais:</Body1Stronger>
                                <Text>{provider.pais}</Text>
                            </div>
                            <Divider></Divider>
                            <div className='detail-content'>
                                <Body1Stronger>Facturacion anual:</Body1Stronger>
                                <Text>$ {provider.facturacionAnual}</Text>
                            </div>
                            <Divider></Divider>
                            <div className='detail-content'>
                                <Body1Stronger>Fecha de edicion:</Body1Stronger>
                                <Text>{provider.fechaEdicion}</Text>
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button appearance="secondary" onClick={handleVisibility}>Cancelar</Button>
                        </DialogTrigger>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    )
}

export default DetailProvider;
