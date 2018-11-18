/* global chrome */

import React from 'react';
import styled, { css } from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

export default function App() {
  let fetchedBookmarks;
  
  chrome.bookmarks.getTree((bookmarks) => {
    fetchedBookmarks = bookmarks;
    console.log(bookmarks);
  });

  return (
    <Provider store={store}>
      <Container>
        Hello world!
        {fetchedBookmarks && JSON.stringify(fetchedBookmarks, null, 2)}
      </Container>
    </Provider>
  );
}

const Container = styled.div`
  background-color: #eee;
  position: relative;
  padding-top: 56px;
  min-height: 100vh;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`;
