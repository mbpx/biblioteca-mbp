export class GoogleBooksSearchResponse {
    kind: string;
    totalItems: number;
    items: GoogleBook[];
}

export class GoogleBook {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
    searchInfo: SearchInfo;
}

export class VolumeInfo {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: IndustryIdentifier[];
    readingModes: ReadingModes;
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

export class IndustryIdentifier {
    type: string;
    identifier: string;
}

export class ReadingModes {
    text: boolean;
    image: boolean;
}

export class PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}

export class ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

export class SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: ListPrice;
    retailPrice: RetailPrice;
    buyLink: string;
    offers: Offer[];
}

export class ListPrice {
    amount: number;
    currencyCode: string;
}

export class RetailPrice {
    amount: number;
    currencyCode: string;
}

export class Offer {
    finskyOfferType: number;
    listPrice: ListPrice;
    retailPrice: RetailPrice;
}

export class AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: Epub;
    pdf: Pdf;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

export class Epub {
    isAvailable: boolean;
    acsTokenLink: string;
}

export class Pdf {
    isAvailable: boolean;
    acsTokenLink: string;
}

export class SearchInfo {
    textSnippet: string;
}