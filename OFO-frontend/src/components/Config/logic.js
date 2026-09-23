

export const isPresentInFavorites = (favorites,restaurant) => {
    for(let item of Array.isArray(favorites) ? favorites : []){
        if(restaurant?.id === item.id){
            return true
        }
    }
    return false;
}