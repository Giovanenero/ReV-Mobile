import { createDrawerNavigator } from "@react-navigation/drawer"
import { Feather } from "@expo/vector-icons"

//import StackRoutes from "./stack.routes";
import Home from "../Screens/Home";
import Cadastre from "../Screens/Cadastre";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return (
        <Drawer.Navigator screenOptions={{title: ''}}>
            <Drawer.Screen
                name="Home" 
                component={Home}
                options={{
                    drawerIcon: ({color, size}) => <Feather name="home" color={color} size={size}/>,
                    drawerLabel: 'Início'
                }}
            />
            <Drawer.Screen
                name="cadastre" 
                component={Cadastre}
                options={{
                    drawerIcon: ({color, size}) => <Feather name="user-plus" color={color} size={size}/>,
                    drawerLabel: 'Cadastro'
                }}
            />
        </Drawer.Navigator>
    );
}