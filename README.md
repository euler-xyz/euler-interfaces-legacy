# Euler Contract Interfaces

* `contracts/IEuler.sol` - Solidity file containing all the interfaces needed for interacting with the core Euler protocol.
  * [Reference](https://docs.euler.xyz/developers/contract-reference)
  * [Examples](https://docs.euler.xyz/developers/integration-guide)

* `abis/` - ABIs that can be used to interact with the contracts from off-chain programs.
* `types` - Types for the ABIS to be imported into application

To use the interfaces as an NPM package you must add `@euler-xyz:registry=https://npm.pkg.github.com` to your repos `.npmrc` 
you will also need to authenticate to use `github_npm` [feed](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages).