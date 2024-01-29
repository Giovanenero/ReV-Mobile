import  Login  from "../Screens/Login";
import Start from "../Screens/Start";
import Cadastre from "../Screens/Cadastre";
//import Home from "../screens/Home";
//import DrawerRoutes from "./drawer.routes";
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

/*
function MyStack(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  );
}
*/


export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastre" component={Cadastre}/>
        {/*<Stack.Screen name="Home" component={DrawerRoutes}/>*/}
    </Stack.Navigator>
  );
}