import ChangeMode from '@/common/components/ChangeMode';
import { COOKIES } from '@/common/constants/cookies';
import { MODE } from '@/common/constants/mode';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import 'next/navigation';

jest.mock('next-client-cookies', () => ({
  useCookies: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

describe('ChangeMode', () => {
  let mockCookieStore, mockRouter, mockPathname;

  beforeEach(() => {
    mockCookieStore! = {
      get: jest.fn(),
      set: jest.fn(),
    };
    require('next-client-cookies').useCookies.mockReturnValue(mockCookieStore!);

    mockPathname = '/test-path';
    const mockUsePathname = require('next/navigation').usePathname;
    mockUsePathname.mockReturnValue(mockPathname);

    mockRouter = { replace: jest.fn() };
    const mockUseRouter = require('next/navigation').useRouter;
    mockUseRouter.mockReturnValue(mockRouter);

    // Clean up `body` classes before each test
    document.body.className = '';
  });

  it('toggles to dark mode when the toggle is switched on', () => {
    mockCookieStore!.get.mockReturnValueOnce(MODE.LIGHT);

    render(<ChangeMode />);
    const toggle = screen.getByRole('checkbox');

    // Simulate toggling on
    fireEvent.click(toggle);

    expect(toggle).toBeChecked();
    expect(window.document.body).toHaveClass('dark');
    expect(mockCookieStore!.set).toHaveBeenCalledWith(COOKIES.MODE, MODE.DARK);
    expect(mockRouter!.replace).toHaveBeenCalledWith(mockPathname!);
  });

  it('toggles to light mode when the toggle is switched off', () => {
    // Simulate cookie returning dark mode
    mockCookieStore!.get.mockReturnValueOnce(MODE.DARK);

    // Simulate initial dark mode state
    document.body.classList.add('dark');

    render(<ChangeMode />);
    const toggle = screen.getByRole('checkbox');

    // Confirm initial state
    expect(document.body).toHaveClass('dark');

    // Simulate toggling off
    fireEvent.click(toggle);

    // Assert state after toggling
    expect(document.body).not.toHaveClass('dark');
    expect(mockCookieStore!.set).toHaveBeenCalledWith(COOKIES.MODE, MODE.LIGHT);
    expect(mockRouter!.replace).toHaveBeenCalledWith(mockPathname!);
  });
});
