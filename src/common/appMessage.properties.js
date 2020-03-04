/**
import { message } from 'antd';
 * @edited by ahmad.fahryan
 * @since 01 February 2019
 * @param prefix error code each menu
 * @param suffix error code from service
 * @param message customize error message by own self
* */
const messages = {
    1000: {
        0: { message: 'label.error.not.mapped' },
        9991: { message: 'label.error.msg.internal.server.error' },
        9999: { message: 'label.error.msg.internal.server.error' },
    },
    LOGIN: {
        '00': { message: 'label.success.msg.success' },
        '01': { message: 'label.error.msg.error' },
    },
    FORGOT_PASSWORD: {
        '00': { message: 'label.success.msg.otp' },
        'AUS-001': { message: 'label.error.msg.reenter.password.not.valid' },
        'AUS-103': { message: 'label.error.msg.otp.not.valid' },
        'AUS-107': { message: 'label.error.msg.phonenumber.not.valid' },
        'AUS-110': { message: 'label.error.msg.otp.expired' },
        'AUS-114': { message: 'label.error.msg.password.not.valid' },
        'GEN-398': { message: 'label.error.msg.otp.must.be.number' },
        'AUS-116': { message: 'label.error.msg.otp.must.be.number' },
        'AUS-139': { message: 'label.error.msg.invalid.current.password' },
    },
    DASHBOARD: {
        9990: { message: 'label.error.msg.dasboard.backend.problem' },
    },
    CHANGE_PIN: {
        1000: { message: 'label.notification.change.pin.success' },
        '00': { message: 'label.success.msg.otp' },
        'AUS-001': { message: 'label.error.msg.reenter.password.not.valid' },
        'AUS-103': { message: 'label.error.msg.otp.not.valid' },
        'AUS-107': { message: 'label.error.msg.phonenumber.not.valid' },
        'AUS-110': { message: 'label.error.msg.otp.expired' },
        'AUS-114': { message: 'label.error.msg.password.not.valid' },
        'GEN-398': { message: 'label.error.msg.otp.must.be.number' },
        1136: { message: 'label.notification.old.pin.invalid' },
        1031: { message: 'label.error.msg.otp.expired' },
        1137: { message: 'message.error.otp.fullname.not.match' },
        1007: { message: 'message.error.otp.not.match' },
        '01': { message: 'message.error.securityanswer.wrong' },
        1003: { message: 'message.error.otp.mandatory' },
    },
    HISTORY: {
        1003: { message: 'label.validation.field.required' },
        1106: { message: 'label.validation.transaction.not.found' },
        1107: { message: 'label.transaction.pin.failed' },
        2201: { message: 'label.validation.transaction.not.found' },
        2026: { message: 'label.validation.transaction.failed.check.cash' },
        9991: { message: 'label.validation.connection.error' },
        9999: { message: 'label.validation.unknown.error' },
    },
    TRANSACTION: {
        1107: { message: 'label.transaction.pin.failed' },
        6100: { message: 'label.validation.account.not.found' },
        2202: { message: 'label.validation.sender.same.with.receiver' },
        2201: { message: 'label.validation.transaction.not.found' },
        1106: { message: 'label.validation.transaction.not.found' },
        9991: { message: 'label.validation.sufficient.balance' },
        9999: { message: 'label.validation.unknown.error' },
        1003: { message: 'label.validation.field.required' },
        3002: { message: 'label.validation.sufficient.balance' },
    },
    REGISTRATION: {
        '01': { message: 'label.validation.invalid.data' },
        9999: { message: 'label.validation.unknown.error' },
        2113: { message: 'message.error.invalid.ktp' },
    },
    PPOB: {
        '01': { message: 'label.validation.invalid.data' },
        '02': { message: 'message.error.amount.must.be.choosen' },
        '03': { message: 'message.error.data.not.found' },
        1003: { message: 'message.error.pin.not.empty' },
        1107: { message: 'label.ppob.pin.invalid' },
        6000: { message: 'label.validation.transaction.not.valid' },
        1131: { message: 'label.validation.transaction.not.valid' },
        1106: { message: 'label.ppob.pin.no.more.valid' },
        9991: { message: 'label.error.msg.internal.server.error' },
        9999: { message: 'label.error.msg.internal.server.error' },
    },
    HISTORY_TRANSACTION: {
        1000: { message: 'label.success.msg.success' },
        1003: { message: 'label.error.field.mandatory' },
        1002: { message: 'label.validation.date.cannot.be.greater' },
    },
    DISBURSMENT: {
        2206: { message: 'label.error.msg.voucher.not.found' },
        2207: { message: 'label.error.msg.voucher.expired' },
        2208: { message: 'label.error.msg.voucher.used' },
        1003: { message: 'label.error.field.mandatory' },
        2063: { message: 'label.error.voucher.received.by.another.user' },
        2064: { message: 'label.error.voucher.reedemed' },
        6123: { message: 'label.error.voucher.reedemed.insufficient.balance' },
        1005: { message: 'message.error.invalid.date.format' },
    },
};

export default messages;