import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Register from './Register';

describe('register form', () => {
  it('should render register form', () => {
    render(<Register />);
    const registerForm = document.getElementById('register-form');
    expect(registerForm).toBeDefined();
  });

  it('should render submit button', () => {
    render(<Register />);
    const submitBtn = document.getElementById('submitBtn');
    expect(submitBtn).toBeDefined();
  });
});

describe('Register form', () => {
  it('should test input fields', () => {
    render(<Register open={true} />);

    const submitBtn = document.getElementById('submitBtn');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');

    const actualYear = new Date().getFullYear();

    expect(firstName).toBeTruthy();
    expect(firstName?.value).toBe('');
    expect(lastName).toBeTruthy();
    expect(lastName?.value).toBe('');
    expect(email).toBeTruthy();
    expect(email?.value).toBe('');
    expect(password).toBeTruthy();
    expect(password?.value).toBe('');

    expect(day).toBeTruthy();
    expect(day?.value).toBe('1');
    expect(month).toBeTruthy();
    expect(month?.value).toBe('0');
    expect(year).toBeTruthy();
    expect(year?.value).toBe(actualYear.toString());

    if (
      firstName &&
      lastName &&
      email &&
      password &&
      day &&
      month &&
      year
    ) {
      firstName.textContent = 'Jane';
      expect(firstName.textContent).toBe('Jane');
      fireEvent.change(firstName, { target: { value: 'Jane' } });
      expect(firstName.value).toBe('Jane');

      lastName.textContent = 'Doe';
      fireEvent.change(lastName, { target: { value: 'Doe' } });
      expect(lastName.textContent).toBe('Doe');
      expect(lastName.value).toBe('Doe');

      email.textContent = 'jane@doe.fr';
      fireEvent.change(email, { target: { value: 'jane@doe.fr' } });
      expect(email.textContent).toBe('jane@doe.fr');
      expect(email.value).toBe('jane@doe.fr');

      password.textContent = 'password';
      fireEvent.change(password, { target: { value: 'password' } });
      expect(password.textContent).toBe('password');
      expect(password.value).toBe('password');

      day.textContent = '15';
      expect(day.textContent).toBe('15');

      month.textContent = 'fév';
      expect(month.textContent).toBe('fév');

      year.textContent = '1990';
      expect(year.textContent).toBe('1990');
    }
  });
});
