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
  it('Should render login elements', () => {
    render(<Login />);

    const emailField = screen.getByPlaceholderText(/Adresse e-mail/);
    const passwordField = screen.getByPlaceholderText(/Mot de passe/);
    const submitBtn = screen.getByText(/Se connecter/);

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });
});

describe('Open modal', () => {
  it('Should open modal on click', async () => {
    render(<Login />);

    const modalBtn = screen.getByText(/Créer nouveau compte/);

    const modalTitle = screen.queryByText(/S'inscrire/);
    expect(modalTitle).not.toBeInTheDocument();

    fireEvent.click(modalBtn);
    expect(modalTitle).toBeDefined();
  });
});
