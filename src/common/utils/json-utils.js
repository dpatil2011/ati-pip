export const valueToString = (json) => {
    const oldJSON = JSON.stringify(json);
    const newJSON = JSON.parse(oldJSON, (key, val) => (
        typeof val !== 'object' && val !== null ? String(val) : val
    ));
    return newJSON;
};