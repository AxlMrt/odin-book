import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Register from './Register';

describe('Register components', () => {
  it('should test if all components are displayed', () => {
    render(<Register />);

    const inputs = document.querySelectorAll('input');
  });
});
