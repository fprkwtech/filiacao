import { faker } from '@faker-js/faker';
import { LegalGuardian } from '@prisma/client';
import { createLegalGuardianFactory } from 'prisma/generated';

export const LegalGuardianFactory = (attrs?: Partial<LegalGuardian>) => {
  const birthDate = faker.date.birthdate().toISOString().slice(0, 10);

  return createLegalGuardianFactory({
    name: faker.name.findName(),
    relationship: 'pai',
    taxId: String(faker.datatype.number()),
    rg: String(faker.datatype.number()),
    birthDate: birthDate,
    email: faker.internet.email(),
    ...attrs,
  });
};
