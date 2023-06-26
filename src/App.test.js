import React from 'react';
import { IntlProvider } from 'react-intl';

import { render, screen } from '@testing-library/react';

import MenuComponent from './App';
import { getTexts } from './services/message.service';


test('renders Anthony Yvon Dumas', async () => {
  render(<IntlProvider locale={"fr"}
    defaultLocale={"fr"}
    messages={getTexts("fr")}>
    <MenuComponent />
  </IntlProvider>);
  expect(await screen.findByText("Anthony Yvon Dumas")).toBeInTheDocument();
});

