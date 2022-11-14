# -transparentproxy-truffle
+ install the dependecies: npm install
+ compile the smart contract: truffle compile
+ deploy the smart contract to fantom testnet:
    - rename 2_upgrade_proxy.js to 2_upgrade_proxy.jsxx
    - truffle migrate --network testnet
+ upgrade the proxy:
    - rename 1_deploy_proxy.js to 1_deploy_proxy.jsxx
    - rename 2_upgrade_proxy.jsxx back to 2_upgrade_proxy.js
    - change {proxy_address} in 2_upgrade_proxy.js with the correct value (the address of the proxy)
    - truffle migrate --network testnet
+ verify the smart contract on fantom testnet: truffle run verify TransparentUpgradeableProxy@{proxy_address} --network testnet

