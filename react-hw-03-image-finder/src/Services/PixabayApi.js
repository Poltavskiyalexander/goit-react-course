import axios from 'axios';
const API_KEY = '19126431-639b2ba18eb4caa5d22b03767';

const getPicture = (serchQwery, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${serchQwery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};
export default {
  getPicture,
};
