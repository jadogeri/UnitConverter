import { useContext } from 'react';
import { Context as ServiceContext } from '../context/APIContext';

function useCooking() {
  const {teaspoonsToTablespoonsAction, tablespoonsToTeaspoonsAction,
    cupsToPintsAction,  pintsToCupsAction, cupsToOuncesAction,
    ouncesToCupsAction, cupsToTablespoonsAction, tablespoonsToCupsAction } = useContext(ServiceContext)

   return [teaspoonsToTablespoonsAction, tablespoonsToTeaspoonsAction,
    cupsToPintsAction,  pintsToCupsAction, cupsToOuncesAction,
    ouncesToCupsAction, cupsToTablespoonsAction, tablespoonsToCupsAction];
}

export default useCooking;




