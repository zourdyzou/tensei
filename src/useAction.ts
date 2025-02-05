import Action from './Action';

const useAction =
  <Args extends any[], Callback extends (...args: Args) => any>(action: Action<Args, Callback>) =>
  (...args: Args) =>
    action.call(...args);

export default useAction;
