import { render, screen } from '@testing-library/react';
import App from './App';

test('the conuter starts at 0', () => {
  render(<App />);
  //screen object를 이용하여 원하는 엘레멘트에 접근
  const counterElement = screen.getByTestId("counter");

  //id 가 카운터인 엘레멘트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});

test('마이너스 버튼', () => {
  render(<App />);
  //screen object를 이용하여 원하는 엘레멘트에 접근
  const minusButtonElement = screen.getByTestId("minus-button");

  //id 가 마이너스버튼인 엘레멘트의 텍스트가 - 인지 테스트
  expect(minusButtonElement).toHaveTextContent('-');
});

test('플러스 버튼', () => {
  render(<App />);
  //screen object를 이용하여 원하는 엘레멘트에 접근
  const plusButtonElement = screen.getByTestId("plus-button");

  //id 가 플러스 버튼인 엘레멘트의 텍스트가 + 인지 테스트
  expect(plusButtonElement).toHaveTextContent('+');
});
