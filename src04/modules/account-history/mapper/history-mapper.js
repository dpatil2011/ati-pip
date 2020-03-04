const MAPPER = {
    reqAccount: data => ({
        accountName: 'adm11',
        accountNumber: '1234567890',
        accountBalance: '100,000,000',
        cashBalance: parseInt(data.amount, 10) + parseInt(data.cashBalance, 10),
    }),
    reqConfirmDeposit: (data, dateNow, name) => ({
        confirmDeposit: {
            amountDeposit: `Rp ${data.amount}`,
            customerName: name,
            accountNumber: '1234567890',
            description: data.description,
            transactionFeeDetail: {
                totalFee: `Rp ${data.amount}`,
            },
        },
        receiptDeposit: {
            transactionType: 'Deposit',
            dateNow,
            referenceCode: '123123123',
        },
    }),
    reqConfirmWithdraw: (data, dateNow, name) => ({
        confirmWithdraw: {
            amountWithdraw: `Rp ${data.amount}`,
            customerName: name,
            accountNumber: '1234567890',
            description: data.description,
            transactionFeeDetail: {
                totalFee: `Rp ${data.amount}`,
            },
        },
        receiptWithdraw: {
            transactionType: 'Withdraw',
            dateNow,
            referenceCode: '123123123',
        },
    }),
};

export default MAPPER;