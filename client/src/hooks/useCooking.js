import { useContext } from 'react';
import { Context as ServiceContext } from '../context/APIContext';

function useCooking() {
  const {state,teaspoonsToTablespoonsAction, tablespoonsToTeaspoonsAction,
    cupsToPintsAction,  pintsToCupsAction, cupsToOuncesAction,
    ouncesToCupsAction, cupsToTablespoonsAction, tablespoonsToCupsAction } = useContext(ServiceContext)

   return [state,teaspoonsToTablespoonsAction, tablespoonsToTeaspoonsAction,
    cupsToPintsAction,  pintsToCupsAction, cupsToOuncesAction,
    ouncesToCupsAction, cupsToTablespoonsAction, tablespoonsToCupsAction];
}

export default useCooking;