import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AvatarProvider } from '../../hooks/useAvatarUpload';
import { HiddenInput } from './index';

describe('<HiddenInput/>', () => {
  it('should verify if input exists', () => {
    render(
      <AvatarProvider>
        <HiddenInput />
      </AvatarProvider>
    );

    const input = screen.getByPlaceholderText('Upload your file here');

    expect(input).toBeInTheDocument();
  });

  it('should upload a file', async () => {
    const file = await new File(
      ['test'],
      'https://via.placeholder.com/140x100',
      {
        type: 'image/png',
      }
    );

    render(
      <AvatarProvider>
        <HiddenInput />
      </AvatarProvider>
    );

    const input = screen.getByLabelText(/input-upload/i) as HTMLInputElement;

    userEvent.upload(input, file);

    expect(input.files[0]).toStrictEqual(file);
    expect(input.files.item(0)).toStrictEqual(file);
    expect(input.files).toHaveLength(1);
  });
});
