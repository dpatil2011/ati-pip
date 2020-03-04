import { NavigationActions } from 'react-navigation';

const navigate = (screen, params) => NavigationActions.navigate({
    routeName: screen,
    params,
});
export default navigate;