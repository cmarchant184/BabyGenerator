// Button.stories.test.tsx
import { render, fireEvent } from '@testing-library/react';
import { Primary } from './Button.stories';

describe('Button Component', () => {
  it('should render with the correct label', () => {
    const { getByText } = render(<Primary />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('should call the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button label="Click me" onClick={handleClick} />);
    
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
