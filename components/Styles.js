import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        //justifyContent: 'center',
        padding: 24,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    warning: {
        color: 'red'
    },
    row: {
        padding: 4,
        borderBottomColor: 'red', 
        borderBottomWidth: StyleSheet.hairlineWidth
    }
})

export default styles;