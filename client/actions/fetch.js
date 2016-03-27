export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const FAIL_DATA = 'FAIL_DATA';

function requestData() {
  return {
    type: REQUEST_DATA,
  };
};

function failData(err) {
  return {
    type: FAIL_DATA,
    data: err,
  };
};

function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data: data,
  };
};


// A delay of 3seconds is voluntary for seeing the spinner, again a simulation as an example ;)
export function fetchData() {
  return (dispatch) => {
    dispatch(requestData());
    return fetch('https://randomuser.me/api/', {method: 'get'})
      .then(res => res.json())
      .then(res => setTimeout(() => dispatch(receiveData(res)), 3000))
      .catch(err => dispatch(failData(err)));
  };
}
