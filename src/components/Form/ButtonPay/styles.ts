import styled, { DefaultTheme } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(TouchableOpacity)`
width: 22%;
background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.success};

border-radius: 8px;
align-items: center;
`;

export const Title = styled.Text`
font-size: ${RFValue(10)}px;
font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.bold};
/* color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.card}; */
padding: 6px;

color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background};

`;


