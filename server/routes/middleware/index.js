import { mapper } from '~/lib/utils';

export function isLoggedMiddleware(req, res, next) {
  const hasSession = req.session;
  if (hasSession && req.session.authProfile) {
    next();
  } else {
    // api서버이기 때문에 authCheck가 필요 없을거 같긴함. 토크 체크해서 error 라우터로 던지기
    res.redirect(mapper.pageUrl.login);
  }
}

export function isNotLoggedMiddleware(req, res, next) {
  const hasSession = req.session;
  console.log(req.session, 'isNotLoggedMiddleware');
  if (hasSession && req.session.authProfile) {
    res.redirect('/');
  } else {
    next();
  }
}
