import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import PostTab from './tabScreens/CompanyPostTab';
import CollabTab from './tabScreens/CollabTab';
import AnalyticsTab from './tabScreens/CompanyAnalyticsTab';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={styles.header} noShadow={true} />
        <Tabs noShadow={true} locked={true} style={styles.tabs} tabBarUnderlineStyle={styles.underlineStyle} >
          <Tab heading="Posts" 
							 tabStyle={styles.tabs} 
							 activeTabStyle={styles.activeTab} 
							 textStyle={styles.inactiveText} 
							 activeTextStyle={styles.activeText}>
            <PostTab />
          </Tab>
					{/* <Tab heading="Events" 
							 tabStyle={styles.tabs} 
							 activeTabStyle={styles.activeTab} 
							 textStyle={styles.inactiveText} 
							 activeTextStyle={styles.activeText}>
            <CollabTab />
          </Tab> */}
					<Tab heading="Analytics" 
							 tabStyle={styles.tabs} 
							 activeTabStyle={styles.activeTab} 
							 textStyle={styles.inactiveText} 
							 activeTextStyle={styles.activeText}>
            <AnalyticsTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

// TODO: Change fonts and black underline
// TODO: Reduce width of card and height of brown item
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FDFDFD',
        shadowColor: "#FDFDFD",
        elevation: 0
    },
    tabs: {
        backgroundColor: '#FDFDFD',
        shadowColor: "#FDFDFD",
        elevation: 0, 
    },
    activeTab: {
      backgroundColor: '#FDFDFD'
    },
    underlineStyle: {
      borderBottomColor: '#121111',
      borderBottomWidth: 3
    },
    activeText: {
        color: '#121111'
    },
    inactiveText: {
        color: '#726969'
    }
});