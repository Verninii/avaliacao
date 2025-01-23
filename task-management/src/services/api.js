import axios from 'axios'

const API_URL = process.env.DATABASE_URL;
axios.get(`${API_URL}/usuarios`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

export default api