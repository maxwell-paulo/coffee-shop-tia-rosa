'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Definindo o tipo para o contexto do tema
type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
};

// Criando o contexto com valores padrão
const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => { },
});

// Hook para acessar o contexto do tema
export const useTheme = () => useContext(ThemeContext);

// Props para o ThemeProvider
interface ThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    // Estado para armazenar o tema atual
    const [theme, setTheme] = useState('light');
    // Estado para controlar a montagem do componente
    const [mounted, setMounted] = useState(false);

    // Efeito para carregar as preferências do usuário ao montar o componente
    // e configurar listener para mudanças de tema do sistema
    useEffect(() => {
        // Recupera o tema salvo no localStorage, ou usa a preferência do sistema
        const savedTheme = localStorage.getItem('theme');

        const applyTheme = (newTheme: string) => {
            setTheme(newTheme);
            document.documentElement.classList.toggle('dark', newTheme === 'dark');
        };

        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(prefersDark ? 'dark' : 'light');
        }

        // Adiciona listener para mudanças na preferência do sistema
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleMediaChange = (e: MediaQueryListEvent) => {
            // Aplicar tema do sistema apenas se não tiver tema personalizado
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleMediaChange);

        // Marca o componente como montado
        setMounted(true);

        // Limpeza do listener ao desmontar o componente
        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    // Função para alternar o tema
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

        // Atualiza a classe no HTML
        document.documentElement.classList.toggle('dark', newTheme === 'dark');

        // Salva a preferência do usuário
        localStorage.setItem('theme', newTheme);
    };

    // Retorna um placeholder enquanto o componente não estiver montado
    // Isso evita renderizar o conteúdo com o tema errado brevemente
    if (!mounted) {
        return <div style={{ visibility: 'hidden' }}>{children}</div>;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
} 