/**
* @author muhamad.zaky
* This file is to maintain currency format function
*/

// function for money currency format
export const idnCurrency = (value) => {
    let sbtr = value.length;
    let val = value.substring(0, sbtr - 3);
    let reverse = val.toString().split('').reverse().join('');
    let idr = reverse.match(/\d{1,3}/g);
    idr = idr.join('.').split('').reverse().join('');
    return idr.concat(',00');
}