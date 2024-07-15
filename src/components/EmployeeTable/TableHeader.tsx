export function TableHeader() {
    return (
        <thead className="employeeTable">
            <tr className="tableHead">
                <th className="tableHeadCell">Foto</th>
                <th className="tableHeadCell">Nome</th>
                <th className="tableCellLast hideOnLargeScreen">●</th>
                <th className="tableHeadCell showOnLargeScreen">Cargo</th>
                <th className="tableHeadCell showOnLargeScreen">Data de Admissão</th>
                <th className="tableHeadCell showOnLargeScreen">Telefone</th>
            </tr>
        </thead>
    );
}
