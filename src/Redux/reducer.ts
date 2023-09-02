import { AppState } from "./app-state";
import { Action } from "./action";
import { ActionType } from "./action-type";


const appStateInitialValue = new AppState();

export function reduce(oldAppState: AppState = appStateInitialValue, action: Action): AppState {
    // Cloning the oldState (creating a copy)
    const newAppState = { ...oldAppState };
    switch (action.type) {
        case ActionType.AddCoupon:
            newAppState.coupons = [...oldAppState.coupons, action.payload]
            break;
        case ActionType.GetCoupon:
            newAppState.coupons = action.payload;
            break;
    }

    // After returning the new state, it's being published to all subscribers
    // Each component will render itself based on the new state
    return newAppState;
}
