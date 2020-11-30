import React from 'react';
import renderer from 'react-test-renderer';

import StatusMessage from '../components/StatusMessage/StatusMessage'

test('Test component StatusMessage with success message', () => {
  const component = renderer.create(
    <StatusMessage
      msg="success status"
      success={true}
    />
  );

  let tree = component.toJSON();

  expect(tree.children).toContain("success status");
  expect(tree.type).toEqual("div");
  expect(tree.props.className).toMatch(/msg__success/);
});

test('Test component StatusMessage with fail message', () => {
  const component = renderer.create(
    <StatusMessage
      msg="fail status"
      success={false}
    />
  );

  let tree = component.toJSON();

  expect(tree.children).toContain("fail status");
  expect(tree.type).toEqual("div");
  expect(tree.props.className).toMatch(/msg__error/);
});