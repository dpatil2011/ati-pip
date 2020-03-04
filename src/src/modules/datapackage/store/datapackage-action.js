export const setAccountDetail = (accountDetail) => ({
    type: 'Account_Detail',
    payload: accountDetail
});
export const setCellPhone = (Cellphone) => ({
    type: 'Cell_Phone',
    payload: Cellphone
});
export const setNavigate=()=>({
    type:'Set_navigate',
    payload:navigate
})
export const setProduct=(product)=>({
    type:'Set_product',
    payload:product
})
export const setPayment=(payment)=>({
    type:'Set_Payment',
    payload:payment
})