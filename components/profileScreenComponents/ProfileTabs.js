import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import PortfolioTab from './tabScreens/PortfolioTab';
import CollabTab from './tabScreens/CollabTab';
import ProjectsTab from './tabScreens/ProjectsTab';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={styles.header} noShadow={true} />
        <Tabs noShadow={true} locked={true} style={styles.tabs}>
          <Tab heading="Portfolio" 
							 tabStyle={styles.tabs} 
							 activeTabStyle={styles.tabs} 
							 textStyle={styles.inactiveText} 
							 activeTextStyle={styles.activeText}>
            <PortfolioTab />
          </Tab>
					<Tab heading="Collaborations" 
							 tabStyle={styles.tabs} 
							 activeTabStyle={styles.tabs} 
							 textStyle={styles.inactiveText} 
							 activeTextStyle={styles.activeText}>
            <CollabTab />
          </Tab>
					<Tab heading="Projects" 
							 tabStyle={styles.tabs} 
							 activeTabStyle={styles.tabs} 
							 textStyle={styles.inactiveText} 
							 activeTextStyle={styles.activeText}>
            <ProjectsTab />
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
        elevation: 0
    },
    activeText: {
        color: 'black'
    },
    inactiveText: {
        color: '#726969'
    }
});