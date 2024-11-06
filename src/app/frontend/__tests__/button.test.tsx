// Button.test.tsx
import { composeStories } from '@storybook/testing-library';
import * as ButtonStories from './Button.stories';

const { Primary } = composeStories(ButtonStories);

describe('Button Stories', () => {
  it('renders the Primary button correctly', () => {
    const { getByText } = render(<Primary />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('triggers the click event', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Primary {...{ onClick: handleClick }} />);
    
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
