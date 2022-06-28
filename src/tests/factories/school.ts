import { faker } from '@faker-js/faker';
import { School } from '@prisma/client';
import { createSchoolFactory } from 'prisma/generated';

export const SchoolFactory = (attrs?: Partial<School>) =>
  createSchoolFactory({
    companyName: faker.company.companyName(),
    tradeName: faker.company.companyName(),
    taxId: String(faker.datatype.number()),
    ...attrs,
  });
