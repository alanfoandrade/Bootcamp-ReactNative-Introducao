import styled from 'styled-components';
import { WebView } from 'react-native-webview';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const GitNav = styled.View`
  flex-direction: row;
`;

export const GoBackButton = styled(RectButton)`
  height: 30px;
  width: 25%;
  background-color: #bbb;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const GoBackButtonText = styled.Text``;

export const RefreshButton = styled(RectButton)`
  height: 30px;
  width: 25%;
  background-color: #bbb;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const RefreshButtonText = styled.Text``;

export const StopLoadButton = styled(RectButton)`
  height: 30px;
  width: 25%;
  background-color: #bbb;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const StopLoadButtonText = styled.Text``;

export const GoForwardButton = styled(RectButton)`
  height: 30px;
  width: 25%;
  background-color: #bbb;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const GoForwardButtonText = styled.Text``;

export const GitView = styled(WebView).attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;
