const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  img: "",
  mortgage: 0,
  rent: 0
};

const UPDATE_STEP1 = "UPDATE_STEP1";
const UPDATE_IMG = "UPDATE_IMG";
const UPDATE_STEP3 = "UPDATE_STEP3";

export const updateStep1 = (name, address, city, state, zip) => {
  console.log("REDUCER HIT--->", name, address, city, state, zip);
  return {
    type: UPDATE_STEP1,
    payload: { name, address, city, state, zip }
  };
};

export function updateImg(img) {
  console.log("IN REDUCER--->", img);
  return {
    type: UPDATE_IMG,
    payload: { img }
  };
}

export function updateStep3(mortgage, rent) {
  console.log("IN REDUCER--->", mortgage, rent);  
  return {
    type: UPDATE_STEP3,
    payload: { mortgage, rent }
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STEP1:
      return Object.assign({}, state, action.payload);

    case UPDATE_IMG:
      return Object.assign({}, state, action.payload);

    case UPDATE_STEP3:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}
