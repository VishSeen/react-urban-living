import Logo from '../logo';
import { render, screen } from '@testing-library/react';


test('Renders the Logo', () => {
    const element = render(<Logo />);
    expect(element).toBeTruthy();
});

