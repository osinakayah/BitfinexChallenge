import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  marginSeparator: 1,
  marginVertical: 10,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
}

export default metrics
