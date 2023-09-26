import styled, { DefaultTheme } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps extends DefaultTheme {
    type: 'save' | 'cancel';
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
width: 100%;
background-color: ${({ theme, type }: ButtonProps ) => 
type === 'save' ? theme.colors.primary : theme.colors.card
}; 

border: 1px ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};

border-radius: 8px;
align-items: center;
`;

export const Title = styled.Text`
font-size: ${RFValue(16)}px;
font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.bold};
/* color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.card}; */
padding: 12px;

color: ${({ theme, type }: ButtonProps ) => 
type === 'save' ? theme.colors.card : theme.colors.primary
}; 



`;


