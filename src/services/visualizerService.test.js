import visualizerService from "./visualizerService";
import axios from "axios";

jest.mock("axios");

test("returns response data when valid experiment id is passed", async () => {
  const res = {
    data: [
      {
        id: 1,
        value: "red",
        experiment_id: 1,
        is_control: true,
        weight: 0.5,
        event_total: 300,
        distinct_user_events_total: 100,
        total_users: 150
      },
      {
        id: 2,
        value: "green",
        experiment_id: 1,
        is_control: false,
        weight: 0.5,
        event_total: 250,
        distinct_user_events_total: 75,
        total_users: 150
      },
    ],
    status: 200,
    statusText: "OK",
    headers: {},
    config: {},
    request: XMLHttpRequest
  };

  const experimentId = res.data[0].experimentId;
  const data = [
    {
      id: 1,
      value: "red",
      experiment_id: 1,
      is_control: true,
      weight: 0.5,
      event_total: 300,
      distinct_user_events_total: 100,
      total_users: 150
    },
    {
      id: 2,
      value: "green",
      experiment_id: 1,
      is_control: false,
      weight: 0.5,
      event_total: 250,
      distinct_user_events_total: 75,
      total_users: 150
    },
  ];

  axios.get.mockResolvedValueOnce(res);
  expect(visualizerService.getExperimentEventData(experimentId)).resolves.toEqual(data);
});

test("returns error when invalid experiment id is passed", async () => {
  const res = {
    data: [],
    status: 200,
    statusText: "OK",
    headers: {},
    config: {},
    request: XMLHttpRequest
  };

  const invalidExperimentId = 300
  axios.get.mockResolvedValueOnce(res);
  expect(visualizerService.getExperimentEventData(invalidExperimentId)).resolves.toEqual([]);
});