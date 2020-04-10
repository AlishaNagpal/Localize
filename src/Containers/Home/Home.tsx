import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import styles from './styles';
import { setI18nConfig, translate } from '../../utils/Translations';
import * as RNLocalize from "react-native-localize";

export interface HomeProps {
}

export interface HomeState {
}

export default class HomeComponent extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    setI18nConfig(); // set initial config
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.deskNow} > {translate('deskNow')}  </Text>
      </View>
    );
  }
}

// <Text style={styles.value}>{translate('hello')}</Text>