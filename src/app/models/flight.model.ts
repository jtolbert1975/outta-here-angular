export interface FlightOffers {
  type: string;
  id: string;
  offerItems: OfferItems;
}

interface OfferItems {
  services: Services;
  price: Price;
  pricePerAdult: PricePerAdult;
}

interface Services {
  segments: Segments;
}

interface Segments {
  flightSegment: FlightSegment;
  pricingDetailPerAdult: PricingDetailPerAdult;
}
interface FlightSegment {
  depature: Depature;
  arrival: Arrival;
  carrierCode: string;
  number: number;
  aircraft: Aircraft;
  operating: Operating;
  duration: string;
}

interface Depature {
  iataCode: string;
  at: Date;
}

interface Arrival {
  iataCode: string;
  terminal: string;
  at: Date;
}

interface Aircraft {
  code: string;
}

interface Operating {
  carrierCode: string;
  number: number;
}

interface PricingDetailPerAdult {
  travelClass: string;
  fareClass: string;
  availability: string;
  fareBasis: string;
}

interface Price {
  total: number;
  totalTaxes: number;
}

interface PricePerAdult {
  total: number;
  totalTaxes: number;
}

