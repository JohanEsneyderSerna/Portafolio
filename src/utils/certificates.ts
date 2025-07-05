// Importar todos los certificados
import kasperskyEndpointSecurityCloud from '../data/certificates/kaspersky-endpoint-security-cloud-040-16.pdf';
import kasperskyEdrOptimumPresales from '../data/certificates/kaspersky-edr-optimum-presales-p24-2.pdf';
import kasperskyNextEdrFoundations from '../data/certificates/kaspersky-next-edr-foundations-046-12-5.pdf';
import kasperskyNextPresales from '../data/certificates/kaspersky-next-presales-p19-01.pdf';
import kasperskyNextXdrExpert from '../data/certificates/kaspersky-next-xdr-expert-048-1-1.pdf';

// Mapeo de certificados
export const certificateMap = {
  'Certified Professional: Kaspersky Endpoint Security Cloud (040.16)': kasperskyEndpointSecurityCloud,
  'Certified Professional: Kaspersky EDR Optimum Presales (P24.2)': kasperskyEdrOptimumPresales,
  'Certified Professional: Kaspersky Next EDR Foundations (046.12.5)': kasperskyNextEdrFoundations,
  'Certified Professional Kaspersky Next Presales (P19.01)': kasperskyNextPresales,
  'Certified Professional Kaspersky Next XDR Expert (048.1.1)': kasperskyNextXdrExpert
};

// Función para obtener la URL del certificado
export function getCertificateUrl(certificateName: string): string {
  return certificateMap[certificateName as keyof typeof certificateMap] || certificateMap['Certified Professional: Kaspersky Endpoint Security Cloud (040.16)'];
} 