// Mapeo de certificados usando rutas directas
export const certificateMap = {
  'Certified Professional: Kaspersky Endpoint Security Cloud (040.16)': '/me/certificate/Certified-Professional-Kaspersky-Endpoint-Security-Cloud-040.16.pdf',
  'Certified Professional: Kaspersky EDR Optimum Presales (P24.2)': '/me/certificate/Certified-Professional-Kaspersky-EDR-Optimum-Presales-P24.2.pdf',
  'Certified Professional: Kaspersky Next EDR Foundations (046.12.5)': '/me/certificate/Certified-Professional-Kaspersky-Next-EDR-Foundations-046.12.5.pdf',
  'Certified Professional Kaspersky Next Presales (P19.01)': '/me/certificate/Certified-Professional-Kaspersky-Next-Presales-P19.01.pdf',
  'Certified Professional Kaspersky Next XDR Expert (048.1.1)': '/me/certificate/Certified-Professional-Kaspersky-Next-XDR-Expert-048.1.1.pdf'
};

// Función para obtener la URL del certificado
export function getCertificateUrl(certificateName: string): string {
  return certificateMap[certificateName as keyof typeof certificateMap] || certificateMap['Certified Professional: Kaspersky Endpoint Security Cloud (040.16)'];
} 