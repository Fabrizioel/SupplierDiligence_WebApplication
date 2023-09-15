import React from 'react';
import {
    Dialog,
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogBody,
    DialogActions,
    DialogContent,
    Button
} from '@fluentui/react-components';
import { deleteProvider } from '../utils/Utils';

function DeleteProvider({ visibility, callback, refresh, refreshListCallback, id }) {

    const handleDeleteProvider = () => {
        deleteProvider(id).then(res => {
            refreshListCallback(!refresh)
            callback(!visibility)
        }).catch(e => console.log(e))
    }

    const handleVisibility = () => {
        callback(!visibility)
    }
    return (
        <Dialog open={visibility}>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>Eliminar proveedor</DialogTitle>
                    <DialogContent>¿Desea eliminar este proveedor?</DialogContent>
                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button appearance="secondary" onClick={handleVisibility}>Cancelar</Button>
                        </DialogTrigger>
                        <Button appearance="primary" onClick={handleDeleteProvider}>Aceptar</Button>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    )
}

export default DeleteProvider;

