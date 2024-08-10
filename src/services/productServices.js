export async function getProductList(searchTerm) {
  const response = await fetch(`${import.meta.env.VITE_API_KEY}/444/products?name_like=${searchTerm || ""}`);
  if(!response.ok){
    throw {message: response.statusText, status: response.status}
  }
  const data = await response.json();
  return data;
}
export async function getProduct(id) {
  const response = await fetch(`${import.meta.env.VITE_API_KEY}/444/products/${id}`);
    if(!response.ok){
      throw {message: response.statusText, status: response.status}
     }
  const data = await response.json();
  return data;
}

export async function getFeaturedList() {
  const response = await fetch(`${import.meta.env.VITE_API_KEY}/444/featured_products`);
  if(!response.ok){
    throw {message: response.statusText, status: response.status}
  }
  const data = await response.json();
  return data;
}
