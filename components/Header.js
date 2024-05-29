import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return ( 
        <View style={style.header}>
            <Text style={style.title}>Miles Matter</Text>
        </View>
     );
}

const style = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }
})
 
export default Header;