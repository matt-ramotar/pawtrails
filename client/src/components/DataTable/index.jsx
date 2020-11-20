import React from 'react';

export default function DataTable({ data }) {
  //const columns = data[0] && Object.keys(data[0]);
  const columns = ['name', 'overview', 'length', 'elevationGain', 'routeType', 'difficulty'];

  return (
    <table cellPadding={1} cellSpacing={1}>
      <thead>
        <tr>
          {data[0] && columns.map(heading => <th>{heading}</th>)}
          <th>City</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr>
            {columns.map(column => (
              <td>{row[column]}</td>
            ))}
            <td>{row['City'].name}</td>
            <td>
              {row['Tags'].map(tag => (
                <code>{tag.tag}</code>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
