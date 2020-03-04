import * as actionType from './account-history-action-type';

const initialState = {
    transactionDetail: [],
    cashList: [],
    transactionType: [],
    confirmDepositModal: false,
    detailData: {},
    visibleModal: false,
}

const handler = (currentState) => {
    const getDepositModal = {
        startOpenDepositModal: () => ({ ...currentState, isOpenDepositModal: true }),
        finishOpenDepositModal: () => ({ ...currentState, isOpenDepositModal: false }),
    }
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionType.SET_TRANSACTION_DETAIL_AGENT:
            return { ...state, transactionDetail: payload };
            case actionType.SET_TRANSACTION_TYPE:
                return { ...state, transactionType: payload };
                case actionType.SET_DETAIL_DATA:
                    console.log("Detail"+payload)
                return { ...state, detailData: payload };
                case actionType.SET_VISIBLE_MODAL:
                    return { ...state, visibleModal: payload };
                case actionType.SET_CASH_LIST:
                    return { ...state, cashList: payload };
                    case actionType.START_OPEN_DEPOSIT_MODAL:
                        return handler(state).startOpenDepositModal();
                    case actionType.FINSIH_OPEN_DEPOSIT_MODAL:
                        return handler(state).finishOpenDepositModal();
            default:
                return state;
    }
};