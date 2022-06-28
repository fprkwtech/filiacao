import { faker } from '@faker-js/faker';
import { Federation } from '@prisma/client';
import { createFederationFactory } from 'prisma/generated';

export const FederationFactory = (attrs?: Partial<Federation>) =>
  createFederationFactory({
    tradeName: faker.company.companyName(),
    companyName: faker.company.companyName(),
    taxId: String(faker.datatype.number()),
    email: faker.internet.email(),
    president: faker.name.findName(),
    ...attrs,
  });
