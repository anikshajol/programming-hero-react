/***
 * how to store token in the client side
 * 1. memory -> ok type
 * local storage ok type--(xss)
 * cookies: http only
 *
 *
 *
 * ---------------*----------------------
 * 1. set cookies with http only . for development secure: false,
 * 
 * 
 * 2. corsapp.use(
  cors({
    origin: ["http://localhost:5173/"],
    credentials: true,
  })
);
 *
 *
 * 3. client side axios setting
 * in axios set WithCredentials: true
 *
 */
