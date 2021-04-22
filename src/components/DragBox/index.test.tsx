import { screen, render } from '@testing-library/react';
import { AvatarProvider } from '../../hooks/useAvatarUpload';

import { DragBox } from './index';

describe('<DragBox/>', () => {
  it('should verify if have any children', () => {
    render(
      <AvatarProvider>
        <DragBox>
          <p data-testid="child">Teste</p>
        </DragBox>
      </AvatarProvider>
    );

    const container = screen.getByTestId(/drag-box-container/i);
    const child = screen.getByTestId(/child/i);

    expect(container.children.length).toBe(1);
    expect(child).toBeDefined();
  });
});
