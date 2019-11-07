import styled from 'styled-components';
import { WebView } from 'react-native-webview';

export const Container = styled.View`
  flex: 1;
`;

export const GitView = styled(WebView).attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;
