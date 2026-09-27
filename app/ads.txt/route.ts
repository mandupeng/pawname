// Google requires ads.txt at the domain root once AdSense is approved for this site.
export function GET() {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const body = clientId ? `google.com, ${clientId}, DIRECT, f08c47fec0942fa0\n` : '';
  return new Response(body, { headers: { 'content-type': 'text/plain' } });
}
