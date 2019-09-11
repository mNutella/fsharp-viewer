// @flow
import type { Dispatch } from '../reducers/types';
import { runCommand } from '../utils/cli';

export const EXECUTE_COMMAND = 'EXECUTE_COMMAND';
export const RECEIVE_COMMAND_RESULT = 'RECEIVE_COMMAND_RESULT';

export function receiveCommandResult(payload: Array<Array<string>>) {
  return {
    type: RECEIVE_COMMAND_RESULT,
    commandResult: payload
  };
}

export function executeCommand() {
  return {
    type: EXECUTE_COMMAND
  };
}

export function executeCommandAsync(path: string) {
  return (dispatch: Dispatch) => {
    dispatch(executeCommand());
    runCommand('dotnet', 'run', '--project', path)
      .then(result => {
        dispatch(receiveCommandResult(result));
        return result;
      })
      .catch(error => {
        dispatch(receiveCommandResult(error));
      });
  };
}
