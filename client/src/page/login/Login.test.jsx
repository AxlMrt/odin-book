import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Reception page', () => {
  it('should render hero', () => {
    render(<Login />);

    const hero = screen.getByText(/odinbook/);
    const paraHero = screen.getByText(
      /Avec OdinBook, partagez et restez en contact avec votre entourage./
    );

    expect(hero).toBeDefined();
    expect(paraHero).toBeDefined();
  });
});

describe('Login form', () => {
  it('Should render inputs and submit button', () => {
    render(<Login />);

    const inputMail = document.getElementById('email');
    const inputPass = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');

    expect(inputMail).toBeTruthy();
    expect(inputMail).toBeRequired();
    expect(inputPass).toBeTruthy();
    expect(inputPass).toBeRequired();
    expect(submitBtn).toBeTruthy();
  });

  it('Should test input fields', () => {
    render(<Login />);
    const inputMail = document.getElementById('email');
    const inputPass = document.getElementById('password');

    expect(inputMail).toBeTruthy();
    expect(inputMail?.textContent).toBe('');
    expect(inputPass).toBeTruthy();
    expect(inputPass?.textContent).toBe('');

    if (inputMail && inputPass) {
      inputMail.textContent = 'jane@doe.com';
      expect(inputMail.textContent).toBe('jane@doe.com');

      inputPass.textContent = 'password';
      expect(inputPass.textContent).toBe('password');
    }
  });

  it('Should test input type', () => {
    render(<Login />);
    const inputMail = document.getElementById('email');
    const inputPass = document.getElementById('password');

    if (inputMail && inputPass) {
      expect(inputMail.type).toBe('email');
      expect(inputPass.type).toBe('password');
    }
  });

  it('Should test value change', () => {
    render(<Login />);

    const inputMail = document.getElementById('email');
    const inputPass = document.getElementById('password');

    fireEvent.change(inputMail, {
      target: {
        value: 'john@doe'
      }
    });

    fireEvent.change(inputPass, {
      target: {
        value: 'password'
      }
    });

    expect(inputMail.value).toBe('john@doe');
    expect(inputPass.value).toBe('password');
  });
});

describe('Open modal', () => {
  it('Should open modal on click', () => {
    render(<Login />);

    const modalBtn = screen.getByText(/Créer nouveau compte/);

    const modalTitle = screen.queryByText(/S'inscrire/);
    expect(modalTitle).not.toBeInTheDocument();

    fireEvent.click(modalBtn);
    expect(modalTitle).toBeDefined();
  });
});
