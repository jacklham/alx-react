import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Notification />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('render without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists());
  });

  it('Notification Item with html', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const nItem = wrapper.find('NotificationItem');
    expect(wrapper.exists());
    expect(nItem.exists());
    expect(nItem).toBeDefined();
  });
  it('Notification with displayDrawer false', () => {
    const wrapper = shallow(<Notifications />);
    const dNoti = wrapper.find('div.Notifications');
    expect(wrapper.exists());
    expect(dNoti.exists());
    expect(dNoti).toHaveLength(0);
  });
});

describe('listNotifications with values', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  let latestNotification = undefined;
  let listNotifications = undefined;

  beforeEach(() => {
    latestNotification = getLatestNotification();
    listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: latestNotification } },
    ];
  });

  it('values', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    const nItem = wrapper.find('NotificationItem');
    expect(wrapper.exists());
    expect(nItem.exists());
    expect(nItem).toBeDefined();
    expect(nItem).toHaveLength(3);
  });
});

describe('listNotifications without values', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  let listNotifications = undefined;
  beforeEach(() => {
    listNotifications = [];
  });

  it('empty', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />

