// SkipGo connection settings. See the setup guide (README) for where to find each value.
// While supabaseUrl and supabaseKey are empty, the site runs as a demo with made-up sample data.
window.SKIPGO_CONFIG = {
  // Supabase (logins and live data): Project Settings > API
  supabaseUrl: "",https://tpbcugnbjohslfopitfh.supabase.co      // e.g. "https://abcdefgh.supabase.co"
  supabaseKey: "",sb_publishable_ijvmMbz2fg2_tYosteDY-Q_GhsEOWM7      // the "anon" / "publishable" key. Never paste the "service_role" key here.
  loginDomain: "skipgo-users.com", // usernames are stored as username@this-domain. No email is ever sent to it.

  // Microsoft (filing invoices in OneDrive): Microsoft Entra admin center > App registrations
  msClientId: "",       // the app's "Application (client) ID"
  msTenant: "common",   // leave as "common" unless the setup guide says otherwise
  oneDriveFolder: "SkipGo" // OneDrive folder that holds Prices.xlsx and the Invoices folder
};
