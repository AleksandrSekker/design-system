import React from "react";

export const TableCell = ({title}: { title: string }) => (
    <td className="px-6 py-4 whitespace-nowrap border-l border-b border-gray-300">{title}</td>
);
