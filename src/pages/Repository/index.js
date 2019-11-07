import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';
import { Container, GitView } from './styles';

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    repository: '',
    loading: true,
  };

  componentDidMount() {
    const { navigation } = this.props;

    const repository = navigation.getParam('user');

    this.setState({ repository });
  }

  handleLoading(loading) {
    this.setState({ loading });
  }

  render() {
    const { repository, loading } = this.state;

    return (
      <Container>
        <Spinner
          visible={loading}
          textContent="Loading..."
          textStyle={{ color: '#7159c1' }}
        />
        <GitView
          source={{ uri: repository.html_url }}
          onLoadStart={() => this.handleLoading(true)}
          onLoad={() => this.handleLoading(false)}
        />
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
