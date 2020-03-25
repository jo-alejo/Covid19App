import React from 'react';
import {StyleSheet} from 'react-native';
import {Router, Stack, Scene, Tabs, Actions} from 'react-native-router-flux';
import InitScreen from './Components/InitialScreen';
import LoginScreen from './Components/LoginScreen';
import SignupScreen from './Components/SignupScreen';
import CaseListScreen from './Components/CaseListScreen';
import AddCaseScreen from './Components/AddCaseScreen';
import AccountSettingsScreen from './Components/AccountSettingsScreen';
import UpdateCaseScreen from './Components/UpdateCaseScreen';
import TabIcon from './Components/TabIcon';

const RouterComponent = () => {
  return (
    <Router sceneStyle={styles.sceneStyle}>
      <Stack key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="init" component={InitScreen} hideNavBar initial />
          <Scene key="login" component={LoginScreen} onBack={InitScreen} />
          <Scene key="signup" component={SignupScreen} onBack={InitScreen} />
        </Scene>
        <Tabs
          key="main"
          tabBarPosition="bottom"
          hideNavBar
          activeTintColor="#2b387c"
          inactiveTintColor="#7280ce"
          labelStyle={styles.labelStyle}
          tabBarStyle={styles.tabBarStyle}>
          <Scene
            key="casesList"
            component={CaseListScreen}
            hideNavBar
            title="List of cases"
            icon={TabIcon}
            iconName="ios-list-box"
          />
          <Scene
            key="addCase"
            component={AddCaseScreen}
            hideNavBar
            title="Add a case"
            icon={TabIcon}
            iconName="ios-add-circle"
          />
          <Scene
            key="accountSet"
            component={AccountSettingsScreen}
            hideNavBar
            title="Account"
            icon={TabIcon}
            iconName="md-person"
          />
        </Tabs>
        <Scene
          key="updateCase"
          component={UpdateCaseScreen}
          title="Update case"
        />
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
  tabBarStyle: {
    height: 60,
    borderTopColor: '#7280ce',
    borderTopWidth: 1,
    opacity: 0.98,
    paddingTop: 15,
    paddingBottom: 5,
    justifyContent: 'space-between',
  },
  labelStyle: {
    fontSize: 13,
    padding: 4,
  },
});

export default RouterComponent;
