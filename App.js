import React, { useState } from "react";
import Home from "./screens/home";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from './routes/homeStack'

const getFonts = () =>
  Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);

  if (fontLoaded) {
    return <Navigator/>;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setfontLoaded(true)} />
    );
  }
}
