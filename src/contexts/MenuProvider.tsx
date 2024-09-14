import { createContext, ReactNode, useState } from "react";

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface MenuContextType {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

interface MenuProviderProps {
    children: ReactNode;
}

export function MenuProvider({ children }: MenuProviderProps) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
            {children}
        </MenuContext.Provider>
    )
}
