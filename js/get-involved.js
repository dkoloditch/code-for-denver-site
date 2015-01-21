System.register(["libs/jquery/dist/jquery.min", "snabbt.js"], function (_export) {
  "use strict";

  var $, snabbt, ele, roles, randomRole, insertRoleText;
  _export("animateRoles", animateRoles);

  function animateRoles() {
    snabbt(ele, {
      position: [0, -200, 0],
      easing: function (val) {
        return Math.sin(Math.PI * val);
      },
      loop: 1,
      delay: 3000,
      callback: function () {
        insertRoleText();
        animateRoles();
      }
    });
  }return {
    setters: [function (_libsJqueryDistJqueryMin) {
      $ = _libsJqueryDistJqueryMin["default"];
    }, function (_snabbtJs) {
      snabbt = _snabbtJs["default"];
    }],
    execute: function () {
      ele = $("#is-this-you");
      roles = ["a developer", "a community organizer", "a graphic-designer", "a facilitator", "a project-manager", "a government representative", "a student", "an ally", "curious about Code For Denver", "a technical writer"];
      randomRole = function () {
        return roles[0 | Math.random() * roles.length];
      };

      insertRoleText = function () {
        var role = randomRole();
        var template = "<span id=\"underline\"\n\t\t\t\t\tclass=\"label label-default\n\t\t\t\t\textra-top-margin\">" + role + "</span>?";
        ele.html(template);
      };

      ;
    }
  };
});
