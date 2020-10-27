import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import PortfolioTab from './tabs/PortfolioTab';
import CollabTab from './tabs/CollabTab';
import ProjectsTab from './tabs/ProjectsTab';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={styles.header} noShadow={'true'} />
        <Tabs>
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
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(230, 230, 230,1)'
    },
    tabs: {
        backgroundColor: 'rgba(230, 230, 230,1)'
    },
    activeText: {
        color: 'black'
    },
    inactiveText: {
        color: '#726969'
    }
});