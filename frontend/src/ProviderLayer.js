import { useFirebaseApp, AuthProvider } from "reactfire";
import App from "./App";

import { getAuth } from "firebase/auth";


const ProviderLayer = () => {

    const app = useFirebaseApp();

    const auth = getAuth(app);
    return (
            <AuthProvider sdk={auth}>
                    <App />
            </AuthProvider>
    )
}
export default ProviderLayer;