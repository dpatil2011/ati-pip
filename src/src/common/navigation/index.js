/**
 * @author akbar.pambudi
 * @since v1.0.0
 * this component responsible for manage application navigation using react-navigation and redux
 *
 */
import { connect } from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import RootStackNavigation from './root-stack-navigation';

export default () => {
  const navReducer = createNavigationReducer(RootStackNavigation);

  const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
  );

  const MyApp = reduxifyNavigator(RootStackNavigation, 'root');

  const mapStateToProps = state => ({
    state: state.nav,
  });
  const AppWithNavigationState = connect(mapStateToProps)(MyApp);

  return {
    AppWithNavigationState,
    navReducer,
    middleware,
  };
};