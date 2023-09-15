import React, { useState, useEffect } from 'react';
import {
    TableBody,
    TableCell,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
    TableCellLayout,
    Button,
    Link,
    Text,
    Caption1Stronger
} from '@fluentui/react-components';
import {
    EditRegular,
    EyeRegular,
    DeleteRegular,
    DatabaseSearchRegular,
    AddRegular,
    Earth20Regular
} from '@fluentui/react-icons';
import './NavMenu.css';
import DeleteProvider from './DeleteProvider';
import NewProvider from './NewProvider';
import DetailProvider from './DetailProvider';
import Screening from './Screening';
import { getListProviders, providerTemplate } from '../utils/Utils';
import EditProvider from './EditProvider';

function ListProviders() {
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(true);

    const [addModal, setAddModal] = useState(false);
    const [detailModal, setDetailModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [screeningModal, setScreeningModal] = useState(false);

    const [refreshList, setRefreshList] = useState(false);

    const [provider, setProvider] = useState(providerTemplate);

    const [deleteId, setDeleteId] = useState(0);

    const [providerEdit, setProviderEdit] = useState({});
    /*
    const assignProviderToEdit = (providerToEdit) => {
        Object.assign(providerTemplate, providerToEdit)
    }
    */

    const resetProviderTemplate = () => {
        delete providerTemplate.fechaCreacion
        delete providerTemplate.fechaEdicion
        delete providerTemplate.id

        for (const key in providerTemplate) {
            providerTemplate[key] = "";
        }
    };

    useEffect(() => {
        getListProviders().then(data => {
            setProviders(data)
            setLoading(false)
        }).catch(e => console.log(e))
    }, [refreshList]);

    const renderProvidersTable = (providers) => (
        <Table size="extra-small" aria-label="Default table">
            <TableHeader>
                <TableRow>
                    <TableHeaderCell><Caption1Stronger>Razon social</Caption1Stronger></TableHeaderCell>
                    <TableHeaderCell><Caption1Stronger>Nombre comercial</Caption1Stronger></TableHeaderCell>
                    <TableHeaderCell><Caption1Stronger>Identificacion tributaria</Caption1Stronger></TableHeaderCell>
                    <TableHeaderCell><Caption1Stronger>Numero telefonico</Caption1Stronger></TableHeaderCell>
                    <TableHeaderCell><Caption1Stronger>Correo electronico</Caption1Stronger></TableHeaderCell>
                    <TableHeaderCell><Caption1Stronger>Sitio web</Caption1Stronger></TableHeaderCell>
                    <TableHeaderCell><Caption1Stronger>Direccion fisica</Caption1Stronger></TableHeaderCell>
                    <TableHeaderCell><Caption1Stronger>Pais</Caption1Stronger></TableHeaderCell>
                    <TableHeaderCell><Caption1Stronger>Facturacion anual</Caption1Stronger></TableHeaderCell>
                    <TableHeaderCell><Caption1Stronger>Fecha de ultima edicion</Caption1Stronger></TableHeaderCell>
                    <TableHeaderCell><Caption1Stronger>Acciones</Caption1Stronger></TableHeaderCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {providers.map(provider => (
                    <TableRow key={provider.id}>
                        <TableCell>{provider.razonSocial}</TableCell>
                        <TableCell>{provider.nombreComercial}</TableCell>
                        <TableCell>{provider.identificacionTributaria}</TableCell>
                        <TableCell>{provider.numeroTelefonico}</TableCell>
                        <TableCell>{provider.correoElectronico}</TableCell>
                        <TableCell><Link href={`//${provider.sitioWeb}`}><Earth20Regular /></Link></TableCell>
                        <TableCell>{provider.direccionFisica}</TableCell>
                        <TableCell>{provider.pais}</TableCell>
                        <TableCell>$ {provider.facturacionAnual}</TableCell>
                        <TableCell>
                            <div className="date-time">
                                <Text>{provider.fechaEdicion.split("T")[0]}</Text>
                                <Text>{provider.fechaEdicion.split("T")[1].slice(0, 8)}</Text>
                            </div>
                        </TableCell>
                        <TableCell>
                            <TableCellLayout>
                                <Button icon={<EyeRegular />} onClick={() => { setDetailModal(true); setProvider(provider) }}></Button>
                                <Button icon={<EditRegular />} onClick={() => { setEditModal(true); setProviderEdit(provider) }}></Button>
                                <Button icon={<DeleteRegular />} onClick={() => { setDeleteModal(true); setDeleteId(provider.id) }}></Button>
                                <Button icon={<DatabaseSearchRegular />} onClick={() => { setScreeningModal(true); setProvider(provider) }}></Button>
                            </TableCellLayout>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );

    return (
        <div>
            <div className="table-header-actions">
                <h1 id="tableLabel">Proveedores</h1>
                <Button appearance="primary" icon={<AddRegular />} onClick={() => { setAddModal(true); resetProviderTemplate() }}>Agregar proveedor</Button>
            </div>
            {
                loading ?
                    <p><em>Cargando...</em></p>
                    :
                    (providers.length > 0) ?
                        renderProvidersTable(providers)
                        :
                        <p><em>No hay proveedores registrados.</em></p>
            }
            <NewProvider
                visibility={addModal}
                callback={setAddModal}
                refresh={refreshList}
                refreshListCallback={setRefreshList}
            />
            <DeleteProvider
                visibility={deleteModal}
                callback={setDeleteModal}
                refresh={refreshList}
                refreshListCallback={setRefreshList}
                id={deleteId}
            />
            <DetailProvider
                visibility={detailModal}
                callback={setDetailModal}
                provider={provider}
            />
            <Screening
                visibility={screeningModal}
                callback={setScreeningModal}
                name={provider.razonSocial}
            />
            <EditProvider
                visibility={editModal}
                callback={setEditModal}
                refresh={refreshList}
                refreshListCallback={setRefreshList}
                providerEdit={providerEdit}
            />
        </div>
    );
}

export default ListProviders;