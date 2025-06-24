import { render, screen } from '@testing-library/react';
import Todo from './Todo';
import { beforeEach, vi } from 'vitest';

const deleteMock = vi.fn();
const completeMock = vi.fn();

describe('Todo', () => {
  beforeEach(() => {
    const todo = { _id: 1, text: 'Test todo', completed: false };

    render(
      <Todo todo={todo} onDelete={deleteMock} onComplete={completeMock} />
    );
  });

  it('renders the todo title', () => {
    expect(screen.getByText('Test todo')).toBeDefined();
  });
});
