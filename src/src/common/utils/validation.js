import I18n, { Loc } from 'ati-react-native-redux-i18n';
import * as _ from 'lodash';
import Moment from 'moment';

export const required = (value) => {
    if (value) {
        return null;
    }
    return I18n.t('errorMessage.required');
};


export const numberRequired = (value) => {
    const numberPattern = /^\d+$/;
    if (value) {
        if (!numberPattern.test(value)) {
            return I18n.t('errorMessage.invalidFormat');
        }
        return null;
    }
    return I18n.t('errorMessage.required');
};

export const invalidForwardDate = (value) => {
    if (value) {
        if (value < Moment().format('YYYY-MM-DD') || value === Moment().format('YYYY-MM-DD')) {
            return I18n.t('errorMessage.invalidForwardDate');
        }
        return null;
    }
};