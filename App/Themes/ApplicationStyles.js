import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background
    },
    container: {
      flex: 1,
      paddingTop: Metrics.marginVertical,
      backgroundColor: Colors.background
    },
  }
}

export default ApplicationStyles
