import { LAWYER_DATA } from '../data/lawyerData';

export function downloadVCard() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:محەمەد;حوسێن;;;
FN:${LAWYER_DATA.name} (${LAWYER_DATA.nameEn})
TITLE:${LAWYER_DATA.title} - Lawyer
TEL;TYPE=CELL,VOICE:${LAWYER_DATA.phoneRaw}
TEL;TYPE=WORK,VOICE:${LAWYER_DATA.phoneRaw}
ADR;TYPE=WORK:;;${LAWYER_DATA.location};Erbil;Kurdistan;;Iraq
NOTE:پارێزەری ڕاوێژکاری یاسایی لە هەولێر و کوردستان - ${LAWYER_DATA.headline}
URL:${window.location.origin || 'https://husen-lawyer.krd'}
X-SOCIALPROFILE;type=facebook:${LAWYER_DATA.facebookUrl}
X-SOCIALPROFILE;type=whatsapp:https://wa.me/${LAWYER_DATA.whatsappRaw.replace('+', '')}
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Husen-Muhammad-Lawyer.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
