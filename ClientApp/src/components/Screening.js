import React, { useState } from 'react';
import {
    Dialog,
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogBody,
    DialogActions,
    DialogContent,
    Button,
    Table,
    TableHeader,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Select,
    Field,
    makeStyles,
    Body1Stronger
} from '@fluentui/react-components';
import { getHighRiskEntities } from '../utils/Utils';
import './NavMenu.css';

const useOverrides = makeStyles({
    dialog: { maxHeight: '80vh' },
    dialogBody: { maxHeight: '60vh' }
});

function Screening({ visibility, callback, name }) {

    const overrides = useOverrides();

    const [sourceSelected, setSourceSelected] = useState(false);
    const [entities, setEntities] = useState([]);
    const [totalHits, setTotalHits] = useState(0);
    const [loading, setLoading] = useState(true);

    const handleVisibility = () => {
        setSourceSelected(false)
        setEntities([])
        setTotalHits(0)
        setLoading(true)
        callback(!visibility);
    }

    const getHighRiskEntitiesList = () => {

        setSourceSelected(true)

        getHighRiskEntities(name).then(data => {
            setEntities(data.highRiskEntities);
            setTotalHits(data.totalHits);
            console.log(entities)
            console.log(totalHits)
            setLoading(false);
        }).catch(e => console.log(e))
    }

    const renderHighRiskEntitiesTable = (entities) => (
        <Table size="extra-small" aria-label="Default table">
            <TableHeader>
                <TableRow>
                    <TableHeaderCell><Body1Stronger>Entidad</Body1Stronger></TableHeaderCell>
                    <TableHeaderCell><Body1Stronger>Jurisdiccion</Body1Stronger></TableHeaderCell>
                    <TableHeaderCell><Body1Stronger>Asociado a</Body1Stronger></TableHeaderCell>
                    <TableHeaderCell><Body1Stronger>Data de</Body1Stronger></TableHeaderCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {entities.map(entity => (
                    <TableRow key={entity.id}>
                        <TableCell>{entity.entity}</TableCell>
                        <TableCell>{entity.jurisdiction}</TableCell>
                        <TableCell>{entity.linkedTo}</TableCell>
                        <TableCell>{entity.dataFrom}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );

    return (
        <Dialog
            open={visibility}
            className={overrides.dialog}
        >
            <DialogSurface
                className={overrides.dialog}>
                <DialogBody
                    className={overrides.dialogBody}>
                    <DialogTitle>Cruce con datos</DialogTitle>
                    {
                        !sourceSelected ?
                            <DialogContent>
                                <Field
                                    label="Elegir fuente"
                                    validationState="none"
                                    validationMessage={""}
                                >
                                    <Select
                                        appearance="outline"
                                        name="database"
                                        defaultValue={"None"}
                                        onChange={() => getHighRiskEntitiesList()}
                                    >
                                        <option value={"None"} disabled>Elige una fuente...</option>
                                        <option value={"Offshore Leaks Database"}>Offshore Leaks Database</option>
                                    </Select>
                                </Field>
                            </DialogContent>
                            :
                            <DialogContent>
                                {
                                    loading ?
                                        <p><em> Cargando...</em></p>
                                        :
                                        (totalHits > 0) ?
                                            renderHighRiskEntitiesTable(entities)
                                            :
                                            <p><em> No existen coincidencias.</em></p>
                                }
                            </DialogContent>
                    }
                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button appearance="secondary" onClick={handleVisibility}>Cerrar</Button>
                        </DialogTrigger>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    )
}

export default Screening;