import {
  IndividualCustomer,
  EnterpriseCustomer
} from "./customer";

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  companyName: string,
  cnpj: string
): EnterpriseCustomer => {
  return new EnterpriseCustomer(companyName, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Ryan', 'Matusalém', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'Ryan');
    expect(sut).toHaveProperty('lastName', 'Matusalém');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Ryan', 'Matusalém', '111.111.111-11');
    expect(sut.getName()).toBe('Ryan Matusalém');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have companyName and cnpj', () => {
    const sut = createEnterpriseCustomer('Spotnify', '787878787');
    expect(sut).toHaveProperty('companyName', 'Spotnify');
    expect(sut).toHaveProperty('cnpj', '787878787');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Spotnify', '787878787');
    expect(sut.getName()).toBe('Spotnify');
    expect(sut.getIDN()).toBe('787878787');
  });
});
