import styled, { DefaultTheme } from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
`

export const Error = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.regular};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.success};
  bottom: 19px;
`
