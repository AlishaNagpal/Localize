import { StyleSheet } from 'react-native';
import { vh, vw, Colors } from '../../Constants';
import { isRTL } from '../../utils/i18n';
// import * as RTL from '../../utils/i18n';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    overall: {
        marginLeft: isRTL ? vh(0) : vh(30),
        marginRight: isRTL ? vh(30) : vh(0),
    },
    deskNow: {
        marginTop: vh(90),
        fontSize: vh(25),
        marginLeft: isRTL ? vh(0) : vh(7),
        marginRight: isRTL ? vh(7) : vh(0),
    },
    work: {
        marginTop: vh(25),
        fontSize: vh(30),
        fontWeight:'500'
    },
    you_want:{
        fontWeight:'500',
        fontSize: vh(30)
    },
    enterEmail:{
        marginTop:vh(40),
        fontSize:vh(20),
    },
    textInput:{
        marginTop:vh(30),
        backgroundColor:Colors.textInputGray,
        color:Colors.gray,
        height:vh(50),
        width:vw(320),
        borderRadius:vh(10),
        paddingLeft: isRTL ? vh(0) : vh(15),
        paddingRight: isRTL ? vh(15) : vh(0),
        fontSize:vh(14),
        marginLeft: isRTL ? vw(60) : vw(0)
    },
    textInput2:{
        marginTop:vh(30),
        backgroundColor:Colors.blue,
        color:Colors.gray,
        height:vh(50),
        width:vw(320),
        borderRadius:vh(10),
        fontSize:vh(14),
        alignItems:'center',
        justifyContent: 'center',
        marginLeft: isRTL ? vw(60) : vw(0)
    },
    number:{
        marginTop:vh(16),
        fontSize:vh(16),
        marginLeft: isRTL ? vh(0) : vw(135),
        // marginRight: isRTL ? vw(135) : vh(0),
        color:Colors.blue
    },
    buttonText:{
        color:Colors.white,
        textTransform: 'uppercase',
        fontSize:vh(18)
    }
})

export default styles;
