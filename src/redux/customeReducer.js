const defaultState = {
  customers: [],
};

export const customeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "Add":
      const existingCustomer = state.customers.find(
        (customer) => customer.id === action.payload.id
      );
      if (existingCustomer) {
        return {
          ...state,
          customers: state.customers.map((customer) =>
            customer.id === action.payload.id
              ? { ...customer, count: customer.count + action.payload.count }
              : customer
          ),
        };
      } else {
        return {
          ...state,
          customers: [...state.customers, action.payload],
        };
      }
    case "All_remove":
      return { ...state, customers: [] };
      case "All":
        return { ...state, customers: action.payload };
    case "Remove":
      return {
        ...state,
        customers: state.customers.filter((el) => el.id !== action.payload),
      };
    case "Update":
      return {
        ...state,
        customers: state.customers.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    default:
      return state;
  }
};
