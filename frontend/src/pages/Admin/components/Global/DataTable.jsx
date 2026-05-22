import React from 'react'

const DataTable = ({ columns, data, onEdit, onDelete }) => {
    return (
        <div>
            <table className="categories-table">
                <thead>
                    <tr>
                        {columns?.map((col) => (
                            <th key={col?.key}>{col?.label}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.filter(Boolean).map(i => (
                        <tr key={i?._id}>
                            {columns?.map((col) => 
                                col.key === "image" ? (
                                    <td key={col?.key || col?.label}>
                                        <img src={`http://localhost:3001/upload/${i?.[col?.key]}`} alt={i?.name} style={{width:"20%"}} className="product-image" />
                                    </td>
                                ) : (
                                <td key={col?.key || col?.label}>
                                    {col?.render
                                        ? col.render(i)
                                        : i?.[col?.key] ?? '-'}
                                </td>
                            ))}
                            <td className="actions-cell">
                                <button className="btn-secondary" onClick={() => onEdit?.(i)}>Edit</button>
                                <button className="btn-danger" onClick={() => onDelete?.(i?._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable