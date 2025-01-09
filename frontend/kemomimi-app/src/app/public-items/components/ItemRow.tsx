import React from 'react';
import { PublicItem } from '../../../utils/api';

interface ItemRowProps {
  item: PublicItem;
}

const ItemRow: React.FC<ItemRowProps> = ({ item }) => (
  <tr className="hover:bg-gray-100">
    <td className="px-4 py-3 text-center">{item.name}</td>
    <td className="px-4 py-3 text-center">{item.category.name}</td>
    <td className="px-4 py-3 text-center">￥{item.cost.toLocaleString()}</td>
    <td className="px-4 py-3 text-center">{item.approval_date}</td>
    <td className="px-4 py-3 text-center">{item.expiration_date}</td>
    <td className="px-4 py-3 text-center">{item.main_user?.handle_name || 'N/A'}</td>
    <td className="px-4 py-3 text-center">{item.remarks}</td>
  </tr>
);

export default ItemRow;
