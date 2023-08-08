import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {SignIn, SplashScreen, StartStock, InputStock, FinishStock, Dashboard, AfterDashboard, 
    ListClosing, FirstPage, DummyPage, SecondPage, 
    ThirdPage, StartStockDefault, DashboardDefault, InputStockDefault
    , ListClosingDefault} from '../pages';


const Stack = createStackNavigator();

const Router = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="FirstPage" component={FirstPage}/>
        <Stack.Screen name="StartStock" component={StartStock}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="AfterDashboard" component={AfterDashboard}/>
        <Stack.Screen name="InputStock" component={InputStock}/>
        <Stack.Screen name="FinishStock" component={FinishStock}/>
        <Stack.Screen name="ListClosing" component={ListClosing}/>
        <Stack.Screen name="DummyPage" component={DummyPage}/>
        <Stack.Screen name="SecondPage" component={SecondPage}/>
        <Stack.Screen name="ThirdPage" component={ThirdPage}/>
        <Stack.Screen name="StartStockDefault" component={StartStockDefault}/>
        <Stack.Screen name="DashboardDefault" component={DashboardDefault}/>
        <Stack.Screen name="InputStockDefault" component={InputStockDefault}/>
        <Stack.Screen name="ListClosingDefault" component={ListClosingDefault}/>
    </Stack.Navigator>
    )
}

export default Router;