import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const AUTH_HEADER = 'Basic ' + btoa('max@tecnom.com.ar' + ':' + 'b0x3sApp');

  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: AUTH_HEADER,
      'Content-Type': 'application/json',
    },
  });

  return next(modifiedReq);
};
