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
+ verify proxy admin, proxy on fantom testnet: unfortunately you can't verify the proxy admin and the proxy from the command line. Most likey they are verified automatically as many instances of the same proxy and proxy admin have been verified. 
+ verify Box: truffle run verify Box@{address} --network testnet
+ verify BoxV2: truffle run verify BoxV2@{address} --network test

sample of deployed addresses:
BoxV2:                          0xed09e572B348Bc2CF44cB5BE3E28dA1afaccCDE9
TransparentUpgradeableProxy:    0x652FE752F4d646de7c179D41914A87b8Af21aCcF
