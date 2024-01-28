import  Login  from "../screens/Login";
import Start from "../screens/Start";
import Cadastre from "../screens/Cadastre";
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