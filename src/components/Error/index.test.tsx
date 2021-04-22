import { screen, render } from '@testing-library/react';

import { AvatarProvider } from '../../hooks/useAvatarUpload';
import { Error } from './index';

import errorIcon from '../../assets/error.svg';

describe('<Error/>', () => {
  it('should verify if error text and image appears', () => {
    render(
      <AvatarProvider>
        <Error />
      </AvatarProvider>
    );

    const sorryText = screen.getByText(/sorry, the upload failed/i);
    const tryAgainText = screen.getByText(/try again/i);
    const imageError = screen.getByAltText('Image contains Error');

    expect(sorryText).toBeInTheDocument();
    expect(tryAgainText).toBeInTheDocument();
    expect(imageError).toHaveAttribute('src', errorIcon);
  });
});
