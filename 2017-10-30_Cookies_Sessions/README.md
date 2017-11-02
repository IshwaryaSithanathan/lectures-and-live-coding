# 2017-10-30 Lecture: Cookies & Sessions

Outline:

- **HTTP:** HTTP is a stateless protocol,
- **Cookies:** We create the "platform" of sessions, state, persistence using cookies.
- Mechanics: How does this actually work?
  - HTTP request headers
  - Browser automatically sends back cookies set from the same domain
  - Some flags to be aware of, namely:
    - HttpOnly - `res.cookie('sessionid', '1', { httpOnly: true });`. Ensures that cookie is not accessible via client-side scripts, which may have a nefarious purpose or may try to use the information to gain knowledge about your shopping habits, etc,
    - Secure - `res.cookie('sessionid', '1', { secure: true });`. Ensures that cookie is only sent over HTTPS connection, which is SSL encrypted end-to-end.
  - Session Workflow:
    - Middleware (like express-session) checks for session cookie. If it's not there, it sets it with a unique session id and stores that session id alongside some user data in memory (or redis).
    - NOTE: Express session uses a default store of MemoryStore. Important to use a tool like redis in production, or else you will lose all sessions when the server restarts.
    - If there IS a session cookie, it sets req.session to be the data associated with the session in the store. If you add, delete or update properties it will sync those to the store.
  - Authentication workflow:
    - when there's a POST to the `/login` route, your route checks the username and hashed password against the database. You will want to implement client-side AND server-side validation here of username, email, passwords.
    - If the user is found, set something on the req.session object to let your app know that, and who they are.
    - Create an authorization middleware to check if the user on the req.session object and grant/deny the user access to the specific resource.

   `$2a$10$0V99mOGRZvXK4/5poo2zDeh2UvZqOhLs64ZPmGlZaUHt5Fyq.6N.K`
- **Passport** library takes care of this for us


With OAuth your user/auth database might look like:
id
username
password
oauth_service "google"
oauth_token
email
