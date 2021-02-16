const { ether, expectRevert } = require('@openzeppelin/test-helpers');
const { accounts, contract } = require('@openzeppelin/test-environment');

const yearTokenContract = contract.fromArtifact('YEARNYFINETWORK');

const { expect } = require('chai');

describe('YEARNYFINETWORK Token Contract test', function () {

    const [deployer, user1, user2, user3] = accounts;

    before(async function () {
        /** SETUP SCENARIO */
        this.token = await yearTokenContract.new({ from: deployer });
    });

  it('the deployer is the owner', async function () {
    expect(await this.token.owner()).to.equal(deployer);
  });

    // it('Exploit', async function () {
    //     /** YOUR EXPLOIT GOES HERE */
 
    // });
});
