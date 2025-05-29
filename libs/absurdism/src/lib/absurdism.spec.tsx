import { render } from '@testing-library/react';

import Absurdism from './absurdism';

describe('Absurdism', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Absurdism />);
    expect(baseElement).toBeTruthy();
  });
});
