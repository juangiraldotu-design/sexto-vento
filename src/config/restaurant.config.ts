export interface SignatureDish {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  imageKey: string;
}

export const restaurantConfig = {
  name: 'GastroBar Sexto Vento',
  shortName: 'Sexto Vento',
  headline: 'Sabor, música, vista panorámica & experiencias memorables',
  description: 'Un gastrobar en el 4to piso donde puedes disfrutar desde un exquisito brunch, cocina italiana con platos a la carta, coctelería de autor y una increíble vista 360°.',
  rooftopNote: '✨ Cuarto Piso • Hotel Casa Volga • Vista 360°',
  city: 'Roldanillo, Valle del Cauca',
  
  // Enlace Oficial al Menú en Unglo (Sin duplicación)
  menuUrl: 'https://www.unglo.com/sexto_vento/menu',

  // Conversión y Contacto Directo
  whatsappNumber: '573247211242',
  whatsappDisplay: '+57 (324) 721-1242',
  whatsappDefaultMessage: 'Hola Sexto Vento, quisiera consultar disponibilidad para una reserva.',
  whatsappUrl: 'https://wa.me/573247211242?text=Hola%20Sexto%20Vento%2C%20quisiera%20consultar%20disponibilidad%20para%20una%20reserva',

  // Redes Sociales
  instagramUrl: 'https://www.instagram.com/sexto_vento?stkn=YXY1dDY4cnJzaGdz',
  instagramHandle: '@sexto_vento',

  // Ubicación y Mapas
  location: {
    address: 'Calle 8 # 7-23, Cuarto Piso',
    placeName: 'Hotel Casa Volga (Rooftop)',
    neighborhood: 'Centro Histórico (frente a la plaza)',
    city: 'Roldanillo',
    department: 'Valle del Cauca',
    country: 'Colombia',
    googleMapsUrl: 'https://maps.app.goo.gl/HHRKjUFHMa1TCGsX8?g_st=ic',
    wazeUrl: 'https://waze.com/ul?q=Hotel+Casa+Volga+Roldanillo&navigate=yes',
    coordinates: {
      lat: 4.4121,
      lng: -76.1528,
    }
  },

  // Horarios de Atención Verificados
  schedule: {
    thursday: 'Jueves: 8:00 AM – 11:00 PM',
    weekend: 'Viernes a Domingo: 8:00 AM – 1:00 AM',
    closedDays: 'Lunes a Miércoles: Cerrado (Eventos privados bajo reserva)',
    openingDaysText: 'De Jueves a Domingo',
    services: ['Desayunos', 'Almuerzos', 'Cenas', 'Café de Especialidad', 'Coctelería de Autor'],
  },

  // Platos Insignia Destacados
  signatureDishes: [
    {
      id: 'croissant-pistacho',
      name: 'Croissant de Pistacho & Café 3D',
      category: 'Desayuno & Brunch',
      badge: 'Favorito de la Casa',
      description: 'Hojaldre artesanal con crema de pistacho puro, maridado con latte art tridimensional.',
      imageKey: 'croissant-pistacho',
    },
    {
      id: 'burrata-prosciutto',
      name: 'Bruschetta di Burrata & Prosciutto',
      category: 'Entrada Signature',
      badge: 'Alta Cocina',
      description: 'Pan de masa madre, burrata cremosa, rosas de prosciutto di Parma y reducción de balsámico.',
      imageKey: 'burrata-prosciutto',
    },
    {
      id: 'pasta-fettuccine',
      name: 'Fettuccine Cremoso & Pollo a la Brasa',
      category: 'Almuerzo & Cena',
      badge: 'Plato Insignia',
      description: 'Pasta larga en salsa aterciopelada de quesos madurados con brotes frescos y finas tostadas.',
      imageKey: 'pasta-fettuccine',
    },
    {
      id: 'sandwich-brisket',
      name: 'Sándwich de Brisket en Masa Madre',
      category: 'Especialidad',
      badge: 'Cocción Lenta',
      description: 'Carne desmechada caramelizada en cocción lenta, queso fundido y chips artesanales de raíces.',
      imageKey: 'sandwich-brisket',
    },
    {
      id: 'caramel-coffee',
      name: 'Caramel Cold Brew & Cream',
      category: 'Café & Bar',
      badge: 'De Autor',
      description: 'Extracción en frío sobre granos seleccionados con dulce de caramelo y espuma de leche sedosa.',
      imageKey: 'caramel-coffee-cocktail',
    },
    {
      id: 'crispy-chicken',
      name: 'Tenders Crocantes con Hilos de Plátano',
      category: 'Para Compartir',
      badge: 'Sabor Local',
      description: 'Supremas crocantes en panko con plátano fino verde, pétalos de caléndula y salsa de la casa.',
      imageKey: 'crispy-chicken',
    },
  ] as SignatureDish[],
};

