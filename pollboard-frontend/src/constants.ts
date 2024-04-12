export default {
  SOCKET_URL: `${process.env.SURL}`,
  API_URL: `${process.env.BURL}`,
  SOCKET_EVENTS: {
    UPDATE_ROOM: 'update_room',
    POLL_UPDATE: 'poll_update',
    LEAVE_ALL_ROOM: 'leave_all_room',
  },
};
