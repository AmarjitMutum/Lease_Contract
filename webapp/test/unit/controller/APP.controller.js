/*global QUnit*/

sap.ui.define([
	"utg/ui/Lease_Contract/controller/APP.controller"
], function (oController) {
	"use strict";

	QUnit.module("APP Controller");

	QUnit.test("I should test the APP controller", function (assert) {
		var oAppController = new oController();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});