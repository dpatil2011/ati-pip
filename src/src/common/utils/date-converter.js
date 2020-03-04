import I18n, { Loc } from 'ati-react-native-redux-i18n';
import Moment from 'moment';

const changeMonthLocale = (data) => {
    const tempDate = data.toLowerCase();
    const monthList = [
            'january',
            'february',
            'march',
            'april',
            'may',
            'june',
            'july',
            'august',
            'september',
            'october',
            'november',
            'december',
        ];

        for (let i = 0; i < monthList.length; i += 1) {
            if (tempDate.indexOf(monthList[i]) !== -1) {
                return tempDate.replace(monthList[i], I18n.t(`months1.${monthList[i]}`));
            } else if (tempDate.indexOf((monthList[i]).substring(0, 3)) !== -1) {
                return tempDate.replace(monthList[i].substring(0, 3), I18n.t(`months2.${monthList[i].substring(0, 3)}`));
            }
        }

        return data;
};

const MomentCustom = (date, fromFormat) => ({
    format: (toFormat) => {
        return changeMonthLocale(Moment(date, fromFormat).format(toFormat));
    },
});

export default MomentCustom;