import React from 'react';
import ReactDOM from 'react-dom';
import App, {coachAndPlayers}from './App';
import { response } from 'express';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("the  data", () => {
  const thisData = response.json();
   expect(fetchData()).resolves.toBe(response.json());
});

test("Don't forget the Coach", () => {
  //Arrange
  const currentData = 101;
  //Act
  const actual = coachAndPlayers(currentData);
  //Assert
  expect(actual).toBe();

})