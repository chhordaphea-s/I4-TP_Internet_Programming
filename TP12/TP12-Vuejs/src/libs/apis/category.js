
var categoryApi = {
    async getCategoryItem() {
        const res = await fetch('http://localhost:3001/category/all',{
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json',
                Origin: 'http://localhost:8080'
            }
        })
        const result = await res.json();
        return result['data']
    },async create({ name, description, image_url }) {
        const res = await fetch("http://localhost:3001/category/create", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ name, description, image_url }),
        });
    
        const result = await res.json();
        return result;
      }
}

export default categoryApi