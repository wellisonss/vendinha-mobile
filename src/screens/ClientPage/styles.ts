import styled from 'styled-components/native'
import { FlatList } from 'react-native';
import { DefaultTheme } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { DataListProps } from '.';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background};
    `;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(12)}px;

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 16px;

    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background}; 
    `;

export const HeaderText = styled.Text`
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};

    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.bold};
    `;

export const ClientCards = styled.View`
flex: 1;
padding: 0 16px;
`;

export const ClientCardsList = styled(
    FlatList as new () => FlatList<DataListProps>
    ).attrs({
    showsVerticalScrollIndicator: false
})``;