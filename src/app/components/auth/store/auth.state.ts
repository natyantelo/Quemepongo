import { State, Store, StateContext, Action } from '@ngxs/store';
import { Auth } from '../auth.models';
import { AuthService } from '../services/auth.service';
import {
  Login,
  LoginSuccess,
  LoginFailed,
  RegisterFailed,
  Register,
  RegisterSuccess,
  Logout
} from './auth.actions';
import { Navigate } from '@ngxs/router-plugin';
import { tap, catchError } from 'rxjs/operators';

@State<Auth>({
  name: 'auth',
  defaults: {
    ...JSON.parse(localStorage.getItem('auth'))
  }
})
export class AuthState {
  constructor(private store: Store, private authService: AuthService) { }

  @Action(Login, { cancelUncompleted: true })
  login({ dispatch }: StateContext<Auth>, action: Login) {
    return this.authService.login(action.login).pipe(
      tap(data => dispatch(new LoginSuccess(data))),
      catchError(error => dispatch(new LoginFailed(error.error)))
    );
  }

  @Action(LoginSuccess)
  loginSuccess(
    { patchState, dispatch }: StateContext<Auth>,
    { loginResponse }: LoginSuccess
  ) {
    patchState({ ...loginResponse });

    dispatch(new Navigate(['/user']));
  }

  @Action(LoginFailed)
  LoginFailed(ctx: StateContext<Auth>) {
    alert('Usuario o contraseña incorrectos. Inténtelo de nuevo');

  }

  @Action(Register)
  register({ dispatch }: StateContext<Auth>, action: Register) {
    return this.authService.register(action.register).pipe(
      tap(() => dispatch(new RegisterSuccess())),
      catchError(error => dispatch(new RegisterFailed(error.error)))
    );
  }

  @Action(Logout)
  logout({ setState, dispatch }: StateContext<Auth>) {
    this.authService.logout();
    setState(null);
    dispatch(new Navigate(['/home']));
  }

  @Action(RegisterSuccess)
  registerSuccess({ dispatch }, ctx: StateContext<Auth>) {
    alert('Registro realizado correctamente, ya puede iniciar sesión');
    dispatch(new Navigate(['/']));
  }

  @Action(RegisterFailed)
  registerFailed(ctx: StateContext<Auth>) {
    alert('Uno o más campos del formulario no se han cubierto correctamente. Inténtelo de nuevo');

  }


}
