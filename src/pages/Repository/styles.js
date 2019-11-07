import styled from 'styled-components';
import { WebView } from 'react-native-webview';

export const GitView = styled(WebView).attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;
