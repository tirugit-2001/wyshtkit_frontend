import styles from "./login.module.scss";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.background} aria-hidden="true">
        <div className={styles.bgBlob} />
        <div className={styles.bgBlob} />
        <div className={styles.bgBlob} />
      </div>

      <main className={styles.card}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <WyshkitLogo />
            <span className={styles.logoText}>Wyshkit</span>
          </div>
          <h1 className={styles.title}>Welcome to Wyshkit</h1>
          <p className={styles.subtitle}>Your local artisan network</p>
        </header>

        <div className={styles.actions}>
          <button type="button" className={styles.btnPasskey}>
            <PasskeyIcon />
            Continue with Passkey
          </button>

          <div className={styles.divider}>
            <span>OR</span>
          </div>

          <button type="button" className={styles.btnGoogle}>
            <GoogleIcon />
            Continue with Google
          </button>

          <button type="button" className={styles.btnApple}>
            <AppleIcon />
            Continue with Apple
          </button>
        </div>

        <div className={styles.locationBox}>
          <LocationIcon />
          <div className={styles.locationText}>
            <strong>Verify Location</strong>
            <span>Required for 15-min delivery accuracy</span>
          </div>
        </div>

        <footer className={styles.footer}>
          <p className={styles.terms}>
            By continuing, you agree to our{" "}
            <a href="/terms" className={styles.termsLink}>
              Ethical Data Terms
            </a>
            .
          </p>
          <p className={styles.verified}>
            <VerifiedIcon />
            No Hidden Tracking. Verified.
          </p>
        </footer>
      </main>
    </div>
  );
};

const WyshkitLogo = () => (
  <svg width="28" height="32" viewBox="0 0 28 32" fill="none" aria-hidden="true">
    <path
      d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 18 14 18s14-7.5 14-18C28 6.268 21.732 0 14 0z"
      fill="#E8959A"
    />
    <text
      x="14"
      y="17"
      textAnchor="middle"
      dominantBaseline="central"
      fill="white"
      fontSize="14"
      fontWeight="700"
      fontFamily="Inter, system-ui, sans-serif"
    >
      W
    </text>
  </svg>
);

const PasskeyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="7" r="3.5" stroke="white" strokeWidth="1.5" />
    <path
      d="M4 20v-1.5a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5V20"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M17 8.5l2 2-3 3"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="18.5" cy="7.5" r="2" stroke="white" strokeWidth="1.5" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.61z"
    />
    <path
      fill="#34A853"
      d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.33A8.99 8.99 0 0 0 9 18z"
    />
    <path
      fill="#FBBC05"
      d="M3.97 10.71A5.41 5.41 0 0 1 3.68 9c0-.59.1-1.16.29-1.71V4.96H.96A8.99 8.99 0 0 0 0 9c0 1.45.35 2.82.96 4.04l3.01-2.33z"
    />
    <path
      fill="#EA4335"
      d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59C13.47.89 11.43 0 9 0A8.99 8.99 0 0 0 .96 4.96l3.01 2.33C4.68 5.08 6.66 3.58 9 3.58z"
    />
  </svg>
);

const AppleIcon = () => (
  <svg width="16" height="20" viewBox="0 0 16 20" fill="white" aria-hidden="true">
    <path d="M13.2 10.6c.02 2.2 1.93 2.95 1.95 2.96-.02.06-.31 1.04-1.01 2.06-.61.88-1.24 1.76-2.24 1.78-.98.02-1.29-.58-2.41-.58-1.12 0-1.47.56-2.4.6-1 .04-1.76-.99-2.38-1.87C2.62 13.1 1.1 9.24 3.07 6.62c.98-1.4 2.73-2.28 4.63-2.3 1.08-.02 2.1.72 2.76.72.66 0 1.9-.89 3.2-.76.55.02 2.1.22 3.1 1.64-.08.05-1.85 1.08-1.83 3.22zM10.9 3.2c.47-.57.79-1.37.7-2.16-.68.03-1.5.45-1.99 1.02-.44.51-.82 1.33-.72 2.12.76.06 1.54-.39 2.01-.98z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    className={styles.locationIcon}
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      fill="#E8959A"
    />
    <circle cx="12" cy="9" r="2.5" fill="white" />
  </svg>
);

const VerifiedIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
    <circle cx="4" cy="4" r="4" fill="#14B8A6" />
  </svg>
);

export default Login;
