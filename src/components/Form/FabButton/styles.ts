import { TouchableOpacity } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};

  width: 48px; /* Largura do botão */
  height: 48px; /* Altura do botão */
  border-radius: 30px; /* Bordas arredondadas para torná-lo um botão circular */
  justify-content: center; /* Centraliza verticalmente o conteúdo */
  align-items: center; /* Centraliza horizontalmente o conteúdo */
  position: absolute; /* Posicionamento absoluto para que o botão possa flutuar na tela */
  bottom: 80px; /* Distância a partir da parte inferior da tela */
  right: 16px; /* Distância a partir da parte direita da tela */
`;

export const Icon = styled(Feather)`
font-size: ${RFValue(20)}px;
color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.card};
`

export const Title = styled.Text`
  color: white; /* Cor do texto */
  font-size: 16px; /* Tamanho da fonte */
  font-weight: bold; /* Peso da fonte em negrito */
`;

