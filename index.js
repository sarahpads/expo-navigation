// Reference: https://www.unistyl.es/v3/guides/expo-router
import { StyleSheet } from 'react-native-unistyles';

import 'expo-router/entry';

StyleSheet.configure({
  themes: {
    dark: {},
  },
  breakpoints: {
    mobile: 0,
    smallTablet: 744,
    largeTablet: 1024,
    xlargeTablet: 1366,
  },
  settings: {
    initialTheme: 'dark',
  },
});

