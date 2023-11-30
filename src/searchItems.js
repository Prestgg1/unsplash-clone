
import axios from 'axios';

async function searchItems(term) {
    console.log(term);
    debugger;
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID i07s_8yC8N16DQyae6AGCZDI9-YCp_JQWqJPKQZbOt0',
      },
      params:{
        query:term,
      },
    });
    debugger;
    return response.data.results;
}

export default searchItems;