import { faker } from '@faker-js/faker';
import { Address, UF } from '@prisma/client';
import { createAddressFactory } from 'prisma/generated';

export const AddressFactory = (attrs?: Partial<Address>) =>
  createAddressFactory({
    zipcode: faker.address.zipCode().slice(0, 8),
    street: faker.address.streetAddress(),
    number: String(faker.datatype.number()),
    district: 'Bairro',
    city: faker.address.cityName(),
    state: UF.PR,
    ...attrs,
  });
