import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from 'react';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';

import { COLLECTION_USER } from '../configs/database';

const { REDIRECT_URI } = process.env;
const { SCOPE } = process.env;
const { RESPONSE_TYPE } = process.env;
const { CLIENT } = process.env;
const { CDN_IMAGE } = process.env;

type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
};

type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: () => Promise<void>;
};

type AuthProviderProps = {
    children: ReactNode;
};

type AuthorizationResponse  = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
        error?: string;
    },
    type: string;
};

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {

    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    const signIn = async () => {
        try {
            setLoading(true);

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const { type, params } = await AuthSession
            .startAsync({ authUrl: authUrl}) as AuthorizationResponse;

            if( type === 'success' && !params.error) {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`;

                const userInfo = await api.get('/users/@me');

                const firstName = userInfo.data.username.split(' ')[0];

                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

                const userData = {
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                };

                await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData));

                setUser(userData);


                setLoading(false);
            }

        } catch {
            setLoading(false);
            throw new Error('Não foi possível autenticar!')
        } finally {
            setLoading(false)
        }
    };

    const signOut = async () => {
        setUser({} as User);
        await AsyncStorage.removeItem(COLLECTION_USER);
    };

    const loadUserStorageData =  async () => {
        const storage = await AsyncStorage.getItem(COLLECTION_USER);

        if(storage){
            const userLogged = JSON.parse(storage) as User;
            api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

            setUser(userLogged);
        }
    };

    useEffect(() => {
        loadUserStorageData();
    }, []);

    return(
        <AuthContext.Provider value={{ user, signIn, loading }}>
            { children }
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);

    return context
};

export { AuthContext, AuthProvider, useAuth };