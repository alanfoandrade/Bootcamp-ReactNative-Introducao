import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  Container,
  GitView,
  GitNav,
  GoBackButton,
  GoBackButtonText,
  RefreshButton,
  RefreshButtonText,
  StopLoadButton,
  StopLoadButtonText,
  GoForwardButton,
  GoForwardButtonText,
} from './styles';

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    repository: '',
    loading: true,
    canGoBack: false,
    canGoForward: false,
  };

  componentDidMount() {
    this.load();
  }

  onNavigationStateChange = navState => {
    console.tron.log(navState);
    console.tron.log(navState.canGoBack);

    this.setState({
      loading: navState.loading,
      canGoBack: navState.canGoBack,
      canGoForward: navState.canGoForward,
    });
  };

  onBack = () => {
    const { canGoBack } = this.state;

    if (canGoBack) this.webView.goBack();
  };

  onForward = () => {
    const { canGoForward } = this.state;

    if (canGoForward) this.webView.goForward();
  };

  onReload = () => {
    this.webView.reload();
  };

  onStop = () => {
    this.webView.stopLoading();
  };

  load() {
    const { navigation } = this.props;

    const repository = navigation.getParam('user');

    this.setState({ repository });
  }

  render() {
    const { repository, loading, canGoBack, canGoForward } = this.state;

    return (
      <Container>
        <Spinner
          visible={loading}
          textContent="Loading..."
          textStyle={{ color: '#7159c1' }}
        />
        <GitView
          ref={webView => (this.webView = webView)}
          source={{ uri: repository.html_url }}
          onNavigationStateChange={this.onNavigationStateChange}
        />
        <GitNav>
          <GoBackButton disabled={!canGoBack} onPress={this.onBack}>
            <GoBackButtonText>Back</GoBackButtonText>
          </GoBackButton>

          <RefreshButton disabled={!canGoBack} onPress={this.onReload}>
            <RefreshButtonText>Refresh</RefreshButtonText>
          </RefreshButton>

          <StopLoadButton onPress={this.onStop}>
            <StopLoadButtonText>Stop</StopLoadButtonText>
          </StopLoadButton>

          <GoForwardButton disabled={!canGoForward} onPress={this.onForward}>
            <GoForwardButtonText>Forward</GoForwardButtonText>
          </GoForwardButton>
        </GitNav>
      </Container>
    );
  }
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
};
