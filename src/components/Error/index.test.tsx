import { screen, render } from '@testing-library/react';

import { Error } from './index';
import errorIcon from '../../assets/error.svg';

describe('<Error/>', () => {
  it('should show error message and failed image', () => {
    render(<Error />);

    const sorryText = screen.getByText(/sorry, the upload failed./i);
    const tryAgainText = screen.getByText(/try again/i);

    expect(sorryText).toBeInTheDocument();
    expect(tryAgainText).toBeInTheDocument();
  });
});
