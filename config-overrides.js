const { useBabelRc, override } = require("customize-cra");

// eslint-disable-next-line react-hooks/rules-of-hooks
module.export = override(useBabelRc());
