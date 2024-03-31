import { StateHandler } from "../../redux/slices/StateReducer";
import _MAINSTORE from "../../redux/store";
export function Updater(StateName, dispatcher) {
    return function update(data) {
        dispatcher(StateHandler.update({
            data: data,
            state: StateName,
        }));
        return _MAINSTORE.getState().This[StateName];
    };
}
export function Appender(StateName, dispatcher) {
    return function append(data) {
        dispatcher(StateHandler.update({
            data: data,
            state: StateName,
        }));
        return _MAINSTORE.getState().This[StateName];
    };
}
export function Upsert(StateName, dispatcher) {
    return function upsert(data) {
        dispatcher(StateHandler.upsert({
            data: data,
            active_state: StateName,
        }));
        return _MAINSTORE.getState().This[StateName];
    };
}
