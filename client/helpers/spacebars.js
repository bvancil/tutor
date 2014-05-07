UI.registerHelper('pluralize', function(number, singularNoun, pluralNoun) {
	if (number===1)
	  return '1 ' + singularNoun;
	else
	  return number + ' ' + pluralNoun;
});

UI.registerHelper('isAdminUser', function() {
  return Roles.userIsInRole(Meteor.user(), ['admin']);
});
