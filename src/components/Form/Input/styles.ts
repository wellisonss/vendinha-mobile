import styled, { DefaultTheme } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const InputContainer = styled.View`
`;

export const Container = styled(TextInput)`
width: 100%;
padding: 10px 8px;

margin-bottom: ${RFValue(16)}px;
border-radius: 8px;

font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.regular};
font-size: ${RFValue(14)}px;

border-width: 1px;

border-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.divider};
color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary_text}; 
background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background}; 
`;

export const Header = styled.View`
`;

export const Text = styled.Text`
font-size: ${RFValue(14)}px;

font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.medium};
color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary}; 

`;



