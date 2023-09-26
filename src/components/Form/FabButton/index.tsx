import React from "react";
import { TouchableOpacityProps, View } from 'react-native'

import { Container, Icon } from './styles'

export function FabButton({ ...rest }: TouchableOpacityProps){
    return (
        <View>
        <Container { ...rest }>
          <Icon name='plus'/>
        </Container>
      </View>)
}
