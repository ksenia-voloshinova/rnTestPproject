import 'react-native';
import React from 'react';
import {News} from '../src/components/News';
import renderer from 'react-test-renderer';
import {NewsData} from '../src/types';

it('News component renders correctly', async () => {
  const newsItem = {
    id: 'string',
    title: 'string',
    image_url: 'string',
    image_additional_ur: 'string',
    body: 'string',
    short_text: 'string',
    created_at: 'string',
    category: 'string',
    icon: 'string',
    model_name: 'string',
    table_name: 'string',
  } as unknown as NewsData;

  renderer.create(<News news={newsItem} />);
});
