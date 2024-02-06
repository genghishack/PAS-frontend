import {CategoryAttributes, defaultCategoryAttributes} from "./category";
import {RelationshipObj} from "./api";

export type ProfessionalAttributes = {
  nameLast: string;
  nameFirst: string;
  namePrefix: string;
  nameSuffix: string;
  addressCity: string;
  addressState: string;
  addressCountry: string;
  organization: string;
  categories: CategoryAttributes[];
  active?: boolean;
  deleted?: boolean;
  addressPostalCode?: string;
  addressStreet1?: string;
  addressStreet2?: string;
  barId?: string;
  comments?: string;
  email?: string;
  internalComments?: string;
  internalReminders?: string;
  phoneCell?: string;
  phoneFax?: string;
  phoneMain?: string;
  publications?: string;
  socialMediaIds?: string;
  speakingTopic?: string;
  specialties?: string;
  webUrl?: string;
  geojson: string;
}
const defaultProfessionalAttributes: ProfessionalAttributes = {
  nameLast: '',
  nameFirst: '',
  namePrefix: '',
  nameSuffix: '',
  addressCity: '',
  addressState: '',
  addressCountry: '',
  organization: '',
  categories: [defaultCategoryAttributes],
  geojson: '[]',
}

export interface IProfessionalAttributes {
  geojson: string;
}

export type ProfessionalObj = {
  type: 'professional';
  id: string;
  attributes: ProfessionalAttributes;
  relationships?: {
    categories: {
      data: RelationshipObj[]
    }
  }
}
export const defaultProfessionalObj: ProfessionalObj = {
  type: 'professional',
  id: '',
  attributes: defaultProfessionalAttributes
}

export interface IProfessionalObj {
  attributes: ProfessionalAttributes;
}
