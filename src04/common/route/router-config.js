/* DO NOT MODIFY OR DELETE THIS COMMENT */
// start import component
import DashboardPage from './../../app/dashboard/dashboard-page';
import RiwayatPage from '../../app/account-history/account-history-page';
import LayoutTemplate from './../layout/container/layout-template';
import LoginPage from './../../app/login/login-page';
import ChangeLanguagePage from '../../app/change-language/change-language-page';
import Error403Page from './../general-component/403/error-403-page';

const baseUrl = process.env.PUBLIC_URL;

const routeSources = [
  {
    component: LayoutTemplate,
    path: `${baseUrl}/modul`,
    child: [
      {component: DashboardPage, path: '/', exact: true},
      {component: DashboardPage, path: '/dashboard', exact: true},
      {component: ChangeLanguagePage, path: '/change-language', exact: true},
      {component: RiwayatPage, path: '/riwayat', exact: true},
      // {component: CommunityPage, path: '/community', exact: true},
      {component: Error403Page},
    ],
  },
  {component: LoginPage, path: `${baseUrl}/`, exact: true},
  {component: LoginPage, path: `${baseUrl}/login`, exact: true},
  {component: Error403Page, path: `${baseUrl}/page403`, exact: true},
  {component: Error403Page},
  /* DO NOT MODIFY OR DELETE THIS COMMENT */
  // start non nested component
];

export default routeSources;
