/**
 * check valid array
 * @param {any[]} array
 * @return {boolean} 유효한 경우 true
 */
export const isValidArray = (array: any[]) => {
    if (!array || array.length === 0) return false;
    return true;
};
