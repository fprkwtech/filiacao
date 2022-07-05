import { prismaMock } from '../prismaMock';

function createFactory<T>(model: any, props: T) {
  const create = () => prismaMock[model].create.mockResolvedValue(props);

  return {
    create,
    build: () => props,
  };
}

export default createFactory;
