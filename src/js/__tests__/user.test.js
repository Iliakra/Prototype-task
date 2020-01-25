/* eslint-disable no-undef */
import Character from '../app';


test('if there is damage of 5 points to the Characters health', () => {
  const obj = new Character('Trey', 'Swordsman');
  obj.damage(5);
  const received = obj;
  const expected = {
    name: 'Trey', type: 'Swordsman', health: 97, attack: 10, defence: 40,
  };
  expect(received).toEqual(expected);
});
