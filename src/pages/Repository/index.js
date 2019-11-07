import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { GitView } from './styles';

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    repository: '',
  };

  componentDidMount() {
    this.load();
  }

  load = () => {
    const { navigation } = this.props;

    const repository = navigation.getParam('user');

    this.setState({ repository });
  };

  render() {
    const { repository } = this.state;
    return <GitView source={{ uri: repository.html_url }} />;
  }
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
};
