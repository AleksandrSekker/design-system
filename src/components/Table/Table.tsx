import {motion} from 'framer-motion';
import React from 'react';
import {TableHead} from "./components/TableHead";
import {TableCell} from "./components/TableCell";

interface TableProps {
    headers: string[];
    data: Array<{ [key: string]: string | number | string[] }>;
}

const Table = ({ headers, data }: TableProps) => (
    <table className="divide-y divide-gray-200 max-w-screen-xl table-auto border-collapse">
        <thead className="bg-gray-50">
        <tr>
            {headers.map((header, index) => (
                <TableHead key={index} title={header} />
            ))}
        </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, rowIndex) => (
            <motion.tr
                key={rowIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
            >
                {headers.map((header, index) => (
                    <TableCell key={index} title={row[header].toString()} />
                ))}
            </motion.tr>
        ))}
        </tbody>
    </table>
);

export default Table;
