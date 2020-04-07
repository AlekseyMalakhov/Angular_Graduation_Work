import 'zone.js/dist/zone';  // Included with Angular CLI.


import { TextEncoder } from 'text-encoding';
if (typeof (window as any).TextEncoder === 'undefined') {
  (window as any).TextEncoder = TextEncoder;
}
