import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Global } from '../models/shared.models';
/* import {
  Login,
} from '../servicios/login.service'; */


@State<Global>({
  name: 'global',
  defaults: {
    isFetching: false
  }
})
export class GlobalState {
  @Selector()
  static isFetching({ isFetching }: Global) {
    return isFetching;
  }

  @Action([/* Login */])
  startFetching({ patchState }: StateContext<Global>) {
    patchState({ isFetching: true });
  }

  @Action([
    /*  LoginSuccess,
     LoginFailed, */
  ])
  endFetching({ patchState }: StateContext<Global>) {
    patchState({ isFetching: false });
  }
}
