import {
    StyleSheet
} from 'react-native';

const blue = '#90caf9';
const navy = '#1a237e';
const white = '#fff';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: blue
    },
    input: {
        height: 50,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        margin: 2,
        textAlign: 'center',
        backgroundColor: white
    },
    buttonContainer: {
        justifyContent: 'center',
        height: 50,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        margin: 2,
        backgroundColor: white
    },
    button: {
        textAlign: 'center'
    },
    links: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    link: {
        color: navy
    },
    feedback: {
        textAlign: 'center'
    },
    topics: {
        flex: 1,
        backgroundColor: blue
    },
    header: {
        marginBottom: 20,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    body: {
        flex: 24,
        paddingRight: 20,
        paddingLeft: 20
    },
    title: {
        textAlign: 'center'
    },
    list: {
        flex: 1
    },
    row: {
        alignItems: 'center',
        backgroundColor: white,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        margin: 2,
        padding: 10
    },
    rowTitle: {
        fontWeight: 'bold'
    },
    detailTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    detailSubtitle: {
        textAlign:'center',
        fontSize: 14
    },
    comment:{
        color: '#777',

    }
});

export default styles;