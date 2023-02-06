import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

export function dateAgo(date, lang = 'en-US') {
  return format(date, lang);
}
