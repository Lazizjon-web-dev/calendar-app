import { createStore } from "vuex";
import { reactive } from "vue";

const store = createStore({
  state: {
    data: reactive([
      {
        id: 1,
        abbvTitle: "Mon",
        fullTitle: "Monday",
        events: [
          { details: "Get Groceries", edit: false },
          { details: "Carpool", edit: false },
        ],
        active: true,
      },
      {
        id: 2,
        abbvTitle: "Tue",
        fullTitle: "Tuesday",
        events: [{ details: "Yoga/Gym", edit: false }],
        active: false,
      },
      {
        id: 3,
        abbvTitle: "Wed",
        fullTitle: "Wednesday",
        events: [{ details: "Work social", edit: false }],
        active: false,
      },
      {
        id: 4,
        abbvTitle: "Thu",
        fullTitle: "Thursday",
        events: [{ details: "Work social", edit: false }],
        active: false,
      },
      {
        id: 5,
        abbvTitle: "Fri",
        fullTitle: "Friday",
        events: [{ details: "Friday dinner/drinks", edit: false }],
        active: false,
      },
      {
        id: 6,
        abbvTitle: "Sat",
        fullTitle: "Saturday",
        events: [{ details: "Chill with the parents", edit: false }],
        active: false,
      },
      {
        id: 7,
        abbvTitle: "Sun",
        fullTitle: "Sunday",
        events: [{ details: "Netflix/Chill", edit: false }],
        active: false,
      },
    ]),
  },
  getters: {
    getActiveDay: () => {
      return store.state.data.find((day) => day.active);
    },
  },
  mutations: {
    setActiveDay(state, dayId) {
      state.data.map((day) => (day.active = day.id === dayId));
    },
  },
  actions: {
    submitEvent({ getters }, eventDetails) {
      getters.getActiveDay.events.push({ details: eventDetails, edit: false });
    },
    editEvent({ state, dispatch }, { dayId, eventIndex }) {
      dispatch("resetEditOfAllEvents");
      const dayObj = state.data.find((day) => day.id === dayId);
      dayObj.events[eventIndex].edit = true;
    },
    deleteEvent({ state }, { dayId, eventIndex }) {
      const dayObj = state.data.find((day) => day.id === dayId);
      dayObj.events.splice([eventIndex], 1);
    },
    updateEvent({ state }, { dayId, eventIndex, updatedEventDetails }) {
      const dayObj = state.data.find((day) => day.id === dayId);
      if (updatedEventDetails)
        dayObj.events[eventIndex].details = updatedEventDetails;
      dayObj.events[eventIndex].edit = false;
    },
    resetEditOfAllEvents({ state }) {
      state.data.map((day) => day.events.map((event) => (event.edit = false)));
    },
  },
});

export default store;
