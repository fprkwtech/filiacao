"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.createValidateHistoryFactory = exports.createFightStyleRelationFactory = exports.createSchoolAthleteFactory = exports.createMetadataFactory = exports.createAddressFactory = exports.createDocumentFactory = exports.createFightStyleFactory = exports.createSchoolTeacherFactory = exports.createTeacherAthleteFactory = exports.createTeacherFactory = exports.createSchoolFactory = exports.createAthleteFactory = exports.createFederationFactory = exports.createLegalGuardianFactory = void 0;
var prisma_factory_1 = require("prisma-factory");
function createLegalGuardianFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('LegalGuardian', requiredAttrs, __assign(__assign({}, options), { client: '/Users/itamar/workspace/topicos/node_modules/@prisma/client' }), hooks);
}
exports.createLegalGuardianFactory = createLegalGuardianFactory;
function createFederationFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('Federation', requiredAttrs, __assign(__assign({}, options), { client: '/Users/itamar/workspace/topicos/node_modules/@prisma/client' }), hooks);
}
exports.createFederationFactory = createFederationFactory;
function createAthleteFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('Athlete', requiredAttrs, __assign(__assign({}, options), { client: '/Users/itamar/workspace/topicos/node_modules/@prisma/client' }), hooks);
}
exports.createAthleteFactory = createAthleteFactory;
function createSchoolFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('School', requiredAttrs, __assign(__assign({}, options), { client: '/Users/itamar/workspace/topicos/node_modules/@prisma/client' }), hooks);
}
exports.createSchoolFactory = createSchoolFactory;
function createTeacherFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('Teacher', requiredAttrs, __assign(__assign({}, options), { client: '/Users/itamar/workspace/topicos/node_modules/@prisma/client' }), hooks);
}
exports.createTeacherFactory = createTeacherFactory;
function createTeacherAthleteFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('TeacherAthlete', requiredAttrs, __assign(__assign({}, options), { client: '/Users/itamar/workspace/topicos/node_modules/@prisma/client' }), hooks);
}
exports.createTeacherAthleteFactory = createTeacherAthleteFactory;
function createSchoolTeacherFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('SchoolTeacher', requiredAttrs, __assign(__assign({}, options), { client: '/Users/itamar/workspace/topicos/node_modules/@prisma/client' }), hooks);
}
exports.createSchoolTeacherFactory = createSchoolTeacherFactory;
function createFightStyleFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('FightStyle', requiredAttrs, __assign(__assign({}, options), { client: '/Users/itamar/workspace/topicos/node_modules/@prisma/client' }), hooks);
}
exports.createFightStyleFactory = createFightStyleFactory;
function createDocumentFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('Document', requiredAttrs, __assign(__assign({}, options), { client: '/Users/itamar/workspace/topicos/node_modules/@prisma/client' }), hooks);
}
exports.createDocumentFactory = createDocumentFactory;
function createAddressFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('Address', requiredAttrs, __assign(__assign({}, options), { client: '/Users/itamar/workspace/topicos/node_modules/@prisma/client' }), hooks);
}
exports.createAddressFactory = createAddressFactory;
function createMetadataFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('Metadata', requiredAttrs, __assign(__assign({}, options), { client: '/Users/itamar/workspace/topicos/node_modules/@prisma/client' }), hooks);
}
exports.createMetadataFactory = createMetadataFactory;
function createSchoolAthleteFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('SchoolAthlete', requiredAttrs, __assign(__assign({}, options), { client: '/Users/itamar/workspace/topicos/node_modules/@prisma/client' }), hooks);
}
exports.createSchoolAthleteFactory = createSchoolAthleteFactory;
function createFightStyleRelationFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('FightStyleRelation', requiredAttrs, __assign(__assign({}, options), { client: '/Users/itamar/workspace/topicos/node_modules/@prisma/client' }), hooks);
}
exports.createFightStyleRelationFactory = createFightStyleRelationFactory;
function createValidateHistoryFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('ValidateHistory', requiredAttrs, __assign(__assign({}, options), { client: '/Users/itamar/workspace/topicos/node_modules/@prisma/client' }), hooks);
}
exports.createValidateHistoryFactory = createValidateHistoryFactory;
