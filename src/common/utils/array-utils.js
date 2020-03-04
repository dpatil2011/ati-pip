export const inArray = (array, comparer) => { 
    for (let i = 0; i < array.length; i += 1) {
        if (comparer(array[i])) return true;
    }
    return false;
};

export const pushIfNotExist = (array, element, comparer) => {
    if (!inArray(array, comparer)) {
        array.push(element);
    }
};