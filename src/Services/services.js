export const generateNewID = (array) => {
    let arrayInstance = [...array];
    arrayInstance.sort(function (a, b) {
        return a.id - b.id;
    })

    var lastId = array.length === 0 ? undefined : parseInt(arrayInstance.at(-1).id);
    var newId = lastId === undefined ? 0 : lastId + 1;
    return newId;
}