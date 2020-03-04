/**
 * A helper class to define all initial configurations related to your application.
 *
 * ex: export const BASE_URL = 'http://www.anabatic.com/';
*/

export const TIMEOUT = '5000';
export const BASE_URL = 'http://103.199.2.137:8081';
export const DEFAULT_METADATA = {
    datetime: '2018-01-17T13:08:22.883Z',
    deviceId: '2cd44d702cce2da5',
    devicePlatform: 'Android',
    deviceOSVersion: '5.1.1',
    deviceType: 'F1fw',
    latitude: -6.2552677,
    longitude: 106.6198383,
    appId: '1',
    appVersion: '2.0',
};
export const WEBCONSOLE_SERVICES = [
    {
        name: 'nonfin',
        contextPath: '/apps/1/pbNonFinancialAdapter',
    },
    {
        name: 'auth',
        contextPath: '/apps/pocket',
    },
    {
        name: 'sso',
        contextPath: '/sso',
    },
];