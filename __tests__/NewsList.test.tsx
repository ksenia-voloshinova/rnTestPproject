import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useDispatch as useDispatchOriginal, useSelector as useSelectorOriginal } from 'react-redux';
import { NewsList } from '../src/components/NewsList';
import { fetchPostId } from '../src/api/fetch';
import { setNewsItem } from '../src/redux/reducers/news';

jest.mock('../src/api/fetch', () => ({
  fetchPostId: jest.fn()
}))
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const useDispatch = useDispatchOriginal as jest.Mock;
const useSelector = useSelectorOriginal as jest.Mock;

describe('NewsList', () => {
  it('renders news items correctly', () => {
    useSelector.mockReturnValue([
      { id: 1, title: 'News 1', content: 'Content 1' },
      { id: 2, title: 'News 2', content: 'Content 2' },
    ]);

    const { getByText } = render(<NewsList />);

    expect(getByText('News 1')).toBeTruthy();
    expect(getByText('News 2')).toBeTruthy();
  });

  it('dispatches setNewsItem action and navigates to NewsDetailedScreen on press', async () => {
    const newsData = { id: 1, title: 'News 1', content: 'Content 1' };
    const dispatch = jest.fn();
    const navigate = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue([]);
    (fetchPostId as jest.Mock).mockResolvedValue({ data: { news: newsData } });
    const { getByText } = render(
      <NewsList />
    );
    const newsItem = getByText('News 1');

    fireEvent.press(newsItem);

    expect(fetchPostId).toHaveBeenCalledWith(1);
    expect(dispatch).toHaveBeenCalledWith(setNewsItem(newsData));
    expect(navigate).toHaveBeenCalledWith('NewsDetailedScreen', {});
  });
});
