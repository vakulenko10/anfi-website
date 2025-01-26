const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export interface Product {
    id:  number;
    name: string;
    description: string;
    price: number;
    color: string, 
    images: string[],
    material: string, 
    status: string

    // Add other product fields based on your API response
  }
export interface FormData extends Partial<Product> {
    // Optional: you can add additional fields specific to FormData if needed
  }
  export const fetchProducts = async (): Promise<Product[] | undefined> => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
  
      const data: Product[] = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  
  export const updateProduct = async (
    editingProductId: string | null,
    token: string,
    formData: FormData
  ): Promise<Product | undefined> => {
    const url = editingProductId
      ? `${API_BASE_URL}/products/${editingProductId}`
      : `${API_BASE_URL}/products`;
    const method = editingProductId ? 'PUT' : 'POST';
    
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
  
      const data: Product = await response.json();
      return data;
    } catch (error) {
      console.error('Error saving product:', error);
    }
  }
  
  export const fetchProductById = async (id: string): Promise<Product | undefined> => {
    try {
      const response = await fetch(`${API_BASE_URL}/products?id=${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
  
      const data: Product = await response.json();
      console.log(data);  // Log the response to verify its structure
      return data;
    } catch (error) {
      console.error('Error fetching product by ID:', error);
    }
  };
  
  export const deleteProductById = async (id: string, token: string): Promise<Product | undefined> => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
  
      const data: Product = await response.json();
      console.log(data);  // Log the response to verify its structure
      return data;
    } catch (error) {
      console.error('Error deleting product by ID:', error);
    }
  }
  