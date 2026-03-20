import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'en' | 'de' | 'es' | 'fr' | 'zh';

export interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' }
];

interface TranslationStrings {
  // Navigation
  'nav.home': string;
  'nav.tours': string;
  'nav.about': string;
  'nav.contact': string;
  'nav.login': string;
  'nav.register': string;
  'nav.dashboard': string;
  'nav.bookings': string;
  'nav.backoffice': string;
  'nav.agency': string;
  'nav.logout': string;
  'nav.language': string;
  
  // Home Page
  'home.hero.title': string;
  'home.hero.subtitle': string;
  'home.hero.cta': string;
  'home.featured.title': string;
  'home.featured.subtitle': string;
  'home.why.title': string;
  'home.why.subtitle': string;
  'home.cta.title': string;
  'home.cta.subtitle': string;
  'home.cta.button': string;
  
  // Tours
  'tours.title': string;
  'tours.search': string;
  'tours.filter': string;
  'tours.duration': string;
  'tours.price': string;
  'tours.category': string;
  'tours.bookNow': string;
  'tours.viewDetails': string;
  'tours.days': string;
  'tours.from': string;
  'tours.perPerson': string;
  'tours.included': string;
  'tours.excluded': string;
  'tours.itinerary': string;
  'tours.highlights': string;
  'tours.reviews': string;
  'tours.availability': string;
  
  // Booking
  'booking.title': string;
  'booking.step1': string;
  'booking.step2': string;
  'booking.step3': string;
  'booking.step4': string;
  'booking.selectDate': string;
  'booking.participants': string;
  'booking.accommodation': string;
  'booking.extras': string;
  'booking.review': string;
  'booking.total': string;
  'booking.confirm': string;
  'booking.success': string;
  'booking.reference': string;
  
  // Backoffice
  'backoffice.dashboard': string;
  'backoffice.tours': string;
  'backoffice.bookings': string;
  'backoffice.customers': string;
  'backoffice.reports': string;
  'backoffice.totalRevenue': string;
  'backoffice.totalBookings': string;
  'backoffice.activeCustomers': string;
  'backoffice.recentBookings': string;
  'backoffice.status': string;
  'backoffice.actions': string;
  'backoffice.confirm': string;
  'backoffice.cancel': string;
  'backoffice.view': string;
  
  // Agency
  'agency.dashboard': string;
  'agency.bookings': string;
  'agency.commission': string;
  'agency.clients': string;
  'agency.quickBook': string;
  'agency.quotes': string;
  'agency.resources': string;
  'agency.totalSales': string;
  'agency.totalCommission': string;
  
  // Common
  'common.loading': string;
  'common.error': string;
  'common.success': string;
  'common.save': string;
  'common.cancel': string;
  'common.delete': string;
  'common.edit': string;
  'common.view': string;
  'common.search': string;
  'common.filter': string;
  'common.all': string;
  'common.none': string;
  'common.yes': string;
  'common.no': string;
  'common.contact': string;
  'common.email': string;
  'common.phone': string;
  'common.address': string;
  'common.name': string;
  'common.firstName': string;
  'common.lastName': string;
  'common.submit': string;
  'common.close': string;
  
  // Status
  'status.pending': string;
  'status.confirmed': string;
  'status.inProgress': string;
  'status.completed': string;
  'status.cancelled': string;
  'status.refunded': string;
}

const translations: Record<Language, TranslationStrings> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.tours': 'Tours',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'nav.dashboard': 'Dashboard',
    'nav.bookings': 'My Bookings',
    'nav.backoffice': 'Backoffice',
    'nav.agency': 'Agency Portal',
    'nav.logout': 'Logout',
    'nav.language': 'Language',
    
    // Home Page
    'home.hero.title': 'Experience the Ultimate Safari Adventure',
    'home.hero.subtitle': 'Discover the breathtaking wildlife and landscapes of Tanzania with Getatos Safari',
    'home.hero.cta': 'Explore Our Tours',
    'home.featured.title': 'Featured Tours',
    'home.featured.subtitle': 'Discover our most popular safari experiences',
    'home.why.title': 'Why Choose Us',
    'home.why.subtitle': 'Experience the adventure of a lifetime',
    'home.cta.title': 'Ready for Your Safari?',
    'home.cta.subtitle': 'Book now and create unforgettable memories',
    'home.cta.button': 'Start Your Journey',
    
    // Tours
    'tours.title': 'Our Safari Tours',
    'tours.search': 'Search tours...',
    'tours.filter': 'Filter',
    'tours.duration': 'Duration',
    'tours.price': 'Price',
    'tours.category': 'Category',
    'tours.bookNow': 'Book Now',
    'tours.viewDetails': 'View Details',
    'tours.days': 'days',
    'tours.from': 'From',
    'tours.perPerson': 'per person',
    'tours.included': 'Included',
    'tours.excluded': 'Not Included',
    'tours.itinerary': 'Itinerary',
    'tours.highlights': 'Highlights',
    'tours.reviews': 'Reviews',
    'tours.availability': 'Availability',
    
    // Booking
    'booking.title': 'Book Your Safari',
    'booking.step1': 'Select Date & Guests',
    'booking.step2': 'Accommodation',
    'booking.step3': 'Extras',
    'booking.step4': 'Review & Pay',
    'booking.selectDate': 'Select Date',
    'booking.participants': 'Number of Guests',
    'booking.accommodation': 'Accommodation Level',
    'booking.extras': 'Additional Extras',
    'booking.review': 'Review Your Booking',
    'booking.total': 'Total Price',
    'booking.confirm': 'Confirm Booking',
    'booking.success': 'Booking Confirmed!',
    'booking.reference': 'Reference Number',
    
    // Backoffice
    'backoffice.dashboard': 'Dashboard',
    'backoffice.tours': 'Tour Management',
    'backoffice.bookings': 'Bookings',
    'backoffice.customers': 'Customers',
    'backoffice.reports': 'Reports',
    'backoffice.totalRevenue': 'Total Revenue',
    'backoffice.totalBookings': 'Total Bookings',
    'backoffice.activeCustomers': 'Active Customers',
    'backoffice.recentBookings': 'Recent Bookings',
    'backoffice.status': 'Status',
    'backoffice.actions': 'Actions',
    'backoffice.confirm': 'Confirm',
    'backoffice.cancel': 'Cancel',
    'backoffice.view': 'View Details',
    
    // Agency
    'agency.dashboard': 'Agency Dashboard',
    'agency.bookings': 'My Bookings',
    'agency.commission': 'Commission',
    'agency.clients': 'My Clients',
    'agency.quickBook': 'Quick Book',
    'agency.quotes': 'Quote Generator',
    'agency.resources': 'Resources',
    'agency.totalSales': 'Total Sales',
    'agency.totalCommission': 'Total Commission',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'Success!',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.view': 'View',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.all': 'All',
    'common.none': 'None',
    'common.yes': 'Yes',
    'common.no': 'No',
    'common.contact': 'Contact',
    'common.email': 'Email',
    'common.phone': 'Phone',
    'common.address': 'Address',
    'common.name': 'Name',
    'common.firstName': 'First Name',
    'common.lastName': 'Last Name',
    'common.submit': 'Submit',
    'common.close': 'Close',
    
    // Status
    'status.pending': 'Pending',
    'status.confirmed': 'Confirmed',
    'status.inProgress': 'In Progress',
    'status.completed': 'Completed',
    'status.cancelled': 'Cancelled',
    'status.refunded': 'Refunded'
  },
  
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.tours': 'Touren',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.login': 'Anmelden',
    'nav.register': 'Registrieren',
    'nav.dashboard': 'Dashboard',
    'nav.bookings': 'Meine Buchungen',
    'nav.backoffice': 'Verwaltung',
    'nav.agency': 'Agentur-Portal',
    'nav.logout': 'Abmelden',
    'nav.language': 'Sprache',
    
    // Home Page
    'home.hero.title': 'Erleben Sie das ultimative Safari-Abenteuer',
    'home.hero.subtitle': 'Entdecken Sie die atemberaubende Tierwelt und Landschaften Tansanias mit Getatos Safari',
    'home.hero.cta': 'Touren entdecken',
    'home.featured.title': 'Empfohlene Touren',
    'home.featured.subtitle': 'Entdecken Sie unsere beliebtesten Safari-Erlebnisse',
    'home.why.title': 'Warum wir',
    'home.why.subtitle': 'Erleben Sie das Abenteuer Ihres Lebens',
    'home.cta.title': 'Bereit für Ihre Safari?',
    'home.cta.subtitle': 'Buchen Sie jetzt und schaffen Sie unvergessliche Erinnerungen',
    'home.cta.button': 'Ihre Reise beginnen',
    
    // Tours
    'tours.title': 'Unsere Safari-Touren',
    'tours.search': 'Touren suchen...',
    'tours.filter': 'Filtern',
    'tours.duration': 'Dauer',
    'tours.price': 'Preis',
    'tours.category': 'Kategorie',
    'tours.bookNow': 'Jetzt buchen',
    'tours.viewDetails': 'Details anzeigen',
    'tours.days': 'Tage',
    'tours.from': 'Ab',
    'tours.perPerson': 'pro Person',
    'tours.included': 'Inklusive',
    'tours.excluded': 'Nicht inklusive',
    'tours.itinerary': 'Reiseverlauf',
    'tours.highlights': 'Highlights',
    'tours.reviews': 'Bewertungen',
    'tours.availability': 'Verfügbarkeit',
    
    // Booking
    'booking.title': 'Buchen Sie Ihre Safari',
    'booking.step1': 'Datum & Gäste wählen',
    'booking.step2': 'Unterkunft',
    'booking.step3': 'Extras',
    'booking.step4': 'Überprüfen & Bezahlen',
    'booking.selectDate': 'Datum auswählen',
    'booking.participants': 'Anzahl der Gäste',
    'booking.accommodation': 'Unterkunftsart',
    'booking.extras': 'Zusatzleistungen',
    'booking.review': 'Buchung überprüfen',
    'booking.total': 'Gesamtpreis',
    'booking.confirm': 'Buchung bestätigen',
    'booking.success': 'Buchung bestätigt!',
    'booking.reference': 'Buchungsnummer',
    
    // Backoffice
    'backoffice.dashboard': 'Dashboard',
    'backoffice.tours': 'Tourenverwaltung',
    'backoffice.bookings': 'Buchungen',
    'backoffice.customers': 'Kunden',
    'backoffice.reports': 'Berichte',
    'backoffice.totalRevenue': 'Gesamtumsatz',
    'backoffice.totalBookings': 'Gesamte Buchungen',
    'backoffice.activeCustomers': 'Aktive Kunden',
    'backoffice.recentBookings': 'Aktuelle Buchungen',
    'backoffice.status': 'Status',
    'backoffice.actions': 'Aktionen',
    'backoffice.confirm': 'Bestätigen',
    'backoffice.cancel': 'Stornieren',
    'backoffice.view': 'Details anzeigen',
    
    // Agency
    'agency.dashboard': 'Agentur-Dashboard',
    'agency.bookings': 'Meine Buchungen',
    'agency.commission': 'Provision',
    'agency.clients': 'Meine Kunden',
    'agency.quickBook': 'Schnellbuchung',
    'agency.quotes': 'Angebotsgenerator',
    'agency.resources': 'Ressourcen',
    'agency.totalSales': 'Gesamtumsatz',
    'agency.totalCommission': 'Gesamtprovision',
    
    // Common
    'common.loading': 'Laden...',
    'common.error': 'Ein Fehler ist aufgetreten',
    'common.success': 'Erfolg!',
    'common.save': 'Speichern',
    'common.cancel': 'Abbrechen',
    'common.delete': 'Löschen',
    'common.edit': 'Bearbeiten',
    'common.view': 'Ansehen',
    'common.search': 'Suchen',
    'common.filter': 'Filtern',
    'common.all': 'Alle',
    'common.none': 'Keine',
    'common.yes': 'Ja',
    'common.no': 'Nein',
    'common.contact': 'Kontakt',
    'common.email': 'E-Mail',
    'common.phone': 'Telefon',
    'common.address': 'Adresse',
    'common.name': 'Name',
    'common.firstName': 'Vorname',
    'common.lastName': 'Nachname',
    'common.submit': 'Absenden',
    'common.close': 'Schließen',
    
    // Status
    'status.pending': 'Ausstehend',
    'status.confirmed': 'Bestätigt',
    'status.inProgress': 'In Bearbeitung',
    'status.completed': 'Abgeschlossen',
    'status.cancelled': 'Storniert',
    'status.refunded': 'Erstattet'
  },
  
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.tours': 'Tours',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.login': 'Iniciar sesión',
    'nav.register': 'Registrarse',
    'nav.dashboard': 'Panel',
    'nav.bookings': 'Mis reservas',
    'nav.backoffice': 'Administración',
    'nav.agency': 'Portal de agencia',
    'nav.logout': 'Cerrar sesión',
    'nav.language': 'Idioma',
    
    // Home Page
    'home.hero.title': 'Vive la aventura safari definitiva',
    'home.hero.subtitle': 'Descubre la impresionante vida silvestre y paisajes de Tanzania con Getatos Safari',
    'home.hero.cta': 'Explorar Tours',
    'home.featured.title': 'Tours Destacados',
    'home.featured.subtitle': 'Descubre nuestras experiencias safari más populares',
    'home.why.title': 'Por qué elegirnos',
    'home.why.subtitle': 'Vive la aventura de tu vida',
    'home.cta.title': '¿Listo para tu safari?',
    'home.cta.subtitle': 'Reserva ahora y crea recuerdos inolvidables',
    'home.cta.button': 'Comienza tu viaje',
    
    // Tours
    'tours.title': 'Nuestros Tours Safari',
    'tours.search': 'Buscar tours...',
    'tours.filter': 'Filtrar',
    'tours.duration': 'Duración',
    'tours.price': 'Precio',
    'tours.category': 'Categoría',
    'tours.bookNow': 'Reservar ahora',
    'tours.viewDetails': 'Ver detalles',
    'tours.days': 'días',
    'tours.from': 'Desde',
    'tours.perPerson': 'por persona',
    'tours.included': 'Incluido',
    'tours.excluded': 'No incluido',
    'tours.itinerary': 'Itinerario',
    'tours.highlights': 'Destacados',
    'tours.reviews': 'Reseñas',
    'tours.availability': 'Disponibilidad',
    
    // Booking
    'booking.title': 'Reserva tu Safari',
    'booking.step1': 'Selecciona fecha y huéspedes',
    'booking.step2': 'Alojamiento',
    'booking.step3': 'Extras',
    'booking.step4': 'Revisar y pagar',
    'booking.selectDate': 'Seleccionar fecha',
    'booking.participants': 'Número de huéspedes',
    'booking.accommodation': 'Nivel de alojamiento',
    'booking.extras': 'Extras adicionales',
    'booking.review': 'Revisar reserva',
    'booking.total': 'Precio total',
    'booking.confirm': 'Confirmar reserva',
    'booking.success': '¡Reserva confirmada!',
    'booking.reference': 'Número de referencia',
    
    // Backoffice
    'backoffice.dashboard': 'Panel',
    'backoffice.tours': 'Gestión de tours',
    'backoffice.bookings': 'Reservas',
    'backoffice.customers': 'Clientes',
    'backoffice.reports': 'Informes',
    'backoffice.totalRevenue': 'Ingresos totales',
    'backoffice.totalBookings': 'Reservas totales',
    'backoffice.activeCustomers': 'Clientes activos',
    'backoffice.recentBookings': 'Reservas recientes',
    'backoffice.status': 'Estado',
    'backoffice.actions': 'Acciones',
    'backoffice.confirm': 'Confirmar',
    'backoffice.cancel': 'Cancelar',
    'backoffice.view': 'Ver detalles',
    
    // Agency
    'agency.dashboard': 'Panel de agencia',
    'agency.bookings': 'Mis reservas',
    'agency.commission': 'Comisión',
    'agency.clients': 'Mis clientes',
    'agency.quickBook': 'Reserva rápida',
    'agency.quotes': 'Generador de presupuestos',
    'agency.resources': 'Recursos',
    'agency.totalSales': 'Ventas totales',
    'agency.totalCommission': 'Comisión total',
    
    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Ha ocurrido un error',
    'common.success': '¡Éxito!',
    'common.save': 'Guardar',
    'common.cancel': 'Cancelar',
    'common.delete': 'Eliminar',
    'common.edit': 'Editar',
    'common.view': 'Ver',
    'common.search': 'Buscar',
    'common.filter': 'Filtrar',
    'common.all': 'Todos',
    'common.none': 'Ninguno',
    'common.yes': 'Sí',
    'common.no': 'No',
    'common.contact': 'Contacto',
    'common.email': 'Correo',
    'common.phone': 'Teléfono',
    'common.address': 'Dirección',
    'common.name': 'Nombre',
    'common.firstName': 'Nombre',
    'common.lastName': 'Apellido',
    'common.submit': 'Enviar',
    'common.close': 'Cerrar',
    
    // Status
    'status.pending': 'Pendiente',
    'status.confirmed': 'Confirmado',
    'status.inProgress': 'En progreso',
    'status.completed': 'Completado',
    'status.cancelled': 'Cancelado',
    'status.refunded': 'Reembolsado'
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.tours': 'Circuits',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.login': 'Connexion',
    'nav.register': 'S\'inscrire',
    'nav.dashboard': 'Tableau de bord',
    'nav.bookings': 'Mes réservations',
    'nav.backoffice': 'Administration',
    'nav.agency': 'Portail agence',
    'nav.logout': 'Déconnexion',
    'nav.language': 'Langue',
    
    // Home Page
    'home.hero.title': 'Vivez l\'aventure safari ultime',
    'home.hero.subtitle': 'Découvrez la faune et les paysages à couper le souffle de Tanzanie avec Getatos Safari',
    'home.hero.cta': 'Explorer nos circuits',
    'home.featured.title': 'Circuits en vedette',
    'home.featured.subtitle': 'Découvrez nos expériences safari les plus populaires',
    'home.why.title': 'Pourquoi nous choisir',
    'home.why.subtitle': 'Vivez l\'aventure de votre vie',
    'home.cta.title': 'Prêt pour votre safari?',
    'home.cta.subtitle': 'Réservez maintenant et créez des souvenirs inoubliables',
    'home.cta.button': 'Commencez votre voyage',
    
    // Tours
    'tours.title': 'Nos circuits safari',
    'tours.search': 'Rechercher des circuits...',
    'tours.filter': 'Filtrer',
    'tours.duration': 'Durée',
    'tours.price': 'Prix',
    'tours.category': 'Catégorie',
    'tours.bookNow': 'Réserver',
    'tours.viewDetails': 'Voir les détails',
    'tours.days': 'jours',
    'tours.from': 'À partir de',
    'tours.perPerson': 'par personne',
    'tours.included': 'Inclus',
    'tours.excluded': 'Non inclus',
    'tours.itinerary': 'Itinéraire',
    'tours.highlights': 'Points forts',
    'tours.reviews': 'Avis',
    'tours.availability': 'Disponibilité',
    
    // Booking
    'booking.title': 'Réservez votre safari',
    'booking.step1': 'Sélectionner date et invités',
    'booking.step2': 'Hébergement',
    'booking.step3': 'Extras',
    'booking.step4': 'Vérifier et payer',
    'booking.selectDate': 'Sélectionner la date',
    'booking.participants': 'Nombre d\'invités',
    'booking.accommodation': 'Niveau d\'hébergement',
    'booking.extras': 'Extras supplémentaires',
    'booking.review': 'Vérifier la réservation',
    'booking.total': 'Prix total',
    'booking.confirm': 'Confirmer la réservation',
    'booking.success': 'Réservation confirmée!',
    'booking.reference': 'Numéro de référence',
    
    // Backoffice
    'backoffice.dashboard': 'Tableau de bord',
    'backoffice.tours': 'Gestion des circuits',
    'backoffice.bookings': 'Réservations',
    'backoffice.customers': 'Clients',
    'backoffice.reports': 'Rapports',
    'backoffice.totalRevenue': 'Revenus totaux',
    'backoffice.totalBookings': 'Réservations totales',
    'backoffice.activeCustomers': 'Clients actifs',
    'backoffice.recentBookings': 'Réservations récentes',
    'backoffice.status': 'Statut',
    'backoffice.actions': 'Actions',
    'backoffice.confirm': 'Confirmer',
    'backoffice.cancel': 'Annuler',
    'backoffice.view': 'Voir les détails',
    
    // Agency
    'agency.dashboard': 'Tableau de bord agence',
    'agency.bookings': 'Mes réservations',
    'agency.commission': 'Commission',
    'agency.clients': 'Mes clients',
    'agency.quickBook': 'Réservation rapide',
    'agency.quotes': 'Générateur de devis',
    'agency.resources': 'Ressources',
    'agency.totalSales': 'Ventes totales',
    'agency.totalCommission': 'Commission totale',
    
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Une erreur est survenue',
    'common.success': 'Succès!',
    'common.save': 'Enregistrer',
    'common.cancel': 'Annuler',
    'common.delete': 'Supprimer',
    'common.edit': 'Modifier',
    'common.view': 'Voir',
    'common.search': 'Rechercher',
    'common.filter': 'Filtrer',
    'common.all': 'Tous',
    'common.none': 'Aucun',
    'common.yes': 'Oui',
    'common.no': 'Non',
    'common.contact': 'Contact',
    'common.email': 'E-mail',
    'common.phone': 'Téléphone',
    'common.address': 'Adresse',
    'common.name': 'Nom',
    'common.firstName': 'Prénom',
    'common.lastName': 'Nom',
    'common.submit': 'Soumettre',
    'common.close': 'Fermer',
    
    // Status
    'status.pending': 'En attente',
    'status.confirmed': 'Confirmé',
    'status.inProgress': 'En cours',
    'status.completed': 'Terminé',
    'status.cancelled': 'Annulé',
    'status.refunded': 'Remboursé'
  },
  
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.tours': '行程',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',
    'nav.login': '登录',
    'nav.register': '注册',
    'nav.dashboard': '控制面板',
    'nav.bookings': '我的预订',
    'nav.backoffice': '后台管理',
    'nav.agency': '代理商门户',
    'nav.logout': '退出',
    'nav.language': '语言',
    
    // Home Page
    'home.hero.title': '体验终极 Safari 冒险',
    'home.hero.subtitle': '与 Getatos Safari 一起探索坦桑尼亚壮观的野生动物和风景',
    'home.hero.cta': '探索行程',
    'home.featured.title': '精选行程',
    'home.featured.subtitle': '发现我们最受欢迎的 Safari 体验',
    'home.why.title': '为什么选择我们',
    'home.why.subtitle': '体验一生的冒险',
    'home.cta.title': '准备好您的 Safari 之旅了吗？',
    'home.cta.subtitle': '立即预订，创造难忘回忆',
    'home.cta.button': '开始您的旅程',
    
    // Tours
    'tours.title': '我们的 Safari 行程',
    'tours.search': '搜索行程...',
    'tours.filter': '筛选',
    'tours.duration': '时长',
    'tours.price': '价格',
    'tours.category': '类别',
    'tours.bookNow': '立即预订',
    'tours.viewDetails': '查看详情',
    'tours.days': '天',
    'tours.from': '起',
    'tours.perPerson': '每人',
    'tours.included': '包含',
    'tours.excluded': '不包含',
    'tours.itinerary': '行程安排',
    'tours.highlights': '亮点',
    'tours.reviews': '评价',
    'tours.availability': '可用性',
    
    // Booking
    'booking.title': '预订您的 Safari',
    'booking.step1': '选择日期和客人',
    'booking.step2': '住宿',
    'booking.step3': '附加服务',
    'booking.step4': '确认并支付',
    'booking.selectDate': '选择日期',
    'booking.participants': '客人数量',
    'booking.accommodation': '住宿等级',
    'booking.extras': '额外服务',
    'booking.review': '查看预订',
    'booking.total': '总价',
    'booking.confirm': '确认预订',
    'booking.success': '预订已确认！',
    'booking.reference': '参考编号',
    
    // Backoffice
    'backoffice.dashboard': '控制面板',
    'backoffice.tours': '行程管理',
    'backoffice.bookings': '预订',
    'backoffice.customers': '客户',
    'backoffice.reports': '报告',
    'backoffice.totalRevenue': '总收入',
    'backoffice.totalBookings': '总预订',
    'backoffice.activeCustomers': '活跃客户',
    'backoffice.recentBookings': '最近预订',
    'backoffice.status': '状态',
    'backoffice.actions': '操作',
    'backoffice.confirm': '确认',
    'backoffice.cancel': '取消',
    'backoffice.view': '查看详情',
    
    // Agency
    'agency.dashboard': '代理商控制面板',
    'agency.bookings': '我的预订',
    'agency.commission': '佣金',
    'agency.clients': '我的客户',
    'agency.quickBook': '快速预订',
    'agency.quotes': '报价生成器',
    'agency.resources': '资源',
    'agency.totalSales': '总销售额',
    'agency.totalCommission': '总佣金',
    
    // Common
    'common.loading': '加载中...',
    'common.error': '发生错误',
    'common.success': '成功！',
    'common.save': '保存',
    'common.cancel': '取消',
    'common.delete': '删除',
    'common.edit': '编辑',
    'common.view': '查看',
    'common.search': '搜索',
    'common.filter': '筛选',
    'common.all': '全部',
    'common.none': '无',
    'common.yes': '是',
    'common.no': '否',
    'common.contact': '联系',
    'common.email': '邮箱',
    'common.phone': '电话',
    'common.address': '地址',
    'common.name': '姓名',
    'common.firstName': '名',
    'common.lastName': '姓',
    'common.submit': '提交',
    'common.close': '关闭',
    
    // Status
    'status.pending': '待处理',
    'status.confirmed': '已确认',
    'status.inProgress': '进行中',
    'status.completed': '已完成',
    'status.cancelled': '已取消',
    'status.refunded': '已退款'
  }
};

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private currentLanguage = new BehaviorSubject<Language>('en');
  currentLanguage$ = this.currentLanguage.asObservable();

  constructor() {
    this.loadSavedLanguage();
  }

  private loadSavedLanguage(): void {
    const saved = localStorage.getItem('getatos_language') as Language;
    if (saved && translations[saved]) {
      this.currentLanguage.next(saved);
    }
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.next(lang);
    localStorage.setItem('getatos_language', lang);
    document.documentElement.lang = lang;
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage.getValue();
  }

  t(key: keyof TranslationStrings): string {
    const lang = this.currentLanguage.getValue();
    return translations[lang][key] || translations['en'][key] || key;
  }

  getLanguages(): LanguageConfig[] {
    return SUPPORTED_LANGUAGES;
  }
}
