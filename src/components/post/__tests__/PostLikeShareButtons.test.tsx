import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PostLikeShareButtons, {
  PostLikeShareButtonsProps,
} from '../PostLikeShareButtons';

describe('PostLikeShareButtons', () => {
  const setup = (props: Partial<PostLikeShareButtonsProps> = {}) => {
    const initialProps: PostLikeShareButtonsProps = {
      onLikeToggle: () => {},
      onShareClick: () => {},
      likes: 0,
      liked: false,
      postId: 'id',
    };
    const utils = render(<PostLikeShareButtons {...initialProps} {...props} />);
    return {
      ...utils,
    };
  };
  it('renders properly', () => {
    setup();
  });
  it('renders likes', () => {
    const { getByText } = setup({
      likes: 123,
    });
    getByText('123');
  });
  it('calls onLikeToggle', () => {
    const onLikeToggle = jest.fn();
    const { getByTestId } = setup({
      onLikeToggle,
    });
    const likeButton = getByTestId('like');
    fireEvent.click(likeButton);
    expect(onLikeToggle).toBeCalled();
  });
});
