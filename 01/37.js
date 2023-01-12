function countAnimals(animals,count) {
    const x = [];
    for (let i = 0; i < count.length; i++) {
        x.push(animals.split(count[i]).length - 1);
    }
    return x;
}