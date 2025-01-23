import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;
axios.get(`${API_URL}/usuarios`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

export default api