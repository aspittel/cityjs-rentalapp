import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RentalMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Rental {
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly price: number;
  readonly location: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Rental, RentalMetaData>);
  static copyOf(source: Rental, mutator: (draft: MutableModel<Rental, RentalMetaData>) => MutableModel<Rental, RentalMetaData> | void): Rental;
}