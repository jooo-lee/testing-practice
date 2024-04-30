/**
 * Takes a string and returns it with the first character capitalized.
 */
const capitalize = (string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
};

export default capitalize;
