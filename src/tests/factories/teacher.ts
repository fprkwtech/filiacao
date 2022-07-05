import { faker } from '@faker-js/faker';
import { Teacher } from '@prisma/client';
import { createTeacherFactory } from 'prisma/generated';

export const TeacherFactory = (attrs?: Partial<Teacher>) => {
  const birthDate = faker.date.birthdate().toISOString();

  return createTeacherFactory({
    name: faker.name.findName(),
    rg: String(faker.datatype.number()),
    issuingAgency: '',
    taxId: String(faker.datatype.number()),
    sex: 'M',
    email: faker.internet.email(),
    birthDate: birthDate,
    facebook: '',
    phone: '',
    cellphone: faker.phone.number(),
    ...attrs,
  });
};
