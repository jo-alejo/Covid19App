import React from 'react';
import {StyleSheet} from 'react-native';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import InitScreen from './Components/InitialScreen';
import LoginScreen from './Components/LoginScreen';
import SignupScreen from './Components/SignupScreen';
import CaseListScreen from './Components/CaseListScreen';

const RouterComponent = () => {
  return (
    <Router sceneStyle={styles.sceneStyle}>
      <Stack key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="init" component={InitScreen} hideNavBar initial />
          <Scene key="login" component={LoginScreen} onBack={InitScreen} />
          <Scene key="signup" component={SignupScreen} onBack={InitScreen} />
        </Scene>
        <Scene key="main" hideNavBar>
          <Scene
            key="casesList"
            component={CaseListScreen}
            hideNavBar
            initial
          />
        </Scene>
      </Stack>
    </Router>
  );
};

const styles = StyleSheet.create({
  sceneStyle: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default RouterComponent;
