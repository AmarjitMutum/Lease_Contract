/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"utg/ui/Lease_Contract/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});