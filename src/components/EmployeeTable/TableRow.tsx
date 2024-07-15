import { useState } from 'react';
import chevronDown from '../../assets/chevronDown.svg';
import chevronUp from '../../assets/chevronUp.svg';
import { Employee } from '../../types/Employee';
import { formatDate } from '../../helpers/formatDate';
import { formatPhoneNumber } from '../../helpers/formatPhoneNUmber';

interface TableRowProps {
  employee: Employee;
}

export function TableRow({ employee }: TableRowProps) {
  const { image, name, job, admission_date, phone } = employee;
  const [expanded, setExpanded] = useState(false);

  const toggleDetails = () => {
    setExpanded(!expanded);
  };

  const formatedDate = formatDate(admission_date);
  const formatedPhone = formatPhoneNumber(phone);

  return (
    <>
      <tr className="TableRow">
        <td className="avatarColumn">
          <img src={image} alt={`${name} avatar`} className="avatarImage" />
        </td>
        <td className="nameColumn">{name}</td>
        <td className="jobColumn hidden ">{job}</td>
        <td className="dateColumn hidden ">{formatedDate}</td>
        <td className="phoneColumn hidden ">{formatedPhone}</td>
        <td className="toggleColumn lg:hidden" onClick={toggleDetails}>
          <img src={expanded ? chevronUp : chevronDown} alt="" />
        </td>
      </tr>
      {expanded && (
        <section className='expandedDetails'>
          <td className='detailsCell'><strong>Cargo:</strong> {job}</td>
          <td className='detailsCell'><strong>Data de admissão:</strong> {formatedDate}</td>
          <td className='detailsCell'><strong>Telefone:</strong> {formatedPhone}</td>
        </section>
      )}
    </>
  );
}

