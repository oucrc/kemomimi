import React from 'react';
import { PublicItem } from '../../../utils/api';
import ItemRow from './ItemRow';

interface ItemTableProps {
  items: PublicItem[];
}

const ItemTable: React.FC<ItemTableProps> = ({ items }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200 rounded shadow-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-3 text-center text-gray-700">Name</th>
          <th className="px-4 py-3 text-center text-gray-700">Categry</th>
          <th className="px-4 py-3 text-center text-gray-700">Cost</th>
          <th className="px-4 py-3 text-center text-gray-700">Approval Date</th>
          <th className="px-4 py-3 text-center text-gray-700">Expiration Date</th>
          <th className="px-4 py-3 text-center text-gray-700">Main User</th>
          <th className="px-4 py-3 text-center text-gray-700">Remarks</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <ItemRow key={item.public_item_id} item={item} />
        ))}
      </tbody>
    </table>
  </div>
);

export default ItemTable;
