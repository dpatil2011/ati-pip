import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import HeaderNavigation from '../components/navigation/header-navigation';
import HeaderHomeScreen from '../components/navigation/HeaderHomeScreen';
import TransferHeader from '../components/navigation/TransferHeader';
import ReceiptNaviagtion from '../components/navigation/ReceiptNaviagtion';
import ReceiptHeader from '../components/navigation/Receipt-Header';
import PostPaidBillHeader from '../components/navigation/PostBillHeader';
import UtilityHeader from '../components/navigation/UtilityBillHeader';
import { Image, AsyncStorage } from 'react-native'

import PreLoginScreen from '../../app/pre-login/pre-login-screen';
import MultiStep from '../../modules/registration/component/MultiStep';
import HomeScreen from '../../modules/home/HomeScreen';
import Agent from '../../modules/agent/agent';
import Submission from '../../modules/submission/submission';
import History from '../../modules/history/history';
import User from '../../modules/user/user';
import Help from '../../modules/user/Help';
import ChangePass from './../../modules/user/ChangePassword'
import QrCode from '../../modules/home/Components/QR1';
import AccountDetail from '../../modules/home/Components/AccountDetail';
import ImageCar from './../../modules/home/Components/ImageCar';
import Transfer from './../../modules/transfer/Transfer';
import Cash from './../../modules/PayBill/Cash';
import Qr from './../../modules/PayBill/Qr';
import Reg from './../../modules/PayBill/Reg';
import Datapackage from '../../modules/datapackage/datapackage';
import PurchaseConfirmation from '../../modules/datapackage/purchase-confirmation';
import Receipt from '../../modules/datapackage/receipt';
import MyAccount from '../../modules/datapackage/myaccount';
import ElectricityToken from './../../modules/ElectricityToken/ElectricityToken';
import AccountList from './../../modules/ElectricityToken/AccountList';
import ChooseNominal from './../../modules/datapackage/chooseNominal';
import Datapackagepin from './../../modules/datapackage/datapackagepin';
import ElectricityDatapackege from './../../modules/ElectricityToken/Datapackage';
import ElectricityTokenReceipt from './../../modules/ElectricityToken/receipt';
import ElectricityTokenPin from './../../modules/ElectricityToken/ElectricityTockenPin';
import Loan from './../../modules/loan/loan';
import LoanProduct from './../../modules/loan/loanProduct';
import ApplyLoan from './../../modules/loan/ApplyLoan';
import AgentLoan from '../../modules/loan/agentLoan';
import AgentDetail from '../../modules/agent/agentDetail';
import HomeAccountList from '../../modules/home/Components/AccountList';
import agentTransferHistory from '../../modules/agent/agentTransferHistory'
import agentCashWithdrawal from '../../modules/agent/agentCashWithdrawal';
import PayLoan from '../../modules/loan/PayLoan';
import LoanReceipt from '../../modules/loan/loanreceipt';
import telkomPayment from "./../../modules/pay-bills/telkomPayment";
import telkomReceipt from '../../modules/pay-bills/telkomReceipt';
import telkomConfirmation from '../../modules/pay-bills/telkomConfirmation';
import AgentMember from '../../modules/user/agentmember';
import SelectAccount from '../../modules/VirtualAccount/SelectAccount';
import Loanhistory from '../../modules/loan/loanhistory';
import ChangeDestinationAccount from '../../modules/VirtualAccount/changedestinationaccount';
import CashOutSummary from '../../modules/CashTransaction/cashoutsummary';
import AddAccount from './../../modules/transfer/AddAccount';
import MyAccountTransfer from './../../modules/transfer/MyAccount';
import SelectAccountTransfer from './../../modules/transfer/SelectAccount';
import TransferSum from './../../modules/transfer/TransferSum';
import Pin from './../../modules/transfer/Pin';
import TransferReceipt from './../../modules/transfer/TransferReceipt';
import Bank from './../../modules/transfer/Bank';
import PayQ from '../../modules/payQ/PayQ';
import Pay from '../../modules/payQ/Pay';
import ReceiptPayQ from '../../modules/payQ/Receipt';
import Qpin from '../../modules/payQ/Qpin';
import ConfirmationPayQ from '../../modules/payQ/Confirmation';
import ExchangeRate from '../../modules/ExchangeRate/ExchangeRate'
import GenerateOtp from '../../modules/OTP/GenerateOtp';
import CashierQu from '../../modules/CashierQu/CashierQu';
import CashierQr from '../../modules/CashierQu/CashierQr';
import CashTransaction from '../../modules/CashTransaction/CashTransaction';
import CashInSummary from '../../modules/CashTransaction/CashInSummary';
import CashInSuccess from '../../modules/CashTransaction/CashInSuccess';
import CashOutSuccess from '../../modules/CashTransaction/CashOutSuccess';
import CashInPin from '../../modules/CashTransaction/CashInPin';
import CashOutPin from '../../modules/CashTransaction/CashOutPin';
import CashierQrHeader from './../components/navigation/CashierQr-Header'
import CashTransactionHeader from './../components/navigation/CashTransaction-Header'
import Utility from './../../modules/pay-bills/Utility';
import PlnNumber from './../../modules/pay-bills/PlnNumber';
import PlnConfirmation from './../../modules/pay-bills/PlnConfirmation';
import Insurance from './../../modules/pay-bills/Insurance';
import PayBillHeader from './../../modules/pay-bills/Header';
import PayBill from './../../modules/pay-bills/PayBillsMainScreen';
import LoanConfirmation from './../../modules/loan/LoanConfirmation';
import TermsCondition from './../../modules/loan/TermsCondition';
import PostpaidBill from './../../modules/pay-bills/PostPaidBill';
import InsuranceConfirmation from './../../modules/pay-bills/InsuranceConfirmation';
import InsurancePin from './../../modules/pay-bills/InsurancePin';
import InsuranceReceipt from './../../modules/pay-bills/InsuranceReceipt';
import InsuranceBill from './../../modules/pay-bills/InsuranceBill';
import InsuranceAccount from './../../modules/pay-bills/InsuranceAccount';
import Transvision from './../../modules/pay-bills/Transvision';
import TransvisionAccount from './../../modules/pay-bills/TransvisionAccount';

//import SubmissionReceipt from './../../modules/submission/Receipt';
import PayLoanHeader from './../components/navigation/PayLoan-Header';
import StatusSubmision from './../../modules/submission/StatusSubmission';
import SubmissionReceipt from './../../modules/submission/Receipt';
import NAI from '../../modules/NAI';
import PlnReceipt from './../../modules/pay-bills/PlnReceipt';
import PlnPin from './../../modules/pay-bills/PlnPin';
import VirtualAccount from './../../modules/VirtualAccount/VirtualAccount';
import DestinationAccount from './../../modules/VirtualAccount/DestinationAccount';
import payBillsAccountList from './../../modules/pay-bills/PayBillsAccountList';


import MobileTopup from './../../modules/topup/MobileTopup';
import AccountSelection from './../../modules/topup/AccountSelection';
import MobileTopupNumber from './../../modules/topup/MobileTopupNumber';
import TopupConfirmation from './../../modules/topup/TopupConfirmation';
import TopupPin from '../../modules/topup/Pin';
import TopupReceipt from '../../modules/topup/TopupReceipt';
import MainScreen from './../../modules/topup/MainScreen';
import Submission2 from './../../modules/submission/StatusSubmission';

import PlnAccountSelection from './../../modules/pay-bills/PaybillAccountSelection';
const rootNavigationConfig = {
    PlnAccountSelection: { screen: PlnAccountSelection, navigationOptions: { header: () => <HeaderNavigation /> } },
    MobileTopup: { screen: MobileTopup, navigationOptions: { header: () => <HeaderNavigation /> } },
    MobileTopupNumber: { screen: MobileTopupNumber, navigationOptions: { header: () => <HeaderNavigation /> } },
    TopupReceipt: { screen: TopupReceipt, navigationOptions: { header: () => <ReceiptHeader /> } },
    TopupConfirmation: { screen: TopupConfirmation, navigationOptions: { header: () => <HeaderNavigation /> } },
    AccountSelection: { screen: AccountSelection, navigationOptions: { header: () => <HeaderNavigation /> } },
    TopupPin: { screen: TopupPin, navigationOptions: { header: () => false } },
    login: { screen: PreLoginScreen },
    PreLoginScreen: { screen: PreLoginScreen, navigationOptions: { header: () => false } },
    QrCode: { screen: QrCode, navigationOptions: { header: () => <HeaderNavigation /> } },
    payBillsAccountList: { screen: payBillsAccountList, navigationOptions: { header: () => <HeaderNavigation /> } },
    AccountList1: { screen: HomeAccountList, navigationOptions: { header: () => <HeaderNavigation /> } },
    AccountDetail: { screen: AccountDetail, navigationOptions: { header: () => <HeaderNavigation /> } },
    MultiStep: { screen: MultiStep },
    Agent: { screen: Agent, navigationOptions: { header: () => false } },
    AgentDetail: { screen: AgentDetail, navigationOptions: { header: () => <HeaderNavigation /> } },

    telkomPayment: { screen: telkomPayment, navigationOptions: { header: () => <HeaderNavigation /> } },
    telkomReceipt: { screen: telkomReceipt, navigationOptions: { header: () => <ReceiptHeader /> } },
    telkomConfirmation: { screen: telkomConfirmation, navigationOptions: { header: () => <HeaderNavigation /> } },
    agentTransferHistory: { screen: agentTransferHistory, navigationOptions: { header: () => <HeaderNavigation /> } },
    agentCashWithdrawal: { screen: agentCashWithdrawal, navigationOptions: { header: () => <HeaderNavigation /> } },
    Submission: { screen: Submission, navigationOptions: { header: () => false } },
    Help: { screen: Help, navigationOptions: { header: () => <HeaderNavigation /> } },
    ChangePass: { screen: ChangePass, navigationOptions: { header: () => <HeaderNavigation /> } },
    History: { screen: History, navigationOptions: { header: () => false } },
    User: { screen: User, navigationOptions: { header: () => false } },
    ImageCar: { screen: ImageCar, navigationOptions: { header: () => <HeaderNavigation /> } },
    PayQ: { screen: PayQ, navigationOptions: { header: () => <HeaderNavigation /> } },
    // Transfer: { screen: Transfer, navigationOptions: { header: () => <HeaderNavigation /> } },
    MainScreen: { screen: MainScreen, navigationOptions: { header: () => <HeaderNavigation /> } },
    PayBill: { screen: PayBill, navigationOptions: { header: () => <HeaderNavigation /> } },
    Loan: { screen: Loan, navigationOptions: { header: () => <HeaderNavigation /> } },
    LoanProduct: { screen: LoanProduct, navigationOptions: { header: () => <HeaderNavigation /> } },
    ApplyLoan: { screen: ApplyLoan, navigationOptions: { header: () => <HeaderNavigation /> } },
    AgentLoan: { screen: AgentLoan, navigationOptions: { header: () => <HeaderNavigation /> } },
    PayLoan: { screen: PayLoan, navigationOptions: { header: () => <PayLoanHeader /> } },
    OTP: { screen: GenerateOtp, navigationOptions: { header: () => <HeaderNavigation /> } },
    //Rate: { screen: Rate, navigationOptions: { header: () => <HeaderNavigation /> } },
    cash: { screen: Cash, navigationOptions: { header: () => <HeaderNavigation /> } },
    Qr: { screen: Qr, navigationOptions: { header: () => <HeaderNavigation /> } },
    Reg: { screen: Reg, navigationOptions: { header: () => <HeaderNavigation /> } },
    Datapackage: { screen: Datapackage, navigationOptions: { header: () => <HeaderNavigation /> } },
    PurchaseConfirmation: { screen: PurchaseConfirmation, navigationOptions: { header: () => <HeaderNavigation /> } },
    Receipt: { screen: Receipt, navigationOptions: { header: () => <HeaderNavigation /> } },
    MyAccount: { screen: MyAccount, navigationOptions: { header: () => <HeaderNavigation /> } },
    ElectricityToken: { screen: ElectricityToken, navigationOptions: { header: () => <HeaderNavigation /> } },
    AccountList: { screen: AccountList, navigationOptions: { header: () => <HeaderNavigation /> } },
    ChooseNominal: { screen: ChooseNominal, navigationOptions: { header: () => <HeaderNavigation /> } },
    Datapackagepin: { screen: Datapackagepin, navigationOptions: { header: () => false } },
    ElectricityDatapackege: { screen: ElectricityDatapackege, navigationOptions: { header: () => <HeaderNavigation /> } },
    ElectricityTokenReceipt: { screen: ElectricityTokenReceipt, navigationOptions: { header: () => <HeaderNavigation /> } },
    ElectricityTokenPin: { screen: ElectricityTokenPin, navigationOptions: { header: () => false } },
    Transfer: { screen: Transfer, navigationOptions: { header: () => <TransferHeader /> } },
    AddAccount: { screen: AddAccount, navigationOptions: { header: () => <HeaderNavigation /> } },
    Bank: { screen: Bank, navigationOptions: { header: () => <HeaderNavigation /> } },
    MyAccountTransfer: { screen: MyAccountTransfer, navigationOptions: { header: () => <HeaderNavigation /> } },
    SelectAccountTransfer: { screen: SelectAccountTransfer, navigationOptions: { header: () => <HeaderNavigation /> } },
    TransferSum: { screen: TransferSum, navigationOptions: { header: () => <HeaderNavigation /> } },
    Pin: { screen: Pin, navigationOptions: { header: () => false } },
    TransferReceipt: { screen: TransferReceipt, navigationOptions: { header: () => <ReceiptNaviagtion /> } },
    // PayQ: { screen: PayQ, navigationOptions: { header: () => false } },
    PayQ: { screen: Pay, navigationOptions: { header: () => <HeaderNavigation /> } },
    ConfirmationPayQ: { screen: ConfirmationPayQ, navigationOptions: { header: () => <HeaderNavigation /> } },
    Utility: { screen: Utility, navigationOptions: { header: () => <UtilityHeader /> } },

    Qpin: { screen: Qpin, navigationOptions: { header: () => false } },
    ReceiptPayQ: { screen: ReceiptPayQ, navigationOptions: { header: () => <ReceiptNaviagtion /> } },
    ExchangeRate: { screen: ExchangeRate, navigationOptions: { header: () => <HeaderNavigation /> } },
    GenerateOtp: { screen: GenerateOtp, navigationOptions: { header: () => <HeaderNavigation /> } },
    TransvisionAccount: { screen: TransvisionAccount, navigationOptions: { header: () => <HeaderNavigation /> } },

    CashierQu: { screen: CashierQu, navigationOptions: { header: () => <HeaderNavigation /> } },
    CashierQr: { screen: CashierQr, navigationOptions: { header: () => <CashierQrHeader /> } },
    CashTransaction: { screen: CashTransaction, navigationOptions: { header: () => <CashTransactionHeader /> } },
    CashInSummary: { screen: CashInSummary, navigationOptions: { header: () => <HeaderNavigation /> } },
    CashInSuccess: { screen: CashInSuccess, navigationOptions: { header: () => <ReceiptNaviagtion /> } },
    CashOutSummary: { screen: CashOutSummary, navigationOptions: { header: () => <HeaderNavigation /> } },
    CashOutSuccess: { screen: CashOutSuccess, navigationOptions: { header: () => <ReceiptNaviagtion /> } },
    LoanConfirmation: { screen: LoanConfirmation, navigationOptions: { header: () => <HeaderNavigation /> } },
    TermsCondition: { screen: TermsCondition, navigationOptions: { header: () => <HeaderNavigation /> } },
    LoanReceipt: { screen: LoanReceipt, navigationOptions: { header: () => <ReceiptNaviagtion /> } },
    PostpaidBill: { screen: PostpaidBill, navigationOptions: { header: () => <PostPaidBillHeader /> } },
    


    InsuranceConfirmation: { screen: InsuranceConfirmation, navigationOptions: { header: () => <HeaderNavigation /> } },
    InsurancePin: { screen: InsurancePin, navigationOptions: { header: () => false } },
    InsuranceReceipt: { screen: InsuranceReceipt, navigationOptions: { header: () => <ReceiptHeader /> } },
    InsuranceBill: { screen: InsuranceBill, navigationOptions: { header: () => <HeaderNavigation /> } },
    InsuranceAccount: { screen: InsuranceAccount, navigationOptions: { header: () => <HeaderNavigation /> } },
    Insurance: { screen: Insurance, navigationOptions: { header: () => <HeaderNavigation /> } },

    Transvision: { screen: Transvision, navigationOptions: { header: () => <HeaderNavigation /> } },
    StatusSubmision: { screen: StatusSubmision, navigationOptions: { header: () => <HeaderHomeScreen /> } },
    Submission2: { screen: Submission2, navigationOptions: { header: () => <HeaderHomeScreen /> } },

    SubmissionReceipt: { screen: SubmissionReceipt, navigationOptions: { header: () => <ReceiptHeader /> } },
    Loanhistory: { screen: Loanhistory, navigationOptions: { header: () => <HeaderNavigation /> } },

    PlnNumber: { screen: PlnNumber, navigationOptions: { header: () => <HeaderNavigation /> } },
    PlnConfirmation: { screen: PlnConfirmation, navigationOptions: { header: () => <HeaderNavigation /> } },
    PlnReceipt: { screen: PlnReceipt, navigationOptions: { header: () => <ReceiptHeader /> } },
    NAI: { screen: NAI, navigationOptions: { header: () => <HeaderNavigation /> } },
    PlnPin: { screen: PlnPin, navigationOptions: { header: () => false } },

    //  SubmissionReceipt:{ screen: SubmissionReceipt, navigationOptions: { header: () => <HeaderNavigation /> } },

    AgentMember: { screen: AgentMember, navigationOptions: { header: () => <HeaderNavigation/> } },
    VirtualAccount: { screen: VirtualAccount, navigationOptions: { header: () => <HeaderNavigation/> } },
    DestinationAccount: { screen: DestinationAccount, navigationOptions: { header: () => <HeaderNavigation/> } },
    ChangeDestinationAccount: { screen: ChangeDestinationAccount, navigationOptions: { header: () => <HeaderNavigation/> } },
    SelectAccount: { screen: SelectAccount, navigationOptions: { header: () => <HeaderNavigation/> } },


    CashInPin: { screen: CashInPin, navigationOptions: { header: () => false } },
    CashOutPin: { screen: CashOutPin, navigationOptions: { header: () => false } },

    HomeScreen: {
        navigationOptions: {
            header: () => <HeaderHomeScreen />
        },
        screen: createMaterialTopTabNavigator({
            home: {
                screen: HomeScreen,
                tabBarLabel: "home",
                navigationOptions: {
                    swipeEnabled: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../../../assets/img/icon/homeicon.png') : require('../../../assets/img/icon/inactivehomeicon.png')}
                            style={{
                                width: 26.9,
                                height: 23
                            }}
                        />

                    )
                }
            },
            agent: {
                screen: Agent,
                tabBarlabel: "Agent",
                navigationOptions: {
                    swipeEnabled: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../../../assets/img/icon/activeagenticon.png') : require('../../../assets/img/icon/agenticon.png')}
                            style={{
                                width: 26.3,
                                height: 23
                            }}
                        />
                    )
                }
            },
            submission: {
                screen: Submission,
                tabBarlabel: "Submission",
                tabBarOptions: {

                },
                navigationOptions: {
                    swipeEnabled: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../../../assets/img/icon/activesubmission.png') : require('../../../assets/img/icon/submissionicon.png')} style={{
                                width: 20.3,
                                height: 19.6
                            }}
                        />
                    )
                }
            },
            history: {
                screen: History,
                tabBarLabel: "History",
                navigationOptions: {
                    swipeEnabled: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require('../../../assets/img/icon/riwayat.png') : require('../../../assets/img/icon/historyicon.png')} style={{
                                width: 24.9,
                                height: 20
                            }}
                        />
                    )
                }
            },
            user: {
                screen: User,


            },

        }, {
                tabBarPosition: 'bottom',
                tabBarOptions: {
                    indicatorStyle: {
                        opacity: 0
                    },
                    activeTintColor: 'red',
                    inactiveTintColor: 'grey',
                    style: {
                        height: 60,
                        backgroundColor: '#ffffff',
                    },
                    showLabel: true,
                    showIcon: true,
                    labelStyle: {
                        width: 52,
                        height: 14,
                        fontFamily: "AvenirNextLTPro",
                        fontSize: 7,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        letterSpacing: 0,
                        textAlign: "center",

                    },
                    iconStyle: {
                        width: 30,
                        height: 30
                    },
                    upperCaseLabel: false

                }

            }
        )
    }
};



export default rootNavigationConfig;