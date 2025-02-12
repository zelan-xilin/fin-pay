import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface GlobalContextType {
  user?: { account: string };
  loading: boolean;
  isLoaded: boolean;
  login: (account: string, password: string) => void;
  logout: () => void;
}
const GlobalContext = createContext<GlobalContextType>({
  user: undefined,
  loading: false,
  isLoaded: false,
  login: () => {},
  logout: () => {},
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<GlobalContextType["user"] | undefined>();
  const [loading, setLoading] = useState(false);
  const isLoaded = !!user?.account;

  const login = useCallback((account: string, password: string) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setUser(account && password ? { account } : undefined);
    }, 800);
  }, []);
  const logout = useCallback(() => {
    setUser(undefined);
  }, []);

  return (
    <GlobalContext.Provider value={{ user, loading, isLoaded, login, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const globalContext = useContext(GlobalContext);

  return globalContext;
};
