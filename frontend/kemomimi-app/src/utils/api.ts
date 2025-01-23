export interface PublicItem {
  public_item_id: string;
  name: string;
  category: {
    category_id: string;
    name: string;
    remarks?: string;
  };
  cost: number;
  approval_date: string;
  expiration_date: string;
  is_remaining: boolean;
  main_user?: {
    user_id: string;
    handle_name: string;
  };
  remarks?: string;
}

interface FetchPublicItemsParams {
  search?: string;
}

export const fetchPublicItems = async (params?: FetchPublicItemsParams): Promise<PublicItem[]> => {
  const query = new URLSearchParams(params as any).toString();
  const response = await fetch(`/api/public-items-api?${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch public items');
  }

  return response.json();
};
