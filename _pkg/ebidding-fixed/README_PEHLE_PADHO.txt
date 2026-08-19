================= EBIDDING FIXED PACKAGE =================
Isme kya-kya hai (ye poora folder apne server pe rakho):

  ebidding-automation.js        <- YEHI CHALANI HAI (fixed)
  downloadImages/data.json      <- 162 captcha cache (byte-hash, format-proof) - ZAROORI
  downloadImages/credentials.json
  .env                          <- config (LOCAL_CACHE_ONLY=true already set)
  files/*.csv                   <- bid inputs

--------- CHALANE KA TAREEKA ---------
1) Poora "ebidding-fixed" folder apne server pe copy karo.
2) Us folder me jao:  cd ebidding-fixed
3) (Pehli baar) dependencies:  npm install
4) Chalao:
      pm2 delete standalone2 2>/dev/null; pm2 start ebidding-automation.js --name standalone2
      pm2 logs standalone2

--------- CONFIRM KAISE KARO (cache load hua?) ---------
Startup pe YE line aani CHAHIYE:
  ✅ Embedded Captcha Solver initialized (162 cached captchas loaded) | file: .../downloadImages/data.json | LOCAL_CACHE_ONLY=true

Agar ye line NAHI aayi aur ye aaya:
  ⚠️ CACHE NOT FOUND at: ...
=> matlab downloadImages/data.json us folder ke andar nahi hai jahan se aap script chala rahe ho.
   downloadImages folder ko ebidding-automation.js ke SAATH hi rakho.

--------- CAPTCHA BEHAVIOUR ---------
LOCAL_CACHE_ONLY=true  => sirf data.json se solve. TrueCaptcha API bilkul band.
   - Jo captcha cache me hai -> turant solve (0ms).
   - Jo cache me nahi -> naya captcha fetch karke KNOWN captcha ka wait (koi "Redo" spam nahi).
=========================================================
