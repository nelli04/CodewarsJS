function cakes(recipe, available) {
    let x = []
    for (let key in recipe) {
        if (recipe.hasOwnProperty(key)) {
            if (key in available) {
                x.push(Max.floor(available[key] / recipe[key]))
            } else {
                return 0;
            }
        }
    }
    return Math.min.apply(null, x);
}