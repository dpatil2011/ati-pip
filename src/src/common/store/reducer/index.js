import { combineReducers } from 'redux';
import { AtiNavigationReducer } from 'ati-navigation';
import { reducer as i18n } from 'ati-react-native-redux-i18n';
import { formReducer } from 'ati-redux-form';
import navHeaderReducer from './nav-header-reducer';
import navigationReducer from './../../navigation/reducer';
import PopupReducer from './../../components/popup/store/popup-reducer';
import reducer from '../../../modules/registration/store/registration-reducer';
import preLoginReducer from '../../../modules/pre-login/store/pre-login-reducer';
import home from '../../../modules/home/store/HomeReducer';
import carouselreducer from './../../../modules/home/store/carsoule-reducer';
import ElectricityTokenReducer from './../../../modules/ElectricityToken/Store/ElectricityToken-reducer';
import DataReducer from './../../../modules/datapackage/store/datapackage-reducer';
import LoanReducer from './../../../modules/loan/store/loan-reducer';
import transferreducer from '../../../modules/transfer/store/Transferreducer';
import AgentReducer from '../../../modules/agent/store//agent-reducer';
import PayBillsReducer from './../../../modules/pay-bills/store/paybills-reducer';
import paybill from './../../../modules/pay-bills/store/paybills-reducer';
import transvisionreducer from './../../../modules/pay-bills/store/Transvision-reducer';
import topup from './../../../modules/topup/store/mobile-topup-reducer';
import submission from './../../../modules/submission/Store/SubmissionReducer';

const appReducers = combineReducers({
    navHeader: navHeaderReducer,
    nav: navigationReducer,
    AtiNavigationReducer,
    i18n,
    form: formReducer,
    popup: PopupReducer,
    reducer:reducer,
    login:preLoginReducer,
    home:home,
    carouselreducer:carouselreducer,
    ElectricityTokenReducer: ElectricityTokenReducer,
    dataReducer:DataReducer,
    LoanReducer:LoanReducer,
    transferreducer:transferreducer,
    PayBillsReducer:PayBillsReducer,
    AgentReducer:AgentReducer,
    transvisionreducer:transvisionreducer,
    topup:topup,
    submission:submission,
    paybill:paybill,
});

export default appReducers;