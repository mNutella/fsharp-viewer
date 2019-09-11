import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type runnerStateType = {
  +isRunning: boolean,
  +commandResult: Array<Array<string>>
};

export type Action = {
  +type: string
};

export type GetState = () => runnerStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
