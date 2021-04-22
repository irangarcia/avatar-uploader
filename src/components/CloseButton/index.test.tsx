import { render, fireEvent } from '@testing-library/react';

import { AvatarProvider } from '../../hooks/useAvatarUpload';
import { CloseButton } from './index';

describe('<CloseButton/>', () => {
  it('triggers clicks correctly', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(
      <AvatarProvider>
        <CloseButton onClick={onClick} />
      </AvatarProvider>
    );

    fireEvent.click(getByTestId('close-button'));

    expect(onClick).toBeCalledTimes(1);
  });
});
