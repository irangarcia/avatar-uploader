import { screen, render } from '@testing-library/react';
import { AvatarProvider } from '../../hooks/useAvatarUpload';

import { CroppedImage } from './index';

describe('<CroppedImage/>', () => {
  it('should verify if cropped container renders correctly', async () => {
    render(
      <AvatarProvider>
        <CroppedImage />
      </AvatarProvider>
    );

    const croppedImage = screen.getByTestId(/cropped-image/i);

    expect(croppedImage).toBeTruthy();
  });
});
