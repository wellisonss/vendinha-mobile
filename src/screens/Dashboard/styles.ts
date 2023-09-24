import styled from 'styled-components/native'
import { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background};
    `;

export const Header = styled.View`
    width: 100%;

    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary_text}; 
    `;