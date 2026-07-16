// Shared submission path for every form on the site (general inquiry,
// consultant application, client review). Each form type points at its own
// endpoint env var so a single Google Apps Script Web App (or three separate
// ones) can route submissions into the right sheet/doc/tab once the backend
// Michael is building is live.
//
// Until an endpoint is configured, submissions are logged to the console and
// resolved as successful so the UI can be built and demoed end-to-end without
// blocking on the backend.
//
// To go live: set the matching VITE_*_ENDPOINT var (see .env.example) to the
// deployed Web App URL, which must accept a POST with a JSON body and return
// a 2xx response.

export type FormType = "inquiry" | "consultant_application" | "review";

const ENDPOINTS: Record<FormType, string | undefined> = {
  inquiry: import.meta.env.VITE_INQUIRY_ENDPOINT,
  consultant_application: import.meta.env.VITE_CONSULTANT_APPLICATION_ENDPOINT,
  review: import.meta.env.VITE_REVIEW_ENDPOINT,
};

export async function submitForm(
  type: FormType,
  data: Record<string, unknown>
): Promise<{ ok: true; mocked: boolean }> {
  const endpoint = ENDPOINTS[type];
  const payload = {
    formType: type,
    submittedAt: new Date().toISOString(),
    ...data,
  };

  if (!endpoint) {
    console.warn(
      `[submitForm] No endpoint configured for "${type}" yet. Set VITE_${type.toUpperCase()}_ENDPOINT in .env once the backend is ready — logging payload instead:`,
      payload
    );
    return { ok: true, mocked: true };
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Submission to "${type}" endpoint failed with status ${res.status}`);
  }

  return { ok: true, mocked: false };
}
