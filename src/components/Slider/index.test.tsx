import { render } from '@testing-library/react';
import { AvatarProvider } from '../../hooks/useAvatarUpload';

import { Slider } from './index';

describe('<Slider/>', () => {
  it('should verify if renders correctly', async () => {
    const { queryByTestId } = render(
      <AvatarProvider>
        <Slider />
      </AvatarProvider>
    );

    expect(queryByTestId('slider')).toBeTruthy();
  });
});
