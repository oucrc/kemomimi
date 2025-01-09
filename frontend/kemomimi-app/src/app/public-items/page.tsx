"use client";

import React, { useEffect, useState } from 'react';
import { fetchPublicItems, PublicItem } from '../../utils/api';
import ItemTable from './components/ItemList';

const PublicItemsPage: React.FC = () => {
  const [items, setItems] = useState<PublicItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await fetchPublicItems();
        setItems(data);
      } catch (err) {
        setError('Failed to fetch items');
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, []);

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error) return <div className="text-center mt-4 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Public Items</h1>
      <ItemTable items={items} />
    </div>
  );
};

export default PublicItemsPage;
