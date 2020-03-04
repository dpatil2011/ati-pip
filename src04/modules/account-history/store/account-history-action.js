import axios from 'axios';
import * as actionType from './account-history-action-type';

export const setTransactionDetailAgent = data => ({
    type: actionType.SET_TRANSACTION_DETAIL_AGENT,
    payload: data,
  });
  export const setTransactionType = data => ({
    type: actionType.SET_TRANSACTION_TYPE,
    payload: data,
  });
  export const setDetailData = data => ({
    type: actionType.SET_DETAIL_DATA,
    payload: data,
  });
  export const setVisibleModal = data => ({
    type: actionType.SET_VISIBLE_MODAL,
    payload: data,
  });
  export const setCashList = data => ({
    type: actionType.SET_CASH_LIST,
    payload: data,
  });
  const finishOpenDepositModalAction = () => ({
    type: actionType.FINSIH_OPEN_DEPOSIT_MODAL,
});
export const closeDepositModal = () => (dispatch) => {
    dispatch(finishOpenDepositModalAction());
};
const openConfirmModalAction = () => ({
    type: actionType.OPEN_CLOSE_MODAL_CONFIRM,
    payload: true,
});

export const openConfirmDepositModal = () => (dispatch) => {
    dispatch(openConfirmModalAction());
};
const setDataDetailAction = payload => ({
    type: actionType.UPDATE_DATA_TRANSACTION,
    payload,
});
export const onAddDeposit = (service, params) => (dispatch) => {
    service.cenco(
        '',
        params,
        {
            method: 'POST',
            header: {
                'Content-type': 'application/json',
            },
        },
    ).then(
        (response) => {
            console.log(response);
        },
        (error) => {
            dispatch(setDataDetailAction(params));
        },
    );
};
  export const getTransactionDetailList = () => (dispatch, showProgressDialog, dismissProgressDialog) => {
  //  showProgressDialog();
    return new Promise((resolve) => {
        axios.get('http://192.168.0.53:3000/transactionHistoryAgent')
        .then((response) => {
            resolve(response.data);
            console.log(response);
            }).catch((error) => {
       //      dismissProgressDialog();
            console.log(error);
        });
    });
  };

  export const getTransactionType = () => (dispatch, showProgressDialog, dismissProgressDialog) => {
    //  showProgressDialog();
      return new Promise((resolve) => {
          axios.get('http://192.168.0.53:3000/transactionType')
          .then((response) => {
              resolve(response.data);
              console.log(response);
              }).catch((error) => {
         //      dismissProgressDialog();
              console.log(error);
          });
      });
    };
    export const getTransactionCash = () => (dispatch, showProgressDialog, dismissProgressDialog) => {
        //  showProgressDialog();
          return new Promise((resolve) => {
              axios.get('http://192.168.0.53:3000/listUangKas')
              .then((response) => {
                  resolve(response.data);
                  console.log(response);
                  }).catch((error) => {
             //      dismissProgressDialog();
                  console.log(error);
              });
          });
        };