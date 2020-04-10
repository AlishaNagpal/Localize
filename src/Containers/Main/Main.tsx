import * as React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    I18nManager
} from 'react-native';

import { strings } from '../../utils/i18n';
import styles from './styles';
import I18n from 'react-native-i18n';

export interface AppProps {
}

export interface AppState {
    email: string,
}


export default class Main extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            email: '',
        };
    }

    public render() {
        return (
            <View style={styles.container} >
                <View style={styles.overall} >
                    <Text style={styles.deskNow} >{strings('deskNow')}</Text>
                    <Text style={styles.work}> {strings('work')} </Text>
                    <Text style={styles.you_want}> {strings('work_want')} </Text>
                    <Text style={styles.enterEmail}> {strings('enter_email')} </Text>
                    <TextInput
                        defaultValue={this.state.email}
                        placeholder={strings('enter_email_TI')}
                        style={styles.textInput}
                        onChangeText={(val) => this.setState({ email: val })}
                    />
                    <Text style={styles.number} > {strings('use_Number')} </Text>
                    <TouchableOpacity style={styles.textInput2}
                        onPress={() => {
                            I18n.locale = 'ar'
                            I18nManager.allowRTL(true)
                        }}
                    >
                        <Text style={styles.buttonText} > {strings('continue')} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
