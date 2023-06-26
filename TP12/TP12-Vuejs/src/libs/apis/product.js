import category from "./category";

var product = {
  async create({ title, category, item, imageUrl, desc,price }) {
    const res = await fetch("http://localhost:3001/product/create", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, category, item, imageUrl, desc,price  }),
    });

    const result = await res.json();
    return result;
  },
  async all() {
    const res = await fetch("http://localhost:3001/product/all", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Origin: "http://localhost:3000",
      },
    });

    const result = await res.json();
    // if (!result?.length) return [];

    return result['data'];
  },
  
  async productByCatAndItem(category, item) {
    const res = await fetch(`http://localhost:3001/product/all/${category}/${item}`, {

      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Origin: "http://localhost:3000",
      },
    });

    const result = await res.json();
    // if (!result?.length) return [];

    return result['data'];
  }
}

export default product