import React from "react";

export const TableHead = ({title}: { title: string }) => (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300 min-w-0">{title}</th>
);
