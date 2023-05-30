/*export function filterData(searchText, restaurants) {
    const filterDatass = restaurants.filter((restaurant) =>
       restaurant.data.name?.toLowerCase()?.includes(searchText.toLowerCase())
     );
   
     return filterDatass;
   }*/

  
   export const filterData = (searchText, restaurants) => {
    return restaurants.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
  }