// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

import "@openzeppelin/contracts-upgradeable/utils/cryptography/draft-EIP712Upgradeable.sol";
import "./OrderMixin.sol";
import "./OrderRFQMixin.sol";

/// @title openocean Limit Order Protocol v2
contract LimitOrderProtocol is
    EIP712Upgradeable,
    OrderMixin,
    OrderRFQMixin
{

    function initialize() public initializer {
        __EIP712_init("openocean Limit Order Protocol", "2");
        __Ownable_init();
    }
    // solhint-disable-next-line func-name-mixedcase
    function DOMAIN_SEPARATOR() external view returns(bytes32) {
        return _domainSeparatorV4();
    }
}
