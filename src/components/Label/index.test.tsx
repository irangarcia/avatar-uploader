import { screen, render } from '@testing-library/react';

import { Label } from './index';

describe('<Label/>', () => {
  it('should verify if initial text and icon appears on screen', () => {
    render(<Label />);

    const organizationLogoText = screen.getByText(/organization logo/i);
    const dropTheImageText = screen.getByText(
      /drop the image here or click to browse./i
    );
    const imageIcon = screen.getByTitle(/image icon/i);

    expect(organizationLogoText).toBeInTheDocument();
    expect(dropTheImageText).toBeInTheDocument();
    expect(imageIcon).toBeInTheDocument();
  });
});
