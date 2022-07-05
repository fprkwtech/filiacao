import { createMocks } from 'node-mocks-http';

import { AddressFactory } from '~/tests/factories/address';
import { AthleteFactory } from '~/tests/factories/athlete';
import { FederationFactory } from '~/tests/factories/federation';
import { LegalGuardianFactory } from '~/tests/factories/legalGuardian';
import { SchoolFactory } from '~/tests/factories/school';
import { TeacherFactory } from '~/tests/factories/teacher';

import handler from './atletas';

describe('POST /api/escola/[school_id]/atletas', () => {
  it('create a athlete', async () => {
    const federation = await FederationFactory().create();
    const school = await SchoolFactory({ federationId: federation.id }).create();
    const teacher = await TeacherFactory({ federationId: federation.id }).create();
    const athlete = AthleteFactory().build();
    const athleteAddress = AddressFactory().build();
    const legalGuardian = LegalGuardianFactory().build();
    const legalGuardianAddress = AddressFactory().build();

    const { req, res } = createMocks({
      method: 'POST',
      query: {
        school_id: school.id,
      },
      body: {
        payload: {
          athleteName: athlete.name,
          athleteTaxId: athlete.taxId,
          athleteRg: athlete.rg,
          athleteBirthDate: athlete.birthDate,
          athleteSex: athlete.sex,
          athleteEmail: athlete.email,
          athleteFacebook: athlete.facebook,
          athletePhone: athlete.phone,
          athleteCellphone: athlete.cellphone,
          athleteAddressZipCode: athleteAddress.zipcode,
          athleteAddressStreet: athleteAddress.street,
          athleteAddressNumber: athleteAddress.number,
          athleteAddressComplement: athleteAddress.complement,
          athleteAddressDistrict: athleteAddress.district,
          athleteAddressCity: athleteAddress.city,
          athleteAddressState: athleteAddress.state,
          legalGuardianName: legalGuardian.name,
          legalGuardianTaxId: legalGuardian.taxId,
          legalGuardianRg: legalGuardian.rg,
          legalGuardianBirthDate: legalGuardian.birthDate,
          legalGuardianRelationship: legalGuardian.relationship,
          legalGuardianAddressZipCode: legalGuardianAddress.zipcode,
          legalGuardianAddressStreet: legalGuardianAddress.street,
          legalGuardianAddressNumber: legalGuardianAddress.number,
          legalGuardianAddressComplement: legalGuardianAddress.complement,
          legalGuardianAddressDistrict: legalGuardianAddress.district,
          legalGuardianAddressCity: legalGuardianAddress.city,
          legalGuardianAddressState: legalGuardianAddress.state,
          teacherId: teacher.id,
          fightStyle: '2',
        },
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toEqual(200);
    expect(JSON.parse(res._getData())).toEqual({ status: 'ok' });
  });
});
