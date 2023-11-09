import { createSlice } from '@reduxjs/toolkit';

// third-party
import { EventInput } from '@fullcalendar/common';

// project import
import axios from 'utils/axios';
import { dispatch } from 'store';

// types
import { CalendarProps } from 'types/calendar';
import { openSnackbar } from './snackbar';

const initialState: CalendarProps = {
  calendarView: 'dayGridMonth',
  error: false,
  upcomingMeetings: [],
  historyMeetings: [],
  isLoader: false,
  isModalOpen: false,
  selectedEventId: null,
  selectedRange: null,
  allMeetings: [],
  meetingDetail: null
};

// ==============================|| CALENDAR - SLICE ||============================== //

const calendar = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    // loader
    loading(state) {
      state.isLoader = true;
    },

    // error
    hasError(state, action) {
      state.isLoader = false;
      state.error = action.payload;
    },

    // event list
    setUpcomingMeetings(state, action) {
      state.isLoader = false;
      state.upcomingMeetings = action.payload;
    },

    setHistoryMeetings(state, action) {
      state.isLoader = false;
      state.historyMeetings = action.payload;
    },
    // update calendar view
    updateCalendarView(state, action) {
      state.calendarView = action.payload;
    },

    // select event
    selectEvent(state, action) {
      const eventId = action.payload;
      state.isModalOpen = true;
      state.selectedEventId = eventId;
    },

    // create event
    createEvent(state, action) {
      state.isLoader = false;
      state.isModalOpen = false;
      state.upcomingMeetings = action.payload;
    },

    // update event
    updateEvent(state, action) {
      state.isLoader = false;
      state.isModalOpen = false;
      state.upcomingMeetings = action.payload;
    },

    // delete event
    deleteEvent(state, action) {
      const { eventId } = action.payload;
      state.isModalOpen = false;
      const deleteEvent = state.allMeetings.filter((user) => user.id !== eventId);
      state.allMeetings = deleteEvent;
    },

    // select date range
    selectRange(state, action) {
      const { start, end } = action.payload;
      state.isModalOpen = true;
      state.selectedRange = { start, end };
    },

    // modal toggle
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
      if (state.isModalOpen === false) {
        state.selectedEventId = null;
        state.selectedRange = null;
      }
    },
    setMeetingDetails(state, action) {
      state.isModalOpen = false;
      state.meetingDetail = action.payload;
    }
  }
});

export default calendar.reducer;

export const { selectEvent, toggleModal, updateCalendarView, setMeetingDetails, setUpcomingMeetings, setHistoryMeetings } =
  calendar.actions;

export function getUpcomingMeetings() {
  return async () => {
    dispatch(calendar.actions.loading());
    try {
      const response = await axios.get('/api/v1/meeting/upcoming');
      dispatch(calendar.actions.setUpcomingMeetings(response.data.result));
    } catch (error) {
      dispatch(calendar.actions.hasError(error));
    }
  };
}

export function getHistoryMeetings() {
  return async () => {
    dispatch(calendar.actions.loading());
    try {
      const response = await axios.get('/api/v1/meeting/history');
      dispatch(calendar.actions.setHistoryMeetings(response.data.result));
    } catch (error) {
      dispatch(calendar.actions.hasError(error));
    }
  };
}

export function getMeetingDetails(id: string, to: string) {
  return async () => {
    dispatch(calendar.actions.loading());
    try {
      const response = await axios.post(`/api/v1/meeting/detail`, { _id: id, to: to });
      dispatch(calendar.actions.setMeetingDetails(response.data[0].result));
    } catch (error) {
      dispatch(calendar.actions.hasError(error));
    }
  };
}

export function createEvent(newEvent: Omit<EventInput, 'id'>) {
  return async () => {
    dispatch(calendar.actions.loading());
    try {
      const response = await axios.post('/api/v1/meeting', {
        allDay: newEvent.allDay,
        color: newEvent.color,
        textColor: newEvent.color,
        description: newEvent.description,
        end: newEvent.end,
        start: newEvent.start,
        title: newEvent.title,
        type: 'general',
        to: newEvent.to
      });
      if (response.status === 201) {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Event added successfully.',
            variant: 'alert',
            alert: {
              color: 'success'
            },
            close: false
          })
        );
      } else {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Event adding Failed. Please try again',
            variant: 'alert',
            alert: {
              color: 'error'
            },
            close: false
          })
        );
      }
      dispatch(calendar.actions.createEvent(response.data));
    } catch (error) {
      dispatch(calendar.actions.hasError(error));
    }
  };
}

export function updateEvent(
  eventId: string,
  updateEvent: Partial<{
    allDay: boolean;
    start: Date | null;
    end: Date | null;
  }>
) {
  return async () => {
    dispatch(calendar.actions.loading());
    try {
      const response = await axios.post('/api/v1/meeting/update', {
        eventId,
        update: updateEvent
      });
      if (response.status === 200) {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Event update successfully.',
            variant: 'alert',
            alert: {
              color: 'success'
            },
            close: false
          })
        );
      } else {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Event updating Failed. Please try again',
            variant: 'alert',
            alert: {
              color: 'error'
            },
            close: false
          })
        );
      }
      dispatch(calendar.actions.updateEvent(response.data.events));
    } catch (error) {
      dispatch(calendar.actions.hasError(error));
    }
  };
}

export function deleteEvent(eventId: string) {
  return async () => {
    dispatch(calendar.actions.loading());
    try {
      await axios.post('/api/v1/meeting/delete', { eventId });
      dispatch(calendar.actions.deleteEvent({ eventId }));
    } catch (error) {
      dispatch(calendar.actions.hasError(error));
    }
  };
}

export function selectRange(start: Date, end: Date) {
  return async () => {
    dispatch(
      calendar.actions.selectRange({
        start: start.getTime(),
        end: end.getTime()
      })
    );
  };
}
