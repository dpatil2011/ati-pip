import ECODE from "./event-code-constants";

export const REGEX_CREDENTIAL_POLICY = [
    { id: 'ALPHABETONLY', name: 'Only alphabet' },
    { id: 'NUMBERONLY', name: 'Only number' },
    { id: 'MUSTALPHANUMERIC', name: 'Must alphanumeric' },
    { id: 'MUSTALPHANUMERICSPECIAL', name: 'Must alphanumeric and special character' },
    { id: 'NOREGEX', name: 'No specific rule' },
];

export const CONCURRENT_LOGIN_ACTION = [
    { id: 'ALLOWALL', name: 'Allow All' },
    { id: 'KICKPREVIOUS', name: 'Kick Previous' },
    { id: 'REJECTCURRENT', name: 'Reject Current' },
];

export const STATUS = [
    { id: 'true', name: 'Active' },
    { id: 'false', name: 'Inactive' },
];

export const APP_VERSION_OPTIONS = [
    {
        id: 1,
        name: 'PocketBank',
        platforms: [{ id: 5, platform: 'Android' }, { id: 1, platform: 'IOS' }],
    },
    {
        id: 2,
        name: 'PocketBank Merchant',
        platforms: [{ id: 2, platform: 'Android' }, { id: 3, platform: 'IOS' }],
    },
    {
        id: 3,
        name: 'PocketBank Agent',
        platforms: [{ id: 4, platform: 'Android' }, { id: 6, platform: 'IOS' }],
    },
];

export const CURRENCY = [
    { id: 'IDR', name: 'Indonesian rupiah' },
    { id: 'USD', name: 'United States dollar' },
];

export const TYPE = [
    {
        name: 'FIXED',
        description: 'Fixed',
        value: '1',
        },
        {
        name: 'PERCENTAGE',
        description: 'Percentage',
        value: '2',
    },
];

export const BILLER_TYPE = [
    { id: 1, name: 'ONLINE' },
    { id: 2, name: 'OFFLINE' },
];

export const VALIDATION_FUNCTION = [
    { id: 1, methodName: 'No Check', validationClass: 'No Check' },
    { id: 2, methodName: 'check4DigitSimiliar', validationClass: 'check4DigitSimiliar' },
];

export const LIST_EVENT_CODE = [
    { id: ECODE.CASH_IN, name: 'Cash In', label: 'label.transaction.cash.in' },
    { id: ECODE.CASH_OUT, name: 'Cash Out', label: 'label.transaction.cash.out' },
    { id: ECODE.TRANSFER, name: 'Transfer', label: 'label.transaction.transfer' },
    { id: ECODE.REEDEM_VOUCHER, name: 'Reedem Voucher', label: 'label.transaction.reedem.voucher' },
    { id: ECODE.SEND_CASH, name: 'Send Cash', label: 'label.transaction.send.cash' },
    { id: ECODE.BPJKS, name: 'BPJKS', label: 'label.transaction.bpjks' },
    { id: ECODE.PLN_BILL, name: 'PLN Bill', label: 'label.transaction.pln.bill' },
    { id: ECODE.PLN_NON_BILL, name: 'PLN Non Bill', label: 'label.transaction.pln.non.bill' },
    { id: ECODE.PDAM, name: 'PDAM', label: 'label.transaction.pdam' },
    { id: ECODE.TELKOM, name: 'Telkom', label: 'label.transaction.telkom' },
    { id: ECODE.MOBILE_TOP_UP, name: 'Pulsa', label: 'label.transaction.mobile.top.up' },
    { id: ECODE.COMMISSION, name: 'Commission', label: 'label.transaction.commission' },
];