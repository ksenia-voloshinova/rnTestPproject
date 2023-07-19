import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {
  Provider,
  useDispatch as useDispatchOriginal,
  useSelector as useSelectorOriginal,
} from 'react-redux';
import {useNavigation as useNavigationOriginal} from '@react-navigation/native';
import {NewsList} from '../src/components/NewsList';
import {fetchPostId} from '../src/api/fetch';
import {NavigationContainer} from '@react-navigation/native';
import configureStore from 'redux-mock-store';

jest.mock('../src/api/fetch', () => ({
  fetchPostId: jest.fn().mockResolvedValue({
    data: {news: {id: 1, title: 'News 1', content: 'Content 1'}},
  }),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockStore = configureStore([]);
const initialState = {}; // Set your initial state here if needed
const store = mockStore(initialState);

// const newsList = <NavigationContainer><Provider store={store}><NewsList /></Provider></NavigationContainer>;
const newsList = (
    <NavigationContainer>
        <NewsList />
    </NavigationContainer>
);

const useDispatch = useDispatchOriginal as jest.Mock;
const useSelector = useSelectorOriginal as jest.Mock;
const useNavigation = useNavigationOriginal as jest.Mock;

describe('NewsList', () => {
  it('renders news items correctly', () => {
    useSelector.mockReturnValue([
      {id: 1, title: 'News 1', content: 'Content 1'},
      {id: 2, title: 'News 2', content: 'Content 2'},
    ]);

    const {getByText} = render(newsList);

    expect(getByText('News 1')).toBeTruthy();
    expect(getByText('News 2')).toBeTruthy();
  });

  // it('should handle click event and navigate to NewsDetailedScreen', async () => {
  //   const newItem = {id: 1, title: 'News 1', content: 'Content 1'};
  //
  //
  //   const mockFetchPostId = jest.fn().mockResolvedValue({ data: { news: newItem } });
  //   const mockSetNewsItem = jest.fn();
  //   const mockNavigate = jest.fn();
  //   useSelector.mockReturnValue([newItem]);
  //
  //   jest.mock('../src/api/fetch', () => ({
  //     fetchPostId: mockFetchPostId,
  //   }));
  //
  //   jest.mock('../src/redux/reducers/news', () => ({
  //     setNewsItem: mockSetNewsItem,
  //   }));
  //
  //   jest.mock('@react-navigation/native', () => ({
  //     useNavigation: () => ({
  //       navigate: mockNavigate,
  //     }),
  //   }));
  //
  //   const { getByText } = render(newsList);
  //
  //   fireEvent.press(getByText(newItem.title)); // Simulate the click event
  //
  //   // Wait for any async actions to complete
  //   await waitFor(() => expect(mockFetchPostId).toHaveBeenCalled());
  //
  //   // Assert that the functions were called with the expected arguments
  //   // expect(mockFetchPostId).toHaveBeenCalledWith(news.id);
  //   // expect(mockSetNewsItem).toHaveBeenCalledWith({ id: '123', title: 'News Title', content: 'News Content' });
  //   // expect(mockNavigate).toHaveBeenCalledWith('NewsDetailedScreen', {});
  // });
});
