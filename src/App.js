import React from 'react';
import { ThemeProvider } from 'styled-components';
import Space from '@rebass/space';

import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { PageLayout, Principles, Practices, H1 } from './components/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <GlobalStyle />

        <H1>Agile cards</H1>

        <Space mb={5}>
          <div>
            <Principles />
          </div>

          <div>
            <Practices />
          </div>
        </Space>
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
