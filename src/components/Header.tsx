import { useContext } from "react";
import { MenuContext } from "../contexts/MenuProvider";
import { useNavigate } from "react-router-dom";

export function Header() {
    const menuContext = useContext(MenuContext);
    const navigate = useNavigate();

    if (!menuContext) {
        return null;
    }
    /* TODO: #713624 #e1d6c8*/
    const { isMenuOpen, toggleMenu } = menuContext;

    const handleNavigation = (path: string) => {
        navigate(path);
        toggleMenu(); // Fechar o menu após a navegação
    };

    return (
        <header className="flex justify-between items-center p-4 sm:px-6 lg:px-16 2xl:px-36 bg-white fixed w-full">
            <h1 className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-black bg-gradient-to-r from-emerald-500 to-emerald-800 bg-clip-text text-transparent">TecnoFácil</h1>

            {/* Botão para menu hambúrguer (apenas para telas pequenas) */}
            <button className="sm:hidden text-3xl font-semibold" onClick={toggleMenu}>☰</button>

            {/* Itens do menu (mostrado quando isMenuOpen for true em telas pequenas) */}
            {isMenuOpen && (
                <nav className="absolute top-16 right-0 w-full bg-white flex flex-col items-center p-3 md:hidden font-medium">
                    <div className="flex flex-col gap-4">
                        <button className="p-2" onClick={() => handleNavigation("/")}>Início</button>

                        <button className="p-2" onClick={() => handleNavigation("/tools")}>Ferramentas</button>

                        <button className="p-2" onClick={() => handleNavigation("/tutorials")}>Tutoriais</button>

                        <button className="p-2" onClick={() => handleNavigation("/support")}>Suporte</button>
                    </div>
                </nav>
            )}

            {/* Menu visível em telas grandes */}
            <nav className="hidden sm:flex text-base lg:text-lg 2xl:text-lg font-medium">
                <div className="flex">
                    <button className="py-2 px-4 hover:text-emerald-800" onClick={() => navigate("/")}>Início</button>

                    <button className="py-2 px-4 hover:text-emerald-800" onClick={() => navigate("/tools")}>Ferramentas</button>

                    <button className="py-2 px-4 hover:text-emerald-800" onClick={() => navigate("/tutorials")}>Tutoriais</button>

                    <button className="py-2 px-4 hover:text-emerald-800" onClick={() => navigate("/support")}>Suporte</button>
                </div>
            </nav>
        </header>
    )
}
