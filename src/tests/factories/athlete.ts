import { faker } from '@faker-js/faker';
import { Athlete } from '@prisma/client';
import { createAthleteFactory } from 'prisma/generated';

export const AthleteFactory = (attrs?: Partial<Athlete>) => {
  const birthDate = faker.date.birthdate().toISOString().slice(0, 10);

  return createAthleteFactory({
    name: faker.name.findName(),
    rg: String(faker.datatype.number()),
    taxId: String(faker.datatype.number()),
    sex: 'M',
    email: faker.internet.email(),
    birthDate: birthDate,
    facebook: '',
    phone: '',
    cellphone: '',
    ...attrs,
  });
};
