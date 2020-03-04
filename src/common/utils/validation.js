import * as _ from 'lodash';
import React from 'react';
import { __esModule } from 'react-joyride/lib/constants';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

export const required = (value, allvalues) => {
    if (value) {
        return null;
    }
    return <FormattedMessage id="label.validation.field.required" />;
};

export const noSpecialCharacter = (value) => {
    const specialCharacter = /^[_A-z0-9]*((\s)*[_A-z0-9])*$/g;
    if (value) {
        if (!specialCharacter.test(value)) {
            return <FormattedMessage id="label.validation.incorrect.format" />;
        }
        return null;
    }
};

export const numberRequired = (value) => {
    const numberPattern = /^\d+$/;
    if (value) {
        if (!numberPattern.test(value)) {
            return <FormattedMessage id="label.validation.invalid.format" />;
        }
        return null;
    }
    return <FormattedMessage id="label.validation.field.required" />;
};

export const emailFormat = (value) => {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value) {
        if (!emailPattern.test(value)) {
            return <FormattedMessage id="label.validation.invalid.format.email" />;
        }
        return null;
    }
    return null;
};

export const emailRequired = (value) => {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value) {
        if (!emailPattern.test(value)) {
            return <FormattedMessage id="label.validation.invalid.format.email" />;
        }
        return null;
    }
    return <FormattedMessage id="label.validation.field.required" />;
};

export const retypePassword = (value, allvalues) => {
    if (allvalues.password !== value) {
        return 'Confirmation Password does not match';
    }
    return null;
};

export const passwordExpiryValidation = (passwordExpiry, passwordExpiryNotification) => {
    if (passwordExpiryNotification.passwordExpiryNotification > passwordExpiryNotification.passwordExpiry) {
        return 'Password Expiry Alert must be smaller than Password Expiry';
    }
    return null;
};

export const numberOnly = (value) => {
    const numberPattern = /^[0-9,]+$/;
    if (!numberPattern.test(value)) {
        return <FormattedMessage id="label.validation.invalid.format" />;
    }
};

export const numberNotRequired = (value) => {
    if (value) {
        const numberPattern = /^[0-9]/;
        if (!numberPattern.test(value)) {
            return <FormattedMessage id="label.validation.invalid.format" />;
        }
    }
};

export const nullNumber = (value) => {
    if (value) {
        const zero = parseInt(value, 10);
        if (zero < 1) {
            return <FormattedMessage id="label.validation.invalid.zero.amount" />;
        }
    }
};

export const noZeroNumber = (value) => {
    if (value === '0' || value === 0) {
        return <FormattedMessage id="label.number.cannot.zero" />;
    }
};

export const noZeroNumberMustBeMore = (value) => {
    if (value === '0' || value === 0) {
        return <FormattedMessage id="label.disbursement.cannot.zero" />;
    }
    if (value.length <= 9) {
        return <FormattedMessage id="label.mustbe.greather.than.ten.character" />;
    }
};

export const zeroAmount = (value) => {
    if (value) {
        const val = value.replace(/,/g, '');
        const zero = parseInt(val, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        if (zero < 1) {
            return <FormattedMessage id="label.validation.invalid.zero.amount" />;
        }
    }
};

export const maximumThresholdValidation = (value, allValue) => {
    if (value) {
        const a = value.value ? value.value : value;
        const b = allValue.minimumThreshold.value ? allValue.minimumThreshold.value : allValue.minimumThreshold;
        if (parseInt(b, 10) > parseInt(a, 10)) {
            return 'Maximum Threshold must be greater than Minimum Threshold';
        }
        return null;
    }
};

export const maximumAmountValidation = (value, allValue) => {
    if (value) {
        const a = value.value ? value.value : value;
        const b = allValue.minimumAmount.value ? allValue.minimumAmount.value : allValue.minimumAmount;
        if (parseInt(b, 10) > parseInt(a, 10)) {
            return 'Maximum Amount must be greater than Minimum Amount';
        }
        return null;
    }
};

export const minimumBalanceValidation = (value, allValue) => {
    if (value) {
        const a = value.value ? value.value : value;
        const b = allValue.maximumBalance.value ? allValue.maximumBalance.value : allValue.maximumBalance;
        if (parseInt(b, 10) < parseInt(a, 10)) {
            return 'Minimum Balance cannot be higher than Maximum Balance';
        }
        return null;
    }
};

export const maximumCashValidation = (value, allValue) => {
    if (value) {
        const a = value.value ? value.value : value;
        const b = allValue.minCashCapital.value ? allValue.minCashCapital.value : allValue.minCashCapital;
        if (parseInt(b, 10) > parseInt(a, 10)) {
            return 'Maximum Cash Capital must be greater than Minimum Cash Capital ';
        }
        return null;
    }
};

// minimumSingleDebit
// maximum
export const minimumSingleDebitValidation = (value, allValue) => {
    if (value) {
        const a = value.value ? value.value : value;
        const b = allValue.maximumSingleDebit.value ? allValue.maximumSingleDebit.value : allValue.maximumSingleDebit;
        if (parseInt(b, 10) < parseInt(a, 10)) {
            return 'Minimum Single Debit cannot be higher than Maximum Single Debit';
        }
        return null;
    }
};

export const maximumSingleDebitValidation = (value, allValue) => {
    if (value) {
        const a = value.value ? value.value : value;
        const b = allValue.minimumSingleDebit.value ? allValue.minimumSingleDebit.value : allValue.minimumSingleDebit;
        if (parseInt(b, 10) > parseInt(a, 10)) {
            return 'Maximum Single Debit must be greater than Minimum Single Debit';
        }
        return null;
    }
};

export const minimumSingleCreditValidation = (value, allValue) => {
    if (value) {
        const a = value.value ? value.value : value;
        const b = allValue.maximumSingleCredit.value ? allValue.maximumSingleCredit.value : allValue.maximumSingleCredit;
        if (parseInt(b, 10) < parseInt(a, 10)) {
            return 'Minimum Single Credit cannot be higher than Maximum Credit Debit';
        }
        return null;
    }
};

export const maximumSingleCreditValidation = (value, allValue) => {
    if (value) {
        const a = value.value ? value.value : value;
        const b = allValue.minimumSingleCredit.value ? allValue.minimumSingleCredit.value : allValue.minimumSingleCredit;
        if (parseInt(b, 10) > parseInt(a, 10)) {
            return 'Maximum Single Credit must be greater than Minimum Credit Debit';
        }
        return null;
    }
};

export const oldPassword = (value, allValue) => {
    if (value) {
        if (allValue.oldPassword === allValue.newPassword) {
            return <FormattedMessage id="label.notification.same.password.failed" />;
        }
    }
    return null;
};

export const newPassword = (value, allValue, props) => {
    if (value) {
        const passMin = props.initialValues.parameters.filter(x => (x.paramKey === 'PASSWORD_MIN'));
        const passMax = props.initialValues.parameters.filter(x => (x.paramKey === 'PASSWORD_MAX'));
        const passFormat = props.initialValues.parameters.filter(x => (x.paramKey === 'PASSWORD_FORMAT'));
        if ((passFormat[0]) && passFormat[0].paramValue === 'APLHANUMERIC') {
            if (!/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g.test(value)) {
                return <FormattedMessage id="label.error.data.invalid" values={{ param: passFormat[0].paramValue }} />;
            }
        }
        if (value.length > passMax[0].paramValue) {
            return <FormattedMessage id="label.error.password.max.length" values={{ param: passMax[0].paramValue }} />;
        }
        if (value.length < passMin[0].paramValue) {
            return <FormattedMessage id="label.error.password.min.length" values={{ param: passMin[0].paramValue }} />;
        }
        if (allValue.oldPassword === allValue.newPassword) {
            return <FormattedMessage id="label.notification.same.password.failed" />;
        }
        if (allValue.newPassword && allValue.reEnterPassword) {
            if (allValue.newPassword !== allValue.reEnterPassword) {
                return <FormattedMessage id="label.notification.different.character" />;
            }
        }
    }
    return null;
};

export const reEnterPassword = (value, allValue, props) => {
    if (value) {
        const passMin = props.initialValues.parameters.filter(x => (x.paramKey === 'PASSWORD_MIN'));
        const passMax = props.initialValues.parameters.filter(x => (x.paramKey === 'PASSWORD_MAX'));
        const passFormat = props.initialValues.parameters.filter(x => (x.paramKey === 'PASSWORD_FORMAT'));
        if ((passFormat[0]) && passFormat[0].paramValue === 'APLHANUMERIC') {
            if (!/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g.test(value)) {
                return <FormattedMessage id="label.error.data.invalid" values={{ param: passFormat[0].paramValue }} />;
            }
        }
        if (value.length > passMax[0].paramValue) {
            return <FormattedMessage id="label.error.password.max.length" values={{ param: passMax[0].paramValue }} />;
        }
        if (value.length < passMin[0].paramValue) {
            return <FormattedMessage id="label.error.password.min.length" values={{ param: passMin[0].paramValue }} />;
        }
        if (allValue.reEnterPassword && allValue.newPassword) {
            if (allValue.reEnterPassword !== allValue.newPassword) {
                return <FormattedMessage id="label.notification.different.character" />;
            }
        }
    }
    return null;
};

export const minLengthIdentityCard = (value) => {
    if ((value) && value.length !== 16) {
        return <FormattedMessage id="label.validation.exceeds.digits" />;
    }
};

export const minDateOfBirth = (value) => {
    if (moment(value).diff(moment(), 'years') > -18) {
        return <FormattedMessage id="label.validation.minAge" />;
    }
};