import * as v from 'voca';
import moment from 'moment';
import 'moment/locale/id';

export const getBase64 = (file, cb) => {
    const reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result);
    };
    reader.onerror = function (error) {
    };
}

export const fileToBase64 = (file) => {
    const reader = new window.FileReader();

    return new Promise((resolve, reject) => {
        reader.readAsDataURL(file);
        reader.onerror = () => {
            reader.abort();
            reject(new window.DOMException('Problem parsing input file.'));
        };
  
        reader.onload = () => {
            resolve(reader.result);
        };
        // temporaryFileReader.readAsText(inputFile);
    });
  };

export const get = (file, cb) => {
    const reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
    };
};

export const numberFormat = (x) => {
    if (!v.isEmpty(x)) {
        const val = x.replace(/,/g, '');
        if (val > 0) {
            return parseInt(val, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return x;
};

export const removeCharacterCommas = (val) => {
    if (!v.isEmpty(val)) {
        return val.replace(/,/g, '');
    }
    return val;
};

export const removeCharacterWithParam = (val, param) => {
    if (!v.isEmpty(val)) {
        val.toString().trim();
        return val.replace(param, '');
    }
    return val;
};

export const removeCharacter = (val, char) => {
    if (!v.isEmpty(val)) {
        return val.split(char)[0];
    }
    return val;
};

export const numFormatNoPrecision = (x) => {
    if (!v.isEmpty(x)) {
        const data = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return data.split('.')[0];
    }
    return x;
};

export const calculateRemainingTime = (dateFrom, dateTo) => {
    const date1 = moment(dateFrom);
    const date2 = moment(dateTo);
    const duration = moment.duration(date2.diff(date1));
    return duration.asMinutes();
};