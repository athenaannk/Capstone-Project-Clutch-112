import { useFirebaseApp, AuthProvider, DatabaseProvider } from "reactfire";
import App from "./App";
import DataProvider from "./Context/DataProvider";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const ProviderLayer = () => {

    const app = useFirebaseApp();
const db = getDatabase(app);

    const auth = getAuth(app);
    return (
        <DataProvider>
            <AuthProvider sdk={auth}>
                <DatabaseProvider sdk={db}>
                    <App />
                    </DatabaseProvider>
            </AuthProvider>
            </DataProvider>
    )
}
export default ProviderLayer;